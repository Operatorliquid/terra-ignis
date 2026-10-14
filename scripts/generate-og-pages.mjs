import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const root = resolve(process.cwd());
const indexPath = resolve(root, "dist/index.html");
const newsSourcePath = resolve(root, "src/pages/Noticias.tsx");
const manifestPath = resolve(root, "dist/.vite/manifest.json");
const indexHtml = readFileSync(indexPath, "utf8");
const newsSource = readFileSync(newsSourcePath, "utf8");
const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
const siteUrl = "https://terraignisenergia.com";
const defaultImage = `${siteUrl}/og-default.svg`;
const maximilianoPersonStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Maximiliano D'Alessio",
  jobTitle: "Presidente del Directorio",
  url: `${siteUrl}/quienes-somos`,
  worksFor: {
    "@type": "Organization",
    name: "Terra Ignis Energía S.A.",
    url: siteUrl,
  },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Universidad de Buenos Aires" },
    { "@type": "CollegeOrUniversity", name: "FLACSO Argentina" },
    { "@type": "CollegeOrUniversity", name: "Universidad de San Andrés" },
  ],
  sameAs: ["https://www.linkedin.com/in/maxidalessio/"],
};

const imageSourceByNewsId = {
  "encuentro-repensar-cuencas-maduras": "src/assets/octubre-14/encuentro-cuencas-maduras.jpg",
  "eloff-areas-maduras-camino-correcto": "src/assets/octubre-6/eloff.jpeg",
  "nuevo-equipo-workover": "src/assets/septiembre-27/1.jpeg",
  "final-tdf-innova-2026": "src/assets/septiembre-22/2.jpeg",
  "tdf-innova-terra-ignis": "src/assets/proyamb/proyamb1.jpeg",
  "gran-premio-de-la-hermandad": "src/assets/agosto/prensa.jpeg",
  "convenio-deporte-fueguino": "src/assets/julio-17/julio2.jpeg",
  "agenda-neuquen": "src/assets/julio-14/5.jpeg",
  "convenio-colegio-ingenieros": "src/assets/news-placeholder.jpg",
  "presentacion-canada": "src/assets/9jun.jpg",
  "saneamiento-velitec": "src/assets/junio-3/WhatsApp Image 2026-05-30 at 11.49.45 AM.jpeg",
  "convenio-btf": "src/assets/mayo-12/FOTO  A.jpeg",
  "lanzamiento-terra-ignis": "src/assets/abril-16/1.JPG",
  "programa-mipymes-cfi": "src/assets/abril-13/WhatsApp Image 2026-06-08 at 3.54.00 PM (1).jpeg",
  "maximizar-potencial": "src/assets/news-4.jpg",
  "asume-operacion": "src/assets/news-1.jpg",
  "nueva-etapa-energetica": "src/assets/abril-8/1.jpeg",
  "plan-remediacion": "src/assets/news-2.jpg",
  "nuevos-puestos": "src/assets/news-3.jpg",
  "informe-pasivos-ambientales": "src/assets/marzo-23/WhatsApp Image 2026-06-08 at 3.53.58 PM.jpeg",
  "acuerdo-legislativo": "src/assets/news-4.jpg",
  "inversion-tecnologia": "src/assets/news-5.jpg",
  "convenio-universidades": "src/assets/news-6.jpg",
};

const imageDimensionsByNewsId = {
  "encuentro-repensar-cuencas-maduras": { width: "1600", height: "999" },
  "eloff-areas-maduras-camino-correcto": { width: "390", height: "390" },
  "nuevo-equipo-workover": { width: "1175", height: "772" },
};

const getImageUrl = (id) => {
  const source = imageSourceByNewsId[id];
  const asset = source ? manifest[source] : null;
  return asset ? `${siteUrl}/${asset.file}` : defaultImage;
};

const getImageType = (imageUrl) => imageUrl.endsWith(".png") ? "image/png" : imageUrl.endsWith(".svg") ? "image/svg+xml" : "image/jpeg";

const escapeHtml = (value) => value
  .replaceAll("&", "&amp;")
  .replaceAll("\"", "&quot;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;");

const news = newsSource
  .split(/\r?\n/)
  .filter((line) => /^\s*\{ id:/.test(line))
  .map((line) => {
    const match = line.match(/\{ id: "([^"]+)", date: "([^"]+)", title: "([^"]+)", cat: "([^"]+)", summary: "([^"]+)"/);
    return match ? { id: match[1], title: match[3], summary: match[5] } : null;
  })
  .filter(Boolean);

const replaceMeta = (html, attribute, key, content) => {
  const escapedContent = escapeHtml(content);
  const pattern = new RegExp(`<meta ${attribute}="${key}" content="[^"]*" ?\\/?>(?:\\n)?`, "g");
  return html.replace(pattern, `<meta ${attribute}="${key}" content="${escapedContent}" />\n`);
};

const makePage = ({ id, title, summary }) => {
  const pageTitle = `${title} | Terra Ignis Energía`;
  const pageUrl = `${siteUrl}/noticias/${id}`;
  const imageUrl = getImageUrl(id);
  let html = indexHtml.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(pageTitle)}</title>`);

  html = replaceMeta(html, "name", "description", summary);
  html = html.replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${pageUrl}" />`);
  html = replaceMeta(html, "property", "og:type", "article");
  html = replaceMeta(html, "property", "og:url", pageUrl);
  html = replaceMeta(html, "property", "og:title", pageTitle);
  html = replaceMeta(html, "property", "og:description", summary);
  html = replaceMeta(html, "property", "og:image", imageUrl);
  html = replaceMeta(html, "property", "og:image:secure_url", imageUrl);
  html = replaceMeta(html, "property", "og:image:type", getImageType(imageUrl));
  const imageDimensions = imageDimensionsByNewsId[id];
  if (imageDimensions) {
    html = replaceMeta(html, "property", "og:image:width", imageDimensions.width);
    html = replaceMeta(html, "property", "og:image:height", imageDimensions.height);
  } else {
    html = html.replace(/<meta property="og:image:(?:width|height)" content="[^"]*" \/>\n/g, "");
  }
  html = replaceMeta(html, "property", "og:image:alt", title);
  html = replaceMeta(html, "name", "twitter:title", pageTitle);
  html = replaceMeta(html, "name", "twitter:description", summary);
  html = replaceMeta(html, "name", "twitter:image", imageUrl);
  html = replaceMeta(html, "name", "twitter:image:alt", title);

  return html;
};

const makeNewsListingPage = () => {
  const title = "Noticias | Terra Ignis Energía";
  const summary = "Sala de prensa de Terra Ignis Energía: novedades institucionales, operaciones, ambiente y desarrollo productivo de Tierra del Fuego.";
  const pageUrl = `${siteUrl}/noticias`;
  let html = indexHtml.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(title)}</title>`);

  html = replaceMeta(html, "name", "description", summary);
  html = html.replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${pageUrl}" />`);
  html = replaceMeta(html, "property", "og:type", "website");
  html = replaceMeta(html, "property", "og:url", pageUrl);
  html = replaceMeta(html, "property", "og:title", title);
  html = replaceMeta(html, "property", "og:description", summary);
  html = replaceMeta(html, "property", "og:image", defaultImage);
  html = replaceMeta(html, "property", "og:image:secure_url", defaultImage);
  html = replaceMeta(html, "property", "og:image:alt", title);
  html = replaceMeta(html, "name", "twitter:title", title);
  html = replaceMeta(html, "name", "twitter:description", summary);
  html = replaceMeta(html, "name", "twitter:image", defaultImage);
  html = replaceMeta(html, "name", "twitter:image:alt", title);

  return html;
};

const makeProvidersPage = () => {
  const title = "Proveedores y contrataciones | Terra Ignis Energía";
  const summary = "Información sobre licitaciones, contrataciones y oportunidades para proveedores de Terra Ignis Energía.";
  const pageUrl = `${siteUrl}/proveedores-y-contrataciones`;
  const operationsImage = manifest["src/assets/operations-hero.jpg"];
  const imageUrl = operationsImage ? `${siteUrl}/${operationsImage.file}` : defaultImage;
  let html = indexHtml.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(title)}</title>`);

  html = replaceMeta(html, "name", "description", summary);
  html = html.replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${pageUrl}" />`);
  html = replaceMeta(html, "property", "og:type", "website");
  html = replaceMeta(html, "property", "og:url", pageUrl);
  html = replaceMeta(html, "property", "og:title", title);
  html = replaceMeta(html, "property", "og:description", summary);
  html = replaceMeta(html, "property", "og:image", imageUrl);
  html = replaceMeta(html, "property", "og:image:secure_url", imageUrl);
  html = replaceMeta(html, "property", "og:image:alt", title);
  html = replaceMeta(html, "name", "twitter:title", title);
  html = replaceMeta(html, "name", "twitter:description", summary);
  html = replaceMeta(html, "name", "twitter:image", imageUrl);
  html = replaceMeta(html, "name", "twitter:image:alt", title);

  return html;
};

const makeAboutPage = () => {
  const title = "Quiénes somos | Terra Ignis Energía";
  const summary = "Historia, estructura institucional y equipo de gestión de Terra Ignis Energía, la empresa estatal de energía de Tierra del Fuego.";
  const pageUrl = `${siteUrl}/quienes-somos`;
  const heroImage = manifest["src/assets/quienes-somos-hero.jpg"];
  const imageUrl = heroImage ? `${siteUrl}/${heroImage.file}` : defaultImage;
  const jsonLd = JSON.stringify(maximilianoPersonStructuredData).replaceAll("<", "\\u003c");
  let html = indexHtml.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(title)}</title>`);

  html = replaceMeta(html, "name", "description", summary);
  html = html.replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${pageUrl}" />`);
  html = replaceMeta(html, "property", "og:type", "website");
  html = replaceMeta(html, "property", "og:url", pageUrl);
  html = replaceMeta(html, "property", "og:title", title);
  html = replaceMeta(html, "property", "og:description", summary);
  html = replaceMeta(html, "property", "og:image", imageUrl);
  html = replaceMeta(html, "property", "og:image:secure_url", imageUrl);
  html = replaceMeta(html, "property", "og:image:alt", title);
  html = replaceMeta(html, "name", "twitter:title", title);
  html = replaceMeta(html, "name", "twitter:description", summary);
  html = replaceMeta(html, "name", "twitter:image", imageUrl);
  html = replaceMeta(html, "name", "twitter:image:alt", title);
  html = html.replace("</head>", `  <script id="page-structured-data" type="application/ld+json">${jsonLd}</script>\n</head>`);

  return html;
};

const listingPath = resolve(root, "dist/noticias/index.html");
mkdirSync(dirname(listingPath), { recursive: true });
writeFileSync(listingPath, makeNewsListingPage());

const providersPath = resolve(root, "dist/proveedores-y-contrataciones/index.html");
mkdirSync(dirname(providersPath), { recursive: true });
writeFileSync(providersPath, makeProvidersPage());

const aboutPath = resolve(root, "dist/quienes-somos/index.html");
mkdirSync(dirname(aboutPath), { recursive: true });
writeFileSync(aboutPath, makeAboutPage());

for (const item of news) {
  const outputPath = resolve(root, "dist/noticias", item.id, "index.html");
  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, makePage(item));
}

console.log(`Generated Open Graph pages for ${news.length} news items.`);
