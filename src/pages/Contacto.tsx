import { FormEvent, useState } from "react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import heroImg from "@/assets/tierra-del-fuego-landscape.jpg";
import { Briefcase, MapPin, Send } from "lucide-react";

const Contacto = () => {
  const [topic, setTopic] = useState("Consulta general");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    setIsSubmitting(true);
    setFeedback(null);

    try {
      const response = await fetch("/api/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          topic: formData.get("topic"),
          message: formData.get("message"),
          website: formData.get("website"),
        }),
      });
      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(result?.message || "No pudimos enviar tu mensaje.");
      }

      form.reset();
      setTopic("Consulta general");
      setFeedback({ type: "success", message: "Mensaje enviado. Gracias por escribirnos." });
    } catch (error) {
      setFeedback({
        type: "error",
        message: error instanceof Error ? error.message : "No pudimos enviar tu mensaje. Intentá nuevamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <PageHero title="Contacto" subtitle="Estamos para escucharte" backgroundImage={heroImg} />

      <section className="bg-background section-padding">
        <div className="container-ti grid md:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-20">
          <ScrollReveal>
            <div className="mb-8">
              <p className="text-accent text-xs font-bold tracking-[0.22em] uppercase mb-3">Canales directos</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">Escribinos</h2>
              <p className="text-muted-foreground max-w-md leading-relaxed">
                Elegí el motivo de tu consulta y tu mensaje llegará directamente al equipo correspondiente.
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <input name="website" type="text" tabIndex={-1} autoComplete="off" className="absolute -left-[9999px] h-px w-px opacity-0" aria-hidden="true" />
              <div className="grid sm:grid-cols-2 gap-5">
                <label className="block">
                  <span className="block text-sm font-semibold text-foreground mb-2">Nombre completo</span>
                  <input required name="name" type="text" placeholder="Tu nombre" className="w-full px-4 py-3 rounded border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition" />
                </label>
                <label className="block">
                  <span className="block text-sm font-semibold text-foreground mb-2">Email</span>
                  <input required name="email" type="email" placeholder="tu@email.com" className="w-full px-4 py-3 rounded border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition" />
                </label>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <label className="block">
                  <span className="block text-sm font-semibold text-foreground mb-2">Teléfono <span className="font-normal text-muted-foreground">(opcional)</span></span>
                  <input name="phone" type="tel" placeholder="Tu teléfono" className="w-full px-4 py-3 rounded border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition" />
                </label>
                <label className="block">
                  <span className="block text-sm font-semibold text-foreground mb-2">Motivo de consulta</span>
                  <select name="topic" value={topic} onChange={(event) => setTopic(event.target.value)} className="w-full px-4 py-3 rounded border border-border bg-background text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition">
                    <option>Consulta general</option>
                    <option>Empleo</option>
                    <option>Prensa</option>
                  </select>
                </label>
              </div>
              <label className="block">
                <span className="block text-sm font-semibold text-foreground mb-2">Mensaje</span>
                <textarea required name="message" placeholder="¿En qué podemos ayudarte?" rows={6} className="w-full px-4 py-3 rounded border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition resize-none" />
              </label>
              <button type="submit" disabled={isSubmitting} className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3 bg-accent text-accent-foreground font-bold rounded hover:brightness-110 disabled:opacity-60 disabled:cursor-wait transition">
                {isSubmitting ? "Enviando..." : "Enviar mensaje"} {!isSubmitting && <Send size={17} />}
              </button>
              {feedback && (
                <p role="status" className={`text-sm ${feedback.type === "success" ? "text-green-700" : "text-destructive"}`}>
                  {feedback.message}
                </p>
              )}
            </form>
          </ScrollReveal>

          <div className="space-y-8">
            <ScrollReveal>
              <div className="border-l-2 border-accent pl-5">
                <p className="text-accent text-xs font-bold tracking-[0.22em] uppercase mb-3">Visitanos</p>
                <h2 className="text-3xl font-extrabold text-foreground mb-4">Datos de contacto</h2>
                <div className="flex items-start gap-3">
                  <MapPin className="text-accent flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-foreground">Dirección</p>
                    <p className="text-muted-foreground text-sm">25 DE MAYO 708, Río Grande, Tierra del Fuego</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="bg-primary rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Briefcase className="text-accent" size={24} />
                  <h3 className="font-bold text-primary-foreground text-lg">Trabajá con nosotros</h3>
                </div>
                <p className="text-primary-foreground/80 text-sm leading-relaxed">
                  Buscamos profesionales y técnicos fueguinos comprometidos con el desarrollo energético de la provincia. Las postulaciones se reciben a través del formulario seleccionando “Empleo”.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="overflow-hidden rounded-lg border border-border bg-surface shadow-sm">
                <div className="p-5 pb-4">
                  <h3 className="font-bold text-foreground">Ubicación</h3>
                  <p className="text-sm text-muted-foreground mt-1">Río Grande, Tierra del Fuego</p>
                </div>
                <iframe
                  title="Ubicación de Terra Ignis Energía en Google Maps"
                  src="https://www.google.com/maps?q=25%20de%20Mayo%20708%2C%20R%C3%ADo%20Grande%2C%20Tierra%20del%20Fuego&output=embed"
                  className="w-full h-64 border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacto;
