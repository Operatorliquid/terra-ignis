import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import heroImg from "@/assets/hero-oil-field.jpg";
import trabajadoresImg from "@/assets/trabajadores-tie.jpg";
import { allNews } from "./Noticias";
import { Flame, HardHat, Leaf, Handshake, ArrowRight, MapPin } from "lucide-react";

const stats = [
  { value: "7", label: "Áreas operativas asumidas" },
  { value: "Histórica", label: "inversión en remediación ambiental." },
  { value: "Contribuimos a la producción del 20% del gas natural de la Cuenca Austral.", label: "", isText: true },
];

const pillars = [
  { icon: Flame, title: "Soberanía Energética", desc: "Las decisiones sobre nuestro petróleo y gas se toman en Tierra del Fuego." },
  { icon: HardHat, title: "Empleo Fueguino", desc: "Generar y cuidar el empleo de todos los fueguinos es nuestra misión central." },
  { icon: Leaf, title: "Compromiso Ambiental", desc: "USD 10 millones destinados a remediación de pasivos ambientales. Producción con responsabilidad territorial." },
  { icon: Handshake, title: "Articulación Público-Privada", desc: "Atraemos inversión privada con control estatal para que la renta se quede en la provincia." },
];

const areas = [
  { name: "Lago Fuego", type: "Gas y Petróleo convencional", location: "Norte de la isla", status: "Activa" },
  { name: "Los Chorrillos", type: "Gas y Petróleo convencional", location: "Norte de la isla", status: "Activa" },
  { name: "TDF Fracción A", type: "Gas y Petróleo convencional", location: "Centro-norte", status: "Activa" },
  { name: "TDF Fracción B", type: "Gas y Petróleo convencional", location: "Centro-norte", status: "Activa" },
  { name: "TDF Fracción D", type: "Gas y Petróleo convencional", location: "Centro", status: "Marginal" },
  { name: "TDF Fracciones C y E", type: "Gas y Petróleo convencional", location: "Centro/Centro-sur", status: "Revertidas" },
];

const statusColor = (s: string) =>
  s === "Activa" ? "bg-green-600" : s === "Marginal" ? "bg-accent" : "bg-muted-foreground";

const Index = () => (
  <Layout>
    {/* HERO */}
    <section className="relative h-screen min-h-[600px] flex items-center">
      <img src={heroImg} alt="Yacimiento petrolero en Tierra del Fuego" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-dark/60" />
      <div className="absolute inset-0 diagonal-lines-strong" />
      <div className="relative z-10 container-ti section-padding">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-dark-foreground leading-[0.95] tracking-tight">
            LA ENERGÍA<br />ES FUEGUINA.
          </h1>
          <p className="mt-6 text-dark-foreground/80 max-w-lg text-base md:text-lg">
            Terra Ignis asume un rol protagónico en el futuro energético de Tierra del Fuego, Antártida e Islas del Atlántico Sur.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/quienes-somos" className="px-8 py-3 bg-accent text-accent-foreground font-bold text-sm rounded hover:brightness-110 transition">
              Conocé la empresa
            </Link>
            <Link to="/noticias" className="px-8 py-3 border-2 border-dark-foreground text-dark-foreground font-bold text-sm rounded hover:bg-dark-foreground/10 transition">
              Sala de prensa
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* STATS */}
    <section className="bg-surface section-padding">
      <div className="container-ti grid grid-cols-1 sm:grid-cols-3 gap-8">
        {stats.map((s, i) => (
          <ScrollReveal key={i} className="text-center">
            <div className={s.isText ? "text-xl md:text-2xl font-extrabold text-primary leading-tight" : "text-4xl md:text-5xl font-extrabold text-primary"}>{s.value}</div>
            {s.label && <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>}
          </ScrollReveal>
        ))}
      </div>
    </section>

    {/* QUIÉNES SOMOS PREVIEW */}
    <section className="bg-primary section-padding">
      <div className="container-ti grid md:grid-cols-2 gap-12 items-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground">
            Una nueva era para la energía fueguina
          </h2>
          <p className="mt-6 text-primary-foreground/80 leading-relaxed">
            Terra Ignis Energía S.A. es la empresa estatal de hidrocarburos y energia de la provincia de Tierra del Fuego. Creada en 2022, en 2026 asumió la operación directa de siete áreas hidrocarburíferas que YPF cedió como parte de su estrategia de concentración en Vaca Muerta.
          </p>
          <Link to="/quienes-somos" className="mt-6 inline-flex items-center gap-2 text-accent font-bold hover:gap-3 transition-all">
            Conocé nuestra historia <ArrowRight size={18} />
          </Link>
        </ScrollReveal>
        <ScrollReveal className="flex justify-center">
          <img src={trabajadoresImg} alt="Trabajadores petroleros fueguinos" className="rounded-lg shadow-2xl max-h-[500px] object-cover" loading="lazy" width={800} height={1000} />
        </ScrollReveal>
      </div>
    </section>

    {/* PILARES */}
    <section className="bg-dark section-padding diagonal-lines">
      <div className="container-ti">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark-foreground text-center mb-12">Nuestros pilares</h2>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <ScrollReveal key={i}>
              <div className="bg-dark-foreground/5 border border-dark-foreground/10 rounded-lg p-6 h-full hover:border-accent/50 transition-colors">
                <p.icon className="text-accent mb-4" size={32} />
                <h3 className="text-accent font-bold text-lg mb-2">{p.title}</h3>
                <p className="text-dark-foreground/70 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* ÁREAS OPERATIVAS */}
    <section className="bg-background section-padding">
      <div className="container-ti">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-12">Áreas bajo operación</h2>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((a, i) => (
            <ScrollReveal key={i}>
              <div className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-foreground">{a.name}</h3>
                  <span className={`text-xs font-semibold px-2 py-1 rounded text-accent-foreground ${statusColor(a.status)}`}>{a.status}</span>
                </div>
                <p className="text-sm text-muted-foreground">{a.type}</p>
                <p className="text-sm text-muted-foreground">{a.location}</p>
              </div>
            </ScrollReveal>
          ))}
          <ScrollReveal>
            <Link to="/operaciones" className="border border-accent rounded-lg p-6 flex items-center justify-center gap-2 text-accent font-bold hover:bg-accent/5 transition-colors h-full">
              Ver todas las áreas <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* COMPROMISO AMBIENTAL HIGHLIGHT */}
    <section className="bg-accent section-padding">
      <div className="container-ti text-center">
        <ScrollReveal>
          <p className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-accent-foreground">Histórica inversión en remediación ambiental</p>
          <p className="mt-6 text-accent-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Terra Ignis lleva adelante la remediación de pasivos ambientales en todas las áreas revertidas. Soberanía también es cuidar nuestra tierra.
          </p>
          <Link to="/ambiental" className="mt-8 inline-block px-8 py-3 bg-dark text-dark-foreground font-bold text-sm rounded hover:bg-dark/90 transition">
            Conocé el plan ambiental
          </Link>
        </ScrollReveal>
      </div>
    </section>

    {/* NOTICIAS */}
    <section className="bg-surface section-padding">
      <div className="container-ti">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-12">Noticias</h2>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allNews.slice(0, 3).map((n, i) => (
            <ScrollReveal key={i}>
            <div className="bg-background border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col h-full">
              <Link to={`/noticias/${n.id}`} className="block">
                <img src={n.img} alt={n.title} className="w-full h-48 object-cover" loading="lazy" width={800} height={600} />
              </Link>
              <div className="p-5 flex-1 flex flex-col">
                  <p className="text-xs text-muted-foreground mb-2">{n.date}</p>
                  <h3 className="font-bold text-foreground leading-snug">{n.title}</h3>
                <Link to={`/noticias/${n.id}`} className="mt-auto pt-3 inline-flex items-center gap-1 text-accent text-sm font-semibold hover:gap-2 transition-all w-fit">
                  Leer más <ArrowRight size={14} />
                </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/noticias" className="px-8 py-3 border-2 border-foreground text-foreground font-bold text-sm rounded hover:bg-foreground/5 transition">
            Ver todas las noticias
          </Link>
        </div>
      </div>
    </section>

    {/* CONTACTO */}
    <section className="bg-primary section-padding">
      <div className="container-ti grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
            ¿Querés invertir, trabajar o comunicarte con Terra Ignis?
          </h2>
          <p className="text-primary-foreground/70 mb-8 max-w-xl">Nuestro equipo está listo para escucharte. Elegí el canal adecuado y hacé llegar tu consulta directamente a quienes pueden ayudarte.</p>
          <div className="space-y-4 text-primary-foreground/80 text-base">
            <div className="flex items-center gap-3">
              <MapPin className="text-accent flex-shrink-0" size={20} />
              <p>25 DE MAYO 708, Río Grande, Tierra del Fuego</p>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="md:justify-self-end">
            <p className="text-primary-foreground/60 text-sm mb-4">¿Tenés una consulta?</p>
            <Link to="/contacto" className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground font-bold text-sm rounded hover:brightness-110 transition">
              Ir al formulario <ArrowRight size={17} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default Index;
