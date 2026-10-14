import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import TerraIgnisLogo from "./TerraIgnisLogo";

const navLinks = [
  { label: "Inicio", path: "/" },
  { label: "Quiénes Somos", path: "/quienes-somos" },
  { label: "Operaciones", path: "/operaciones" },
  { label: "Proveedores y contrataciones", path: "/proveedores-y-contrataciones" },
  { label: "Compromiso Ambiental", path: "/ambiental" },
  { label: "Contacto", path: "/contacto" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isSingleNoticia = location.pathname.startsWith("/noticias/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled || isSingleNoticia ? "bg-primary shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container-ti flex items-center justify-between h-16 md:h-20 section-padding !py-0">
        <TerraIgnisLogo />

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            l.path ? (
              <Link
                key={l.label}
                to={l.path}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-accent ${
                  location.pathname === l.path ? "text-accent" : "text-primary-foreground"
                }`}
              >
                {l.label}
              </Link>
            ) : (
              <span key={l.label} className="text-sm font-medium tracking-wide text-primary-foreground">
                {l.label}
              </span>
            )
          ))}
          <a
            href="https://encuentros.terraignisenergia.com/"
            className="ml-2 px-4 py-2 border border-accent text-accent font-semibold text-sm rounded whitespace-nowrap hover:bg-accent hover:text-accent-foreground transition"
          >
            Encuentros
          </a>
          <Link
            to="/noticias"
            className="px-4 py-2 border border-accent bg-accent text-accent-foreground font-semibold text-sm rounded whitespace-nowrap hover:brightness-110 transition"
          >
            Sala de prensa
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-primary-foreground"
          aria-label="Menú"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-primary border-t border-primary-foreground/10">
        <div className="container-ti flex flex-col gap-4 py-6 px-4">
          {navLinks.map((l) => (
            l.path ? (
              <Link
                key={l.label}
                to={l.path}
                className={`text-base font-medium transition-colors hover:text-accent ${
                  location.pathname === l.path ? "text-accent" : "text-primary-foreground"
                }`}
              >
                {l.label}
              </Link>
            ) : (
              <span key={l.label} className="text-base font-medium text-primary-foreground">
                {l.label}
              </span>
            )
          ))}
            <a
              href="https://encuentros.terraignisenergia.com/"
              className="mt-2 px-5 py-2 border border-accent text-accent font-semibold text-sm rounded text-center"
            >
              Encuentros
            </a>
            <Link
              to="/noticias"
              className="px-5 py-2 border border-accent bg-accent text-accent-foreground font-semibold text-sm rounded text-center"
            >
              Sala de prensa
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
