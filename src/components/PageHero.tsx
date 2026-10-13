interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
}

const PageHero = ({ title, subtitle, backgroundImage }: PageHeroProps) => (
  <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
    <img src={backgroundImage} alt="" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-dark/70" />
    <div className="absolute inset-0 diagonal-lines" />
    <div className="relative z-10 text-center px-4">
      <h1 className="text-4xl md:text-6xl font-extrabold text-dark-foreground tracking-tight">{title}</h1>
      {subtitle && <p className="mt-4 text-lg text-accent font-semibold">{subtitle}</p>}
    </div>
  </section>
);

export default PageHero;
