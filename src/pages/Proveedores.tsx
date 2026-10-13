import { Link } from "react-router-dom";
import { ArrowRight, Check, ClipboardList, FileCheck2, Mail, Truck } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import SeoMeta from "@/components/SeoMeta";
import heroImg from "@/assets/operations-hero.jpg";

const processSteps = [
  {
    date: "Dentro de las 48 horas",
    title: "Manifestación de voluntad",
    text: "Enviar la manifestación de voluntad de participar a proveedores@terraignis.ar.",
  },
  {
    date: "Hasta el 4 de septiembre de 2026",
    title: "Consultas y aclaraciones",
    text: "Las consultas deben realizarse exclusivamente por correo electrónico.",
  },
  {
    date: "Hasta el 7 de septiembre de 2026 · 16:30",
    title: "Presentación de ofertas",
    text: "Presentar la oferta conforme al Pliego de Bases y Condiciones.",
  },
];

const requirements = [
  "No encontrarse alcanzado por los criterios de exclusión previstos en las Condiciones Generales de Compra y Contratación de Terra Ignis: quiebra, liquidación o concurso; condenas firmes por delitos contra la ética profesional; deudas impositivas, previsionales o salariales no regularizadas; conflictos de intereses; falsas declaraciones o incumplimientos previos con Terra Ignis, entre otros.",
  "Contar con habilitación para el transporte de hidrocarburos y antecedentes verificables en trayectos comparables.",
  "Acreditar los seguros y garantías establecidos en el Pliego y en el Anexo VI de las Condiciones Generales.",
  "Cumplir con las exigencias de integridad y anticorrupción de Terra Ignis previstas en el Anexo VIII de las Condiciones Generales.",
];

const Proveedores = () => (
    <Layout>
      <SeoMeta
        title="Proveedores y contrataciones | Terra Ignis Energía"
        description="Información sobre licitaciones, contrataciones y oportunidades para proveedores de Terra Ignis Energía."
        url="/proveedores-y-contrataciones"
        image={heroImg}
      />

    <PageHero title="Proveedores y contrataciones" subtitle="Información para participar de procesos de compra y contratación" backgroundImage={heroImg} />

    <section className="bg-background section-padding">
      <div className="container-ti max-w-6xl">
        <ScrollReveal>
            <article className="mb-16 overflow-hidden rounded-2xl border border-primary/15 bg-surface shadow-sm">
            <div className="flex flex-col gap-4 bg-primary p-6 text-primary-foreground md:flex-row md:items-start md:justify-between md:p-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Convocatoria cerrada</p>
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.16em] text-primary-foreground/80">Licitación abierta N.° LA-02/2026</p>
                <p className="mt-2 text-sm font-medium text-primary-foreground/65">07/09/2026</p>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <h2 className="max-w-4xl text-2xl font-extrabold leading-tight text-foreground md:text-4xl">
                Licitación abierta para el transporte internacional de petróleo crudo a la Terminal de ENAP en Gregorio (Chile)
              </h2>
              <p className="mt-5 max-w-4xl text-lg leading-relaxed text-muted-foreground">
                Terra Ignis Energía S.A. convoca a empresas interesadas en prestar el servicio de transporte terrestre de petróleo crudo, mediante camiones cisterna, desde los puntos de carga de Terra hasta la Terminal de ENAP en Gregorio (Chile).
              </p>

              <div className="mt-8">
                <div className="space-y-8 border-t border-border pt-8 text-foreground/80 leading-relaxed">
                    <p>El servicio comprende el transporte terrestre de petróleo crudo desde los puntos de carga de Terra —Terminal Cruz del Sur y, eventualmente, Planta San Sebastián, Tierra del Fuego AeIAS— hasta la Terminal de ENAP en Gregorio, Chile.</p>

                    <div className="grid gap-4 sm:grid-cols-3">
                      <div className="rounded-xl border border-border bg-background p-5">
                        <p className="text-xs font-bold uppercase tracking-wider text-accent">Plazo</p>
                        <p className="mt-2 font-semibold text-foreground">Hasta 24 meses</p>
                        <p className="mt-1 text-sm text-muted-foreground">Desde el acta de inicio.</p>
                      </div>
                      <div className="rounded-xl border border-border bg-background p-5">
                        <p className="text-xs font-bold uppercase tracking-wider text-accent">Volumen</p>
                        <p className="mt-2 font-semibold text-foreground">8 viajes diarios</p>
                        <p className="mt-1 text-sm text-muted-foreground">Hasta 20 unidades.</p>
                      </div>
                      <div className="rounded-xl border border-border bg-background p-5">
                        <p className="text-xs font-bold uppercase tracking-wider text-accent">Moneda</p>
                        <p className="mt-2 font-semibold text-foreground">Dólares estadounidenses</p>
                        <p className="mt-1 text-sm text-muted-foreground">Para ofertas y pagos.</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-foreground">Plazos del proceso</h3>
                      <ul className="mt-4 space-y-3">
                        <li className="flex gap-3"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" /><span><strong className="text-foreground">Manifestación de voluntad de participar:</strong> hasta el 9 de septiembre de 2026, por correo electrónico a proveedores@terraignis.ar.</span></li>
                        <li className="flex gap-3"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" /><span><strong className="text-foreground">Consultas y aclaraciones:</strong> hasta el 11 de septiembre de 2026 a las 16.30h , exclusivamente por correo electrónico a proveedores@terraignis.ar.</span></li>
                        <li className="flex gap-3"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" /><span><strong className="text-foreground">Presentación de ofertas:</strong> hasta el 18 de septiembre de 2026 a las 16.30h.</span></li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-foreground">Requisitos de admisibilidad</h3>
                      <ul className="mt-4 space-y-3">
                        <li className="flex gap-3"><Check className="mt-1 shrink-0 text-accent" size={18} strokeWidth={3} /><span>No encontrarse alcanzado por los criterios de exclusión del Manual de Terra Ignis: quiebra, liquidación o concurso; condena firme por delitos contra la ética profesional; deudas impositivas, previsionales o salariales no regularizadas; conflictos de intereses; falsas declaraciones o incumplimientos previos con Terra Ignis, entre otros.</span></li>
                        <li className="flex gap-3"><Check className="mt-1 shrink-0 text-accent" size={18} strokeWidth={3} /><span>Contar con habilitación para el transporte internacional de hidrocarburos y antecedentes verificables en el trayecto Argentina–Chile.</span></li>
                        <li className="flex gap-3"><Check className="mt-1 shrink-0 text-accent" size={18} strokeWidth={3} /><span>Acreditar los seguros y garantías conforme al Pliego y al Anexo VI de las Condiciones Generales.</span></li>
                        <li className="flex gap-3"><Check className="mt-1 shrink-0 text-accent" size={18} strokeWidth={3} /><span>Cumplir con las exigencias de integridad y anticorrupción de Terra Ignis previstas en el Anexo VIII del Manual.</span></li>
                      </ul>
                    </div>

                    <div className="rounded-xl border-l-4 border-accent bg-accent/5 p-5">
                      <p><strong className="text-foreground">Importante:</strong> la presentación de la oferta implica el conocimiento y la aceptación íntegra del Pliego, del Manual de Condiciones Generales para Compras y Contrataciones y de sus Anexos.</p>
                      <p className="mt-4"><strong className="text-foreground">Consultas y solicitud de documentación:</strong> <a href="mailto:proveedores@terraignis.ar" className="font-semibold text-accent underline underline-offset-4">proveedores@terraignis.ar</a></p>
                    </div>
                </div>
              </div>
            </div>
            </article>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-4xl mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-bold text-accent mb-5">
              <span className="h-2 w-2 rounded-full bg-accent" /> Convocatorias cerradas
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary mb-4">Licitación abierta N.° LA-01/2026</p>
            <p className="-mt-2 mb-4 text-sm font-medium text-muted-foreground">31/08/2026</p>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-foreground text-balance">
              Transporte de petróleo crudo a la Terminal Río Cullen (TOTAL)
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Terra Ignis Energía S.A. convoca a empresas interesadas en prestar el servicio de transporte terrestre de petróleo crudo mediante camiones cisterna, desde los puntos de carga de Terra hasta la Terminal Río Cullen, operada por TOTAL, en la provincia de Tierra del Fuego AeIAS.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-5 md:grid-cols-3 mb-16">
          <ScrollReveal>
            <div className="h-full rounded-xl border border-border bg-surface p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Truck size={24} />
              </div>
              <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Servicio</p>
              <h3 className="mt-2 text-xl font-bold text-foreground">Transporte terrestre</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">Camiones cisterna desde la Terminal Cruz del Sur y, eventualmente, la Planta San Sebastián.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="h-full rounded-xl border border-border bg-surface p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <ClipboardList size={24} />
              </div>
              <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Volumen de referencia</p>
              <h3 className="mt-2 text-xl font-bold text-foreground">8 viajes diarios</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">Con capacidad de incremento hasta un total de 10 unidades, según las necesidades operativas de Terra Ignis.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="h-full rounded-xl border border-border bg-surface p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <FileCheck2 size={24} />
              </div>
              <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Condiciones principales</p>
              <h3 className="mt-2 text-xl font-bold text-foreground">Hasta 24 meses</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">La oferta debe presentarse en dólares estadounidenses y los pagos se realizarán conforme al Pliego.</p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="mb-16 rounded-2xl bg-primary p-6 text-primary-foreground md:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Datos del proceso</p>
                <h2 className="mt-3 text-2xl font-bold md:text-3xl">Una convocatoria para fortalecer la operación energética provincial</h2>
                <p className="mt-4 leading-relaxed text-primary-foreground/75">El plazo contractual será de hasta veinticuatro meses, contados desde la fecha que se establezca en el acta de inicio.</p>
              </div>
              <div className="shrink-0 border-l border-primary-foreground/20 pl-6 lg:min-w-56">
                <p className="text-sm text-primary-foreground/65">Moneda de la oferta</p>
                <p className="mt-1 text-2xl font-bold">USD</p>
                <p className="mt-1 text-sm text-primary-foreground/65">Dólares estadounidenses</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] mb-16">
          <ScrollReveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Cómo participar</p>
              <h2 className="mt-3 text-3xl font-extrabold text-foreground">Plazos del proceso</h2>
              <div className="mt-8 space-y-6">
                {processSteps.map((step, index) => (
                  <div key={step.title} className="relative flex gap-4">
                    {index < processSteps.length - 1 && <span className="absolute left-4 top-10 h-[calc(100%+1.5rem)] w-px bg-border" />}
                    <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">{index + 1}</span>
                    <div className="pb-1">
                      <p className="text-sm font-bold text-accent">{step.date}</p>
                      <h3 className="mt-1 text-xl font-bold text-foreground">{step.title}</h3>
                      <p className="mt-2 leading-relaxed text-muted-foreground">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="rounded-2xl border border-border bg-surface p-7 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Admisibilidad</p>
              <h2 className="mt-3 text-3xl font-extrabold text-foreground">Requisitos principales</h2>
              <ul className="mt-7 space-y-5">
                {requirements.map((requirement) => (
                  <li key={requirement} className="flex gap-3 leading-relaxed text-muted-foreground">
                    <Check className="mt-1 shrink-0 text-accent" size={18} strokeWidth={3} />
                    <span>{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="rounded-2xl border-l-4 border-accent bg-accent/5 p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Importante</p>
            <p className="mt-3 max-w-4xl text-lg leading-relaxed text-foreground">La presentación de la oferta implica el conocimiento y la aceptación íntegra del Pliego de Bases y Condiciones, de las Condiciones Generales de Compra y Contratación y de sus Anexos.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-10 flex flex-col gap-6 rounded-2xl bg-surface p-7 md:flex-row md:items-center md:justify-between md:p-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Consultas y documentación</p>
              <h2 className="mt-2 text-2xl font-bold text-foreground">Solicitá la documentación del proceso</h2>
              <p className="mt-2 text-muted-foreground">Para manifestar voluntad, realizar consultas o solicitar documentación:</p>
            </div>
            <a href="mailto:proveedores@terraignis.ar" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 font-bold text-accent-foreground transition hover:brightness-110">
              <Mail size={18} /> proveedores@terraignis.ar
            </a>
          </div>
        </ScrollReveal>

        <div className="mt-12 flex justify-center">
          <Link to="/contacto" className="inline-flex items-center gap-2 text-sm font-bold text-accent transition-all hover:gap-3">
            ¿Necesitás comunicarte con Terra Ignis? <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
    </Layout>
);

export default Proveedores;
