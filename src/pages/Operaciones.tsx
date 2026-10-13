import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import heroImg from "@/assets/operations-hero.jpg";

const areas = [
  { name: "Lago Fuego", type: "Gas y Petróleo convencional", location: "Norte de la isla", status: "Activa", vencimiento: "2037" },
  { name: "Los Chorrillos", type: "Gas y Petróleo convencional", location: "Norte de la isla", status: "Activa", vencimiento: "2036" },
  { name: "TDF Fracción A", type: "Gas y Petróleo convencional", location: "Centro-norte", status: "Activa", vencimiento: "2037" },
  { name: "TDF Fracción B", type: "Gas y Petróleo convencional", location: "Centro-norte", status: "Activa", vencimiento: "2037" },
  { name: "TDF Fracción D", type: "Gas y Petróleo convencional", location: "Centro", status: "Marginal", vencimiento: "2037" },
  { name: "TDF Fracciones C y E", type: "Gas y Petróleo convencional", location: "Centro/Centro-sur", status: "Revertidas", vencimiento: "2037" },
];

const statusColor = (s: string) =>
  s === "Activa" ? "bg-green-600" : s === "Marginal" ? "bg-accent" : "bg-muted-foreground";

const Operaciones = () => (
  <Layout>
    <PageHero title="Operaciones" subtitle="Gestión estratégica de áreas hidrocarburíferas" backgroundImage={heroImg} />

    <section className="bg-background section-padding">
      <div className="container-ti max-w-4xl">
        <ScrollReveal>
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            Tierra del Fuego es la <strong className="text-foreground">segunda provincia productora de gas del país</strong>. Terra Ignis gestiona siete áreas hidrocarburíferas que aportan con su producción al <strong className="text-foreground">20% del gas natural que produce Argentina</strong>.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <section className="bg-dark section-padding diagonal-lines">
      <div className="container-ti max-w-5xl">
        <ScrollReveal>
          <div className="border-l-4 border-accent pl-6 md:pl-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-foreground mb-6">Planta San Sebastián</h2>
            <p className="text-dark-foreground/75 leading-relaxed text-lg">
              Terra Ignis opera la Planta San Sebastián, uno de los activos energéticos más importantes de Tierra del Fuego y un pilar estratégico para el desarrollo hidrocarburífero de la provincia. Ubicada en una posición privilegiada, funciona como un centro neurálgico para el procesamiento y acondicionamiento de petróleo y gas natural, permitiendo transformar los recursos energéticos de la Cuenca Austral en energía disponible para hogares, industrias y mercados. Su infraestructura, capacidad operativa y conexión con los principales sistemas de transporte convierten a San Sebastián en una plataforma clave para impulsar nuevas inversiones, incrementar la producción, fortalecer la seguridad energética y consolidar a Tierra del Fuego como un actor relevante en el desarrollo energético de la Argentina.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <section className="bg-surface section-padding">
      <div className="container-ti">
        <ScrollReveal>
          <h2 className="text-3xl font-extrabold text-foreground text-center mb-12">Áreas operativas</h2>
        </ScrollReveal>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="px-4 py-3 text-left text-sm font-bold">Área</th>
                <th className="px-4 py-3 text-left text-sm font-bold">Tipo</th>
                <th className="px-4 py-3 text-left text-sm font-bold">Ubicación</th>
                <th className="px-4 py-3 text-left text-sm font-bold">Vencimiento</th>
                <th className="px-4 py-3 text-left text-sm font-bold">Estado</th>
              </tr>
            </thead>
            <tbody>
              {areas.map((a, i) => (
                <tr key={i} className={`border-b border-border ${i % 2 === 1 ? "bg-background" : ""}`}>
                  <td className="px-4 py-4 font-semibold text-foreground text-sm">{a.name}</td>
                  <td className="px-4 py-4 text-muted-foreground text-sm">{a.type}</td>
                  <td className="px-4 py-4 text-muted-foreground text-sm">{a.location}</td>
                  <td className="px-4 py-4 text-muted-foreground text-sm">{a.vencimiento}</td>
                  <td className="px-4 py-4">
                    <span className={`text-xs font-semibold px-2 py-1 rounded text-accent-foreground ${statusColor(a.status)}`}>{a.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>

  </Layout>
);

export default Operaciones;
