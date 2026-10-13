import { Link } from "react-router-dom";
import TerraIgnisLogo from "./TerraIgnisLogo";
import { Linkedin, Instagram, Youtube, Facebook } from "lucide-react";

const footerLinks = [
  { label: "Inicio", path: "/" },
  { label: "Quiénes Somos", path: "/quienes-somos" },
  { label: "Operaciones", path: "/operaciones" },
  { label: "Proveedores y contrataciones" },
  { label: "Compromiso Ambiental", path: "/ambiental" },
  { label: "Noticias", path: "/noticias" },
  { label: "Contacto", path: "/contacto" },
];

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/terra-ignis-energ%C3%ADa/" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/terraignisenergia?igsh=MWhmOTY5cnppOXN0dA==" },
  { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@terraignisenergia" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/p/Terra-Ignis-Energ%C3%ADa-61572163385634/?wa_logging_event=video_play_open" },
];

const Footer = () => (
  <footer className="bg-dark text-dark-foreground">
    <div className="container-ti section-padding">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <TerraIgnisLogo />
          <p className="mt-4 text-sm text-dark-foreground/60 max-w-xs">
            Terra Ignis Energía S.A. — Tierra del Fuego, Argentina
          </p>
        </div>

        <div>
          <h4 className="font-bold text-sm tracking-wider mb-4 text-accent">NAVEGACIÓN</h4>
          <div className="flex flex-col gap-2">
            {footerLinks.map((l) => (
              l.path ? (
                <Link key={l.label} to={l.path} className="text-sm text-dark-foreground/70 hover:text-accent transition-colors">
                  {l.label}
                </Link>
              ) : (
                <span key={l.label} className="text-sm text-dark-foreground/70">
                  {l.label}
                </span>
              )
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold text-sm tracking-wider mb-4 text-accent">SEGUINOS</h4>
          <div className="flex gap-4">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="text-dark-foreground/60 hover:text-accent transition-colors">
                <s.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-dark-foreground/10 text-center text-xs text-dark-foreground/40">
        © {new Date().getFullYear()} Terra Ignis Energía S.A. Todos los derechos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
