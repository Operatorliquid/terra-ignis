import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import heroImg from "@/assets/tierra-del-fuego-landscape.jpg";
import { Droplets, TreePine, Recycle, ShieldCheck } from "lucide-react";

const commitments = [
  { icon: Droplets, title: "Gestión integral de residuos de la actividad petrolera.", desc: "Construcción y operación del único relleno de seguridad de la provincia." },
  { icon: TreePine, title: "Restauración de ecosistemas", desc: "Programas de revegetación y recuperación de flora nativa en zonas intervenidas." },
  { icon: Recycle, title: "Gestión de residuos", desc: "Implementación de protocolos de economía circular en las operaciones extractivas." },
  { icon: ShieldCheck, title: "Monitoreo continuo", desc: "Sistemas de vigilancia ambiental en tiempo real con tecnología de última generación." },
];

const Ambiental = () => (
  <Layout>
    <PageHero title="Compromiso Ambiental" subtitle="Soberanía también es cuidar nuestra tierra" backgroundImage={heroImg} />

    <section className="bg-accent section-padding">
      <div className="container-ti text-center">
        <ScrollReveal>
          <p className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-accent-foreground leading-tight">
            HISTÓRICA INVERSIÓN EN<br />REMEDIACIÓN AMBIENTAL
          </p>
          <p className="mt-6 text-accent-foreground/90 max-w-2xl mx-auto text-lg leading-relaxed">
            Una de las mayores inversiones aplicada a la restauración de ecosistemas de la historia de Tierra del Fuego, destinada a reparar décadas de actividad extractiva sin controles adecuados.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <section className="bg-background section-padding">
      <div className="container-ti">
        <ScrollReveal>
          <h2 className="text-3xl font-extrabold text-foreground text-center mb-12">Nuestros compromisos</h2>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {commitments.map((c, i) => (
            <ScrollReveal key={i}>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <c.icon className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{c.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-primary section-padding">
      <div className="container-ti max-w-3xl text-center">
        <ScrollReveal>
          <h2 className="text-3xl font-extrabold text-primary-foreground mb-6">Compromiso ambiental</h2>
          <p className="text-primary-foreground/80 leading-relaxed">
            Terra Ignis entiende que el desarrollo energético y el cuidado del ambiente deben avanzar de manera conjunta. Por eso impulsa programas de remediación, saneamiento y gestión ambiental orientados a recuperar pasivos históricos y promover una actividad energética con mayores estándares ambientales.
          </p>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default Ambiental;
