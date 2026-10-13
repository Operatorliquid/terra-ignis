import { FormEvent, ReactNode, useEffect, useState } from "react";
import logoImg from "@/assets/logo-ignis.png";

const ACCESS_PASSWORD = "domingo2359";
const ACCESS_STORAGE_KEY = "terra-ignis-access-granted";
const PUBLIC_RELEASE_AT = new Date("2026-08-30T23:59:00-03:00").getTime();

interface AccessGateProps {
  children: ReactNode;
  password?: string;
  releaseAt?: string;
  storageKey?: string;
  compact?: boolean;
  releaseMessage?: string;
}

const AccessGate = ({
  children,
  password: accessPassword = ACCESS_PASSWORD,
  releaseAt,
  storageKey = ACCESS_STORAGE_KEY,
  compact = false,
  releaseMessage = "El sitio estará disponible públicamente el domingo 30 de agosto a las 23:59.",
}: AccessGateProps) => {
  const releaseTimestamp = releaseAt ? new Date(releaseAt).getTime() : PUBLIC_RELEASE_AT;
  const isPubliclyAvailable = () => Date.now() >= releaseTimestamp;
  const [isReleased, setIsReleased] = useState(isPubliclyAvailable);
  const [isGranted, setIsGranted] = useState(() => {
    if (isPubliclyAvailable()) return true;
    return window.localStorage.getItem(storageKey) === "true";
  });
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const checkRelease = () => {
      if (Date.now() >= releaseTimestamp) {
        setIsReleased(true);
        window.localStorage.removeItem(storageKey);
      }
    };

    checkRelease();
    const interval = window.setInterval(checkRelease, 1000);
    return () => window.clearInterval(interval);
  }, [releaseTimestamp, storageKey]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password === accessPassword) {
      window.localStorage.setItem(storageKey, "true");
      setIsGranted(true);
      setError("");
      return;
    }

    setError("La clave ingresada no es correcta.");
  };

  if (isReleased || isGranted) return <>{children}</>;

  if (compact) {
    return (
      <section className="rounded-xl border border-primary/15 bg-primary/[0.04] p-6 md:p-8">
        <div className="flex items-start gap-4">
          <div className="mt-1 h-3 w-3 shrink-0 rounded-full bg-accent" />
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Contenido reservado</p>
            <p className="mt-2 leading-relaxed text-muted-foreground">{releaseMessage}</p>
            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
              <label htmlFor="protected-content-password" className="sr-only">Clave de acceso</label>
              <input
                id="protected-content-password"
                type="password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                  setError("");
                }}
                placeholder="Ingresá la clave para ver el contenido"
                autoComplete="current-password"
                className="min-w-0 flex-1 rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none placeholder:text-muted-foreground/70 focus:border-accent focus:ring-2 focus:ring-accent/30"
              />
              <button type="submit" className="rounded-lg bg-accent px-5 py-3 font-bold text-accent-foreground transition hover:brightness-110">Ver convocatoria</button>
            </form>
            {error && <p className="mt-3 text-sm font-medium text-destructive" role="alert">{error}</p>}
          </div>
        </div>
      </section>
    );
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-primary px-5 py-12">
      <div className="diagonal-lines-strong absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/15 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-48 -left-24 h-96 w-96 rounded-full bg-black/20 blur-3xl" aria-hidden="true" />

      <section className="relative z-10 w-full max-w-md rounded-2xl border border-primary-foreground/10 bg-black/20 p-7 text-center shadow-2xl backdrop-blur-sm sm:p-10">
        <img src={logoImg} alt="Terra Ignis Energía" className="mx-auto h-16 w-auto object-contain sm:h-20" />
        <div className="mx-auto mt-8 h-1 w-14 rounded-full bg-accent" />
        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-accent">Acceso privado</p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-primary-foreground sm:text-4xl">Próximamente</h1>
        <p className="mx-auto mt-4 max-w-sm leading-relaxed text-primary-foreground/70">
          {releaseMessage}
        </p>

        <form onSubmit={handleSubmit} className="mt-8 text-left">
          <label htmlFor="site-password" className="text-sm font-semibold text-primary-foreground">
            Clave de acceso
          </label>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <input
              id="site-password"
              type="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                setError("");
              }}
              placeholder="Ingresá la clave"
              autoComplete="current-password"
              autoFocus
              className="min-w-0 flex-1 rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-3 text-primary-foreground outline-none placeholder:text-primary-foreground/40 focus:border-accent focus:ring-2 focus:ring-accent/30"
            />
            <button type="submit" className="rounded-lg bg-accent px-5 py-3 font-bold text-accent-foreground transition hover:brightness-110">
              Ingresar
            </button>
          </div>
          {error && <p className="mt-3 text-sm font-medium text-orange-200" role="alert">{error}</p>}
        </form>
      </section>
    </main>
  );
};

export default AccessGate;
