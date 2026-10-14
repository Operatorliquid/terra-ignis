import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import heroImg from "@/assets/operations-hero.jpg";
import newsImg1 from "@/assets/news-1.jpg";
import newsImg2 from "@/assets/news-2.jpg";
import newsImg3 from "@/assets/news-3.jpg";
import newsImg4 from "@/assets/news-4.jpg";
import newsImg5 from "@/assets/news-5.jpg";
import newsImg6 from "@/assets/news-6.jpg";
import newsPlaceholder from "@/assets/news-placeholder.jpg";
import { ArrowRight } from "lucide-react";
import img9Jun from "@/assets/9jun.jpg";
import prensaAgosto from "@/assets/agosto/prensa.jpeg";
import proyamb1 from "@/assets/proyamb/proyamb1.jpeg";
import eloffImg from "@/assets/octubre-6/eloff.jpeg";
import encuentroCuencasImg from "@/assets/octubre-14/encuentro-cuencas-maduras.jpg";

const sortByNumericFilename = (a: string, b: string) => {
  const getValue = (path: string) => {
    const filename = path.split("/").pop()?.split(".")[0] ?? "";
    const digits = filename.match(/\d+/)?.[0];
    return Number(digits ?? 0);
  };
  return getValue(a) - getValue(b);
};

const globJulio17 = import.meta.glob('/src/assets/julio-17/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', { eager: true });
const imagenesJulio17 = Object.entries(globJulio17)
  .sort(([pathA], [pathB]) => sortByNumericFilename(pathA, pathB))
  .map(([, module]: [string, any]) => module.default);
const portadaJulio17 = imagenesJulio17[1] || imagenesJulio17[0] || newsPlaceholder;

const globJulio14 = import.meta.glob('/src/assets/julio-14/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', { eager: true });
const imagenesJulio14 = Object.entries(globJulio14)
  .sort(([pathA], [pathB]) => sortByNumericFilename(pathA, pathB))
  .map(([, module]: [string, any]) => module.default);
const portadaJulio14 = imagenesJulio14[4] || imagenesJulio14[0] || newsPlaceholder;

// Cargamos la primera imagen de la carpeta dinámicamente para usarla de portada
const globJunio26 = import.meta.glob('/src/assets/junio-26/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', { eager: true });
const imagenesJunio26 = Object.values(globJunio26).map((module: any) => module.default);
const portadaJunio26 = imagenesJunio26[0] || newsPlaceholder;

const globJunio3 = import.meta.glob('/src/assets/junio-3/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', { eager: true });
const imagenesJunio3 = Object.values(globJunio3).map((module: any) => module.default);
const portadaJunio3 = imagenesJunio3[0] || newsImg1; // Fallback por si la carpeta está vacía

const globMayo12 = import.meta.glob('/src/assets/mayo-12/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', { eager: true });
const imagenesMayo12 = Object.values(globMayo12).map((module: any) => module.default);
const portadaMayo12 = imagenesMayo12[0] || newsImg1;

const globAbril16 = import.meta.glob('/src/assets/abril-16/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', { eager: true });
const imagenesAbril16 = Object.values(globAbril16).map((module: any) => module.default);
const portadaAbril16 = imagenesAbril16[0] || newsImg1;

const globAbril8 = import.meta.glob('/src/assets/abril-8/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', { eager: true });
const imagenesAbril8 = Object.values(globAbril8).map((module: any) => module.default);
const portadaAbril8 = imagenesAbril8[0] || newsImg1;

const globAbril13 = import.meta.glob('/src/assets/abril-13/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', { eager: true });
const imagenesAbril13 = Object.values(globAbril13).map((module: any) => module.default);
const portadaAbril13 = imagenesAbril13[0] || newsImg1;

const globMarzo23 = import.meta.glob('/src/assets/marzo-23/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', { eager: true });
const imagenesMarzo23 = Object.values(globMarzo23).map((module: any) => module.default);
const portadaMarzo23 = imagenesMarzo23[0] || newsImg1;

const categories = ["Todas", "Institucional", "Operaciones", "Ambiental", "Empleo"];

const globWorkover = import.meta.glob('/src/assets/septiembre-27/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', { eager: true });
const imagenesWorkover = Object.entries(globWorkover)
  .sort(([pathA], [pathB]) => sortByNumericFilename(pathA, pathB))
  .map(([, module]: [string, any]) => module.default);
const portadaWorkover = imagenesWorkover[0] || newsPlaceholder;

const globTdfInnovaFinal = import.meta.glob('/src/assets/septiembre-22/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', { eager: true });
const imagenesTdfInnovaFinal = Object.entries(globTdfInnovaFinal)
  .sort(([pathA], [pathB]) => sortByNumericFilename(pathA, pathB))
  .map(([, module]: [string, any]) => module.default);
const portadaTdfInnovaFinal = imagenesTdfInnovaFinal[1] || imagenesTdfInnovaFinal[0] || newsPlaceholder;

export const allNews = [
  { id: "encuentro-repensar-cuencas-maduras", date: "14 Oct 2026", title: "Tierra del Fuego reunirá a referentes del sector energético para debatir el futuro de las cuencas maduras", cat: "Institucional", summary: "El encuentro “Repensar las Cuencas Maduras” se realizará el 26 y 27 de noviembre en Ushuaia, organizado por Terra Ignis Energía. La propuesta convocará a autoridades, empresas operadoras, compañías de servicios y especialistas para abordar los desafíos de inversión, competitividad y reactivación de los hidrocarburos convencionales.", img: encuentroCuencasImg },
  { id: "eloff-areas-maduras-camino-correcto", date: "6 Oct 2026", title: "Eloff sobre las áreas maduras: “El camino que se ha emprendido es el correcto”", cat: "Operaciones", summary: "El director de Terra Ignis Energía analizó el potencial de las áreas hidrocarburíferas transferidas y explicó que la recuperación de producción dependerá de un trabajo técnico de detalle, eficiencia operativa, tecnología y aprovechamiento del capital humano.", img: eloffImg },
  { id: "nuevo-equipo-workover", date: "27 Sep 2026", title: "Terra Ignis y Velitec fortalecen su operación con la llegada de un nuevo equipo de Workover", cat: "Operaciones", summary: "El nuevo equipo permitirá realizar intervenciones sobre pozos existentes para sostener y recuperar su capacidad productiva en las áreas operadas por Terra Ignis y Velitec.", img: portadaWorkover },
  { id: "final-tdf-innova-2026", date: "22 Sep 2026", title: "Terra Ignis acompañó la final de TDF Innova y reafirmó su apoyo a la innovación fueguina", cat: "Institucional", summary: "La empresa participó como patrocinadora de la sexta edición de TDF Innova, una iniciativa que impulsa y visibiliza proyectos emprendedores e innovadores de Tierra del Fuego.", img: portadaTdfInnovaFinal },
  { id: "tdf-innova-terra-ignis", date: "10 Ago 2026", title: "TERRA IGNIS APUESTA A LA INNOVACIÓN PARA IMPULSAR EL DESARROLLO PRODUCTIVO DE TIERRA DEL FUEGO", cat: "Institucional", summary: "La empresa provincial firmó un convenio con el Ministerio de Producción y Ambiente para incorporarse como agente patrocinador de la sexta edición de TDF Innova, acompañar una de sus categorías con un premio y extender el plazo de inscripción hasta el 18 de agosto.", img: proyamb1 },
  { id: "gran-premio-de-la-hermandad", date: "25 Jul 2026", title: "Terra Ignis acompaña al Gran Premio de la Hermandad con un aporte para fortalecer la seguridad de la competencia", cat: "Institucional", summary: "Terra Ignis suscribió un convenio con el Automóvil Club Río Grande y aportará 2.000 litros de combustible para los vehículos afectados al operativo de seguridad de la competencia binacional.", img: prensaAgosto },
  { id: "convenio-deporte-fueguino", date: "17 Jul 2026", title: "EL GOBIERNO PROVINCIAL Y TERRA IGNIS FIRMARON UN CONVENIO PARA FORTALECER EL DEPORTE FUEGUINO", cat: "Institucional", summary: "El Gobierno provincial y Terra Ignis suscribieron un convenio de colaboración para acompañar programas deportivos, infraestructura, equipamiento e iniciativas inclusivas en toda Tierra del Fuego.", img: portadaJulio17 },
  { id: "agenda-neuquen", date: "14 Jul 2026", title: "Terra Ignis avanza con una agenda estratégica junto a referentes del sector energético de Neuquén", cat: "Institucional", summary: "Autoridades de Terra Ignis desarrollaron una agenda institucional y técnica en Neuquén para fortalecer la cooperación entre empresas públicas energéticas y conocer experiencias de gestión ambiental e hidrocarburífera.", img: portadaJulio14 },
  { id: "convenio-colegio-ingenieros", date: "26 Jun 2026", title: "Terra Ignis Energía y el Colegio de Ingenieros de Tierra del Fuego firman un convenio para fortalecer la capacitación y la cooperación técnica", cat: "Institucional", summary: "Terra Ignis y el Colegio de Ingenieros suscribieron un convenio marco para impulsar capacitaciones, asistencia técnica e intercambio de conocimientos para el desarrollo energético provincial.", img: portadaJunio26 },
  { id: "presentacion-canada", date: "9 Jun 2026", title: "TERRA IGNIS PRESENTA EN CANADÁ EL MODELO FUEGUINO DE DESARROLLO ENERGÉTICO ANTE REFERENTES INTERNACIONALES DEL SECTOR", cat: "Institucional", summary: "La empresa provincial Terra Ignis Energía participa de la Global Energy Show 2026 en Canadá, exponiendo oportunidades de inversión y el modelo de articulación público-privada.", img: img9Jun },
  { id: "saneamiento-velitec", date: "3 Jun 2026", title: "Terra Ignis y Velitec avanzan la primera etapa de la campaña de saneamiento ambiental en yacimientos fueguinos", cat: "Ambiental", summary: "Avanza la campaña integral de deschatarrización y saneamiento ambiental en las áreas Fracción A, Fracción B y San Sebastián.", img: portadaJunio3 },
  { id: "convenio-btf", date: "12 May 2026", title: "EL BTF FIRMÓ UN CONVENIO CON TERRA IGNIS Y POTENCIA SU ROL EN LA ACTIVIDAD DE SEGUROS", cat: "Institucional", summary: "A través de este acuerdo, el Banco de Tierra del Fuego se constituye como el proveedor estratégico de coberturas para la empresa estatal, reforzando el rol de BTF Seguros.", img: portadaMayo12 },
  { id: "lanzamiento-terra-ignis", date: "16 Abr 2026", title: "GOBIERNO REALIZÓ EL LANZAMIENTO DE TERRA IGNIS ENERGÍA S.A. Y SE PRESENTÓ EL ACUERDO CON VELITEC S.A. PARA LA EXPLOTACIÓN DE HIDROCARBUROS", cat: "Institucional", summary: "El Gobierno de Tierra del Fuego AIAS realizó el lanzamiento oficial de Terra Ignis y presentó el acuerdo operativo con Velitec S.A. para explotar los pozos petroleros.", img: portadaAbril16 },
  { id: "programa-mipymes-cfi", date: "13 Abr 2026", title: "EL GOBERNADOR MELELLA FIRMÓ CON EL CFI UN PROGRAMA PARA FORTALECER MIPYMES FUEGUINAS EN SECTORES ACUÍCOLA E HIDROCARBURÍFERO", cat: "Institucional", summary: "El Gobernador Gustavo Melella suscribió con el Consejo Federal de Inversiones (CFI) y Terra Ignis un programa para fortalecer a las MiPyMEs locales.", img: portadaAbril13 },
  { id: "maximizar-potencial", date: "12 Abr 2026", title: "TERRA IGNIS: “APUNTAMOS A MAXIMIZAR EL POTENCIAL PRODUCTIVO DE LAS ÁREAS”", cat: "Operaciones", summary: "Verónica Tito brindó precisiones sobre el proceso técnico y administrativo que permitirá a la provincia retomar la operatividad de las áreas hidrocarburíferas.", img: newsImg4 },
  { id: "asume-operacion", date: "10 Abr 2026", title: "Terra Ignis asume la operación de siete áreas hidrocarburíferas", cat: "Institucional", summary: "La empresa estatal fueguina tomó el control operativo de las siete áreas que YPF revirtió a la provincia.", img: newsImg1 },
  { id: "nueva-etapa-energetica", date: "8 Abr 2026", title: "Terra Ignis impulsa una nueva etapa energética en Tierra del Fuego con foco en inversión, empleo y remediación ambiental", cat: "Institucional", summary: "La empresa provincial avanza en la consolidación de un modelo energético con participación estatal y operadores privados, garantizando la continuidad productiva.", img: portadaAbril8 },
  { id: "plan-remediacion", date: "5 Abr 2026", title: "Plan de remediación ambiental: USD 10 millones para cuidar la tierra", cat: "Ambiental", summary: "Se anunció el plan integral de remediación ambiental más ambicioso de la historia provincial.", img: newsImg2 },
  { id: "nuevos-puestos", date: "28 Mar 2026", title: "Nuevos puestos de trabajo para fueguinos en el sector energético", cat: "Empleo", summary: "Terra Ignis incorporará personal técnico y profesional priorizando mano de obra local.", img: newsImg3 },
  { id: "informe-pasivos-ambientales", date: "23 Mar 2026", title: "FEDEROVISKY PRESENTÓ UN INFORME SOBRE PASIVOS AMBIENTALES DE LA INDUSTRIA PETROLERA EN TIERRA DEL FUEGO", cat: "Ambiental", summary: "El asesor ambiental de Terra Ignis presentó los resultados de los estudios sobre pasivos ambientales derivados de la actividad petrolera en la provincia.", img: portadaMarzo23 },
  { id: "acuerdo-legislativo", date: "15 Mar 2026", title: "Acuerdo legislativo aprueba el traspaso de áreas de YPF", cat: "Institucional", summary: "La Legislatura de Tierra del Fuego aprobó por amplia mayoría el acuerdo de reversión.", img: newsImg4 },
  { id: "inversion-tecnologia", date: "1 Mar 2026", title: "Inversión en tecnología para optimizar la producción gasífera", cat: "Operaciones", summary: "Se adquirieron equipos de última generación para aumentar la eficiencia productiva.", img: newsImg5 },
  { id: "convenio-universidades", date: "15 Feb 2026", title: "Terra Ignis firma convenio con universidades fueguinas", cat: "Institucional", summary: "Acuerdo de cooperación para formación técnica y desarrollo de investigación aplicada.", img: newsImg6 },
];

const Noticias = () => {
  const [filter, setFilter] = useState("Todas");
  const filtered = filter === "Todas" ? allNews : allNews.filter((n) => n.cat === filter);

  return (
    <Layout>
      <PageHero title="Noticias" subtitle="Sala de prensa de Terra Ignis Energía" backgroundImage={heroImg} />

      <section className="bg-background section-padding">
        <div className="container-ti">
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-2 rounded text-sm font-semibold transition-colors ${
                  filter === c ? "bg-accent text-accent-foreground" : "bg-surface text-muted-foreground hover:bg-accent/10"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((n, i) => (
              <ScrollReveal key={i}>
                <div className="bg-background border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full">
                  <Link to={`/noticias/${n.id}`} className="block">
                    <img src={n.img} alt={n.title} className="w-full h-48 object-cover" loading="lazy" width={800} height={600} />
                  </Link>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-muted-foreground">{n.date}</span>
                      <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded font-medium">{n.cat}</span>
                    </div>
                    <h3 className="font-bold text-foreground leading-snug mb-2">{n.title}</h3>
                    <p className="text-sm text-muted-foreground">{n.summary}</p>
                    <Link to={`/noticias/${n.id}`} className="mt-auto pt-3 inline-flex items-center gap-1 text-accent text-sm font-semibold hover:gap-2 transition-all w-fit">
                      Leer más <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Noticias;
