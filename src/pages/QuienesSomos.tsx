import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import SeoMeta from "@/components/SeoMeta";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import heroImg from "@/assets/quienes-somos-hero.jpg";

const directorio = [
  { name: "Maximiliano D'Alessio", cargo: "PRESIDENTE DEL DIRECTORIO" },
  { name: "Analía Cubino", cargo: "DIRECTOR TITULAR" },
  { name: "Alejandro Eloff", cargo: "DIRECTOR TITULAR" },
  { name: "Víctor Salgues", cargo: "DIRECTOR TITULAR" },
  { name: "Mauro Perez Toscani", cargo: "DIRECTOR TITULAR" },
];

const sindicos = [
  { name: "Evelyn Ruiz Huacache", cargo: "Síndica" },
  { name: "Gretel Grava", cargo: "Síndica" },
  { name: "José María Bustos Lopez", cargo: "Síndico" },
];

const gestionEjecutiva = [
  { name: "Maximiliano D'Alessio", cargo: "Presidente y Gerente General" },
  { name: "Verónica Tito", cargo: "Gerenta Legal e Institucional", desc: "Gestión legal, normativa y relaciones institucionales." },
  { name: "Agustina Victoria Blanco", cargo: "Gerencia de Administración y Finanzas" },
  { name: "Sergio Federovisky", cargo: "Asesor Ambiental", desc: "Asesoramiento en política ambiental y sustentabilidad." },
  { name: "Rafael Pereyra Ramos", cargo: "Gerencia Contable y Recursos Humanos" },
];

const maximilianoPersonStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Maximiliano D'Alessio",
  jobTitle: "Presidente del Directorio",
  url: "https://terraignisenergia.com/quienes-somos",
  worksFor: {
    "@type": "Organization",
    name: "Terra Ignis Energía S.A.",
    url: "https://terraignisenergia.com",
  },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Universidad de Buenos Aires" },
    { "@type": "CollegeOrUniversity", name: "FLACSO Argentina" },
    { "@type": "CollegeOrUniversity", name: "Universidad de San Andrés" },
  ],
  sameAs: ["https://www.linkedin.com/in/maxidalessio/"],
};

const MaximilianoBioDialog = ({ dark = false }: { dark?: boolean }) => (
  <Dialog>
    <DialogTrigger asChild>
      <button
        type="button"
        className={dark
          ? "mt-auto inline-flex items-center justify-center self-center rounded-full border border-accent/50 px-4 py-2 text-sm font-bold text-accent transition hover:border-accent hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
          : "mt-auto inline-flex items-center justify-center self-center rounded-full border border-primary/25 px-4 py-2 text-sm font-bold text-primary transition hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"}
      >
        Leer más
      </button>
    </DialogTrigger>
    <DialogContent className="max-h-[88vh] max-w-2xl overflow-y-auto border-primary/15 p-0">
      <div className="h-2 bg-gradient-to-r from-primary via-primary to-accent" />
      <div className="p-6 pt-3 sm:p-8 sm:pt-4">
        <DialogHeader>
          <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.2em] text-accent">Perfil institucional</p>
          <DialogTitle className="pr-8 text-2xl font-extrabold leading-tight text-foreground sm:text-3xl">
            Maximiliano D'Alessio
          </DialogTitle>
          <p className="text-sm font-bold text-primary">Presidente del Directorio</p>
        </DialogHeader>
        <DialogDescription asChild>
          <div className="mt-6 space-y-4 text-left text-base leading-relaxed text-muted-foreground">
            <p>Maximiliano D'Alessio es presidente del Directorio de Terra Ignis Energía S.A., Empresa Provincial de Energía de Tierra del Fuego, desde junio de 2024.</p>
            <p>Es experto en comunicación política, estrategia y vinculación entre sectores públicos, privados y laborales. Entre 2010 y 2011 fue gerente de Comunicación del Fondo de Capital Social (FONCAP) y luego consultor del Centro de Desarrollo y Asistencia Tecnológica (CEDyAT). Entre 2014 y 2015 fue asesor de la Presidencia del Correo Argentino S.A., y entre 2020 y 2023, secretario de Representación Oficial de la Provincia de Tierra del Fuego, Antártida e Islas del Atlántico Sur. Entre marzo y agosto de 2026 fue director titular de YPF S.A.</p>
            <p>Es licenciado en Ciencia Política por la Universidad de Buenos Aires y magíster en Relaciones y Negociaciones Internacionales por FLACSO y la Universidad de San Andrés, e hizo el Curso de Petróleo y Gas de la Universidad Tecnológica Nacional (UTN).</p>
            <p className="border-t border-border pt-4 text-sm font-semibold italic text-foreground/70">Última actualización: 8 de octubre de 2026</p>
          </div>
        </DialogDescription>
      </div>
    </DialogContent>
  </Dialog>
);

const QuienesSomos = () => (
  <Layout>
    <SeoMeta
      title="Quiénes somos | Terra Ignis Energía"
      description="Historia, estructura institucional y equipo de gestión de Terra Ignis Energía, la empresa estatal de energía de Tierra del Fuego."
      url="/quienes-somos"
      image={heroImg}
      structuredData={maximilianoPersonStructuredData}
    />
    <PageHero title="Quiénes somos" subtitle="La empresa estatal de energía de Tierra del Fuego" backgroundImage={heroImg} />

    {/* Historia */}
    <section className="bg-background section-padding">
      <div className="container-ti max-w-4xl">
        <ScrollReveal>
          <h2 className="text-3xl font-extrabold text-foreground mb-6">Nuestra historia</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>Terra Ignis Energía S.A. fue creada en 2022 por la Legislatura de Tierra del Fuego como la herramienta estatal para gestionar los recursos hidrocarburíferos y de energías renovables de la provincia.</p>
            <p>En 2026, la empresa asumió la operación directa de siete áreas hidrocarburíferas que YPF cedió como parte de su estrategia de concentración en Vaca Muerta. Este hito marcó el inicio de una nueva era de soberanía energética para los fueguinos.</p>
            <p>Terra Ignis aporta un porcentaje significativo de la producción de gas natural que abastece al país desde la Cuenca Austral, posicionando a Tierra del Fuego como un actor clave en la matriz energética argentina.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Misión y Visión */}
    <section className="bg-primary section-padding">
      <div className="container-ti grid md:grid-cols-2 gap-12">
        <ScrollReveal>
          <h3 className="text-accent font-bold text-sm tracking-wider mb-3">MISIÓN</h3>
          <p className="text-primary-foreground/90 leading-relaxed">
            Gestionar de manera eficiente, sustentable y soberana los recursos energéticos de Tierra del Fuego, generando empleo genuino, cuidando el medio ambiente y asegurando que la renta hidrocarburífera beneficie a todos los fueguinos.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <h3 className="text-accent font-bold text-sm tracking-wider mb-3">VISIÓN</h3>
          <p className="text-primary-foreground/90 leading-relaxed">
            Ser una empresa estatal modelo en la gestión de hidrocarburos y la transición hacia energías renovables, reconocida por su eficiencia operativa, compromiso ambiental y contribución al desarrollo de Tierra del Fuego.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Estructura accionaria */}
    <section className="bg-background section-padding">
      <div className="container-ti max-w-2xl">
        <ScrollReveal>
          <h2 className="text-3xl font-extrabold text-foreground mb-8 text-center">Estructura accionaria</h2>
          <div className="border border-border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-bold">Accionista</th>
                  <th className="px-6 py-3 text-right text-sm font-bold">Participación</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border">
                  <td className="px-6 py-4 text-sm text-foreground">Gobierno de Tierra del Fuego</td>
                  <td className="px-6 py-4 text-sm text-foreground text-right font-bold">90%</td>
                </tr>
                <tr className="border-t border-border bg-surface">
                  <td className="px-6 py-4 text-sm text-foreground">AREF (Agencia de Recaudación Fueguina)</td>
                  <td className="px-6 py-4 text-sm text-foreground text-right font-bold">10%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Estructura institucional */}
    <section className="bg-dark section-padding diagonal-lines">
      <div className="container-ti">
        <ScrollReveal>
          <h2 className="text-3xl font-extrabold text-dark-foreground text-center mb-4">Estructura institucional</h2>
          <p className="text-dark-foreground/60 text-center mb-12">Directorio y sindicatura</p>
        </ScrollReveal>

        <ScrollReveal>
          <h3 className="text-accent font-bold text-sm tracking-wider text-center mb-6">DIRECTORIO</h3>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {directorio.map((d, i) => (
            <ScrollReveal key={i} className="h-full">
              <div className="flex h-full flex-col bg-dark-foreground/5 border border-dark-foreground/10 rounded-lg p-6 text-center">
                <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center text-primary-foreground font-extrabold text-2xl">
                  {d.name.charAt(0)}
                </div>
                <h3 className="font-bold text-dark-foreground">{d.name}</h3>
                <p className="text-accent text-sm font-semibold mb-2">{d.cargo}</p>
                {d.desc && <p className="text-dark-foreground/60 text-sm">{d.desc}</p>}
                {d.name === "Maximiliano D'Alessio" && <MaximilianoBioDialog dark />}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <h3 className="text-accent font-bold text-sm tracking-wider text-center mt-16 mb-6">SINDICATURA</h3>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center max-w-4xl mx-auto">
          {sindicos.map((d, i) => (
            <ScrollReveal key={i} className="h-full">
              <div className="bg-dark-foreground/5 border border-dark-foreground/10 rounded-lg p-6 text-center h-full">
                <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center text-primary-foreground font-extrabold text-2xl">
                  {d.name.charAt(0)}
                </div>
                <h3 className="font-bold text-dark-foreground">{d.name}</h3>
                <p className="text-accent text-sm font-semibold mb-2">{d.cargo}</p>
                {d.desc && <p className="text-dark-foreground/60 text-sm">{d.desc}</p>}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Gestión Ejecutiva */}
    <section className="bg-background section-padding">
      <div className="container-ti">
        <ScrollReveal>
          <h2 className="text-3xl font-extrabold text-foreground text-center mb-4">Equipo de Gestión Ejecutiva</h2>
          <p className="text-muted-foreground text-center mb-12">Conducción operativa y áreas estratégicas de la empresa</p>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {gestionEjecutiva.map((d, i) => (
            <ScrollReveal key={i} className="h-full">
              <div className="flex h-full flex-col bg-surface border border-border rounded-lg p-6 text-center shadow-sm">
                <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center text-primary-foreground font-extrabold text-2xl">
                  {d.name.charAt(0)}
                </div>
                <h3 className="font-bold text-foreground">{d.name}</h3>
                <p className="text-accent text-sm font-semibold mb-2">{d.cargo}</p>
                {d.desc && <p className="text-muted-foreground text-sm">{d.desc}</p>}
                {d.name === "Maximiliano D'Alessio" && <MaximilianoBioDialog />}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Marco legal */}
    <section className="bg-background section-padding">
      <div className="container-ti max-w-3xl">
        <ScrollReveal>
          <h2 className="text-3xl font-extrabold text-foreground mb-6">Marco legal</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3"><span className="text-accent font-bold mt-0.5">▸</span> Creada por ley provincial en 2022 como sociedad anónima estatal.</li>
            <li className="flex items-start gap-3"><span className="text-accent font-bold mt-0.5">▸</span> Aprobación legislativa del acuerdo de traspaso de áreas con YPF en 2026.</li>
            <li className="flex items-start gap-3"><span className="text-accent font-bold mt-0.5">▸</span> Tiene por objeto el desarrollo de actividades de exploración, explotación y comercialización de hidrocarburos.</li>
            <li className="flex items-start gap-3"><span className="text-accent font-bold mt-0.5">▸</span> Mandato de transición energética hacia fuentes renovables.</li>
          </ul>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default QuienesSomos;
