import { useEffect } from "react";

interface SeoMetaProps {
  title: string;
  description: string;
  url: string;
  image: string;
  type?: "website" | "article";
  structuredData?: Record<string, unknown>;
}

const ensureMeta = (attribute: "name" | "property", key: string, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
};

const SeoMeta = ({ title, description, url, image, type = "website", structuredData }: SeoMetaProps) => {
  useEffect(() => {
    const absoluteUrl = new URL(url, window.location.origin).href;
    const absoluteImage = new URL(image, window.location.origin).href;

    document.title = title;
    ensureMeta("name", "description", description);
    ensureMeta("property", "og:type", type);
    ensureMeta("property", "og:site_name", "Terra Ignis Energía");
    ensureMeta("property", "og:locale", "es_AR");
    ensureMeta("property", "og:url", absoluteUrl);
    ensureMeta("property", "og:title", title);
    ensureMeta("property", "og:description", description);
    ensureMeta("property", "og:image", absoluteImage);
    ensureMeta("property", "og:image:secure_url", absoluteImage);
    ensureMeta("property", "og:image:alt", title);
    ensureMeta("name", "twitter:card", "summary_large_image");
    ensureMeta("name", "twitter:title", title);
    ensureMeta("name", "twitter:description", description);
    ensureMeta("name", "twitter:image", absoluteImage);
    ensureMeta("name", "twitter:image:alt", title);

    const structuredDataId = "page-structured-data";
    let structuredDataScript = document.head.querySelector<HTMLScriptElement>(`#${structuredDataId}`);

    if (structuredData) {
      if (!structuredDataScript) {
        structuredDataScript = document.createElement("script");
        structuredDataScript.id = structuredDataId;
        structuredDataScript.type = "application/ld+json";
        document.head.appendChild(structuredDataScript);
      }
      structuredDataScript.textContent = JSON.stringify(structuredData);
    } else {
      structuredDataScript?.remove();
    }

    return () => {
      document.head.querySelector(`#${structuredDataId}`)?.remove();
    };
  }, [description, image, structuredData, title, type, url]);

  return null;
};

export default SeoMeta;
