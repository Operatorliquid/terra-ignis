import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoMeta from "@/components/SeoMeta";
import { ArrowLeft } from "lucide-react";
import { allNews } from "./Noticias";
import newsImg4 from "@/assets/news-4.jpg";
import img9Jun from "@/assets/9jun.jpg";
import prensaAgosto from "@/assets/agosto/prensa.jpeg";
import proyamb from "@/assets/proyamb/proyamb.jpeg";
import proyamb1 from "@/assets/proyamb/proyamb1.jpeg";
import proyamb2 from "@/assets/proyamb/proyamb2.jpeg";
import proyamb3 from "@/assets/proyamb/proyamb3.jpeg";
import workoverImg from "@/assets/septiembre-27/5.png";

const sortByNumericFilename = (a: string, b: string) => {
  const getValue = (path: string) => {
    const filename = path.split("/").pop()?.split(".")[0] ?? "";
    const digits = filename.match(/\d+/)?.[0];
    return Number(digits ?? 0);
  };
  return getValue(a) - getValue(b);
};

// Importamos dinámicamente las imágenes de cada carpeta
const globWorkover = import.meta.glob('/src/assets/septiembre-27/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', { eager: true });
const globTdfInnovaFinal = import.meta.glob('/src/assets/septiembre-22/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', { eager: true });
const globJulio17 = import.meta.glob('/src/assets/julio-17/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', { eager: true });
const globJulio14 = import.meta.glob('/src/assets/julio-14/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', { eager: true });
const globJunio26 = import.meta.glob('/src/assets/junio-26/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', { eager: true });
const globJunio3 = import.meta.glob('/src/assets/junio-3/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', { eager: true });
const globMayo12 = import.meta.glob('/src/assets/mayo-12/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', { eager: true });
const globAbril16 = import.meta.glob('/src/assets/abril-16/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', { eager: true });
const globAbril8 = import.meta.glob('/src/assets/abril-8/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', { eager: true });
const globAbril13 = import.meta.glob('/src/assets/abril-13/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', { eager: true });
const globMarzo23 = import.meta.glob('/src/assets/marzo-23/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', { eager: true });

const NoticiaSingle = () => {
  const { id } = useParams();
  const noticia = allNews.find((n) => n.id === id);

  // Asignamos la galería de imágenes según el ID de la noticia
  let imagenesNota: any[] = [];
  if (id === "eloff-areas-maduras-camino-correcto") {
    imagenesNota = [workoverImg];
  } else if (id === "nuevo-equipo-workover") {
    imagenesNota = Object.entries(globWorkover)
      .sort(([pathA], [pathB]) => sortByNumericFilename(pathA, pathB))
      .map(([, module]: [string, any]) => module.default);
  } else if (id === "final-tdf-innova-2026") {
    imagenesNota = Object.entries(globTdfInnovaFinal)
      .sort(([pathA], [pathB]) => sortByNumericFilename(pathA, pathB))
      .map(([, module]: [string, any]) => module.default);
  } else if (id === "convenio-deporte-fueguino") {
    imagenesNota = Object.entries(globJulio17)
      .sort(([pathA], [pathB]) => sortByNumericFilename(pathA, pathB))
      .map(([, module]: [string, any]) => module.default);
  } else if (id === "agenda-neuquen") {
    imagenesNota = Object.entries(globJulio14)
      .sort(([pathA], [pathB]) => sortByNumericFilename(pathA, pathB))
      .map(([, module]: [string, any]) => module.default);
  } else if (id === "convenio-colegio-ingenieros") {
    imagenesNota = Object.values(globJunio26).map((module: any) => module.default);
  } else if (id === "presentacion-canada") {
    imagenesNota = [img9Jun];
  } else if (id === "saneamiento-velitec") {
    imagenesNota = Object.values(globJunio3).map((module: any) => module.default);
  } else if (id === "convenio-btf") {
    imagenesNota = Object.values(globMayo12).map((module: any) => module.default);
  } else if (id === "lanzamiento-terra-ignis") {
    imagenesNota = Object.values(globAbril16).map((module: any) => module.default);
  } else if (id === "nueva-etapa-energetica") {
    imagenesNota = Object.values(globAbril8).map((module: any) => module.default);
  } else if (id === "programa-mipymes-cfi") {
    imagenesNota = Object.values(globAbril13).map((module: any) => module.default);
  } else if (id === "maximizar-potencial") {
    imagenesNota = [newsImg4];
  } else if (id === "informe-pasivos-ambientales") {
    imagenesNota = Object.values(globMarzo23).map((module: any) => module.default);
  } else if (id === "gran-premio-de-la-hermandad") {
    imagenesNota = [prensaAgosto];
  } else if (id === "tdf-innova-terra-ignis") {
    imagenesNota = [proyamb, proyamb1, proyamb2, proyamb3];
  }

  if (!noticia) {
    return (
      <Layout>
        <div className="container-ti section-padding text-center py-32 min-h-[60vh]">
          <h1 className="text-3xl font-bold mb-4">Noticia no encontrada</h1>
          <Link to="/noticias" className="inline-flex items-center text-accent font-semibold hover:gap-2 transition-all">
            <ArrowLeft className="mr-2" size={18} /> Volver a noticias
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SeoMeta
        title={`${noticia.title} | Terra Ignis Energía`}
        description={noticia.summary}
        url={`/noticias/${noticia.id}`}
        image={noticia.img}
        type="article"
      />
      {/* Cabecera del artículo */}
      <section className="bg-surface pt-32 pb-16">
        <div className="container-ti max-w-4xl">
          <Link to="/noticias" className="inline-flex items-center text-accent font-semibold mb-8 hover:gap-2 transition-all">
            <ArrowLeft size={18} className="mr-2" /> Volver a noticias
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-medium text-muted-foreground">{noticia.date}</span>
            <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded font-bold uppercase tracking-wider">{noticia.cat}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-foreground leading-tight mb-8">
            {noticia.title}
          </h1>
          <img
            src={noticia.img}
            alt={noticia.title}
            className={id === "eloff-areas-maduras-camino-correcto"
              ? "w-full max-w-md mx-auto aspect-square rounded-xl shadow-lg object-cover"
              : "w-full rounded-xl shadow-lg object-cover max-h-[500px]"}
          />
        </div>
      </section>

      {/* Contenido del artículo */}
      <section className="bg-background py-16">
        <div className="container-ti max-w-3xl">
          {id === "eloff-areas-maduras-camino-correcto" ? (
            <div className="space-y-6 text-foreground/80 leading-relaxed text-lg">
              <p className="font-medium text-xl text-foreground mb-8">
                El director de Terra Ignis Energía, Alejandro Eloff, analizó el potencial de las áreas hidrocarburíferas transferidas y explicó que la recuperación de producción dependerá de un trabajo técnico de detalle, eficiencia operativa, tecnología y aprovechamiento del capital humano. También señaló que algunos pozos dejados por YPF podrían convertirse en las primeras “victorias tempranas” de esta nueva etapa.
              </p>

              <p>El director de Terra Ignis Energía, Alejandro Eloff, analizó el escenario que se abre para las áreas hidrocarburíferas maduras de Tierra del Fuego y explicó que, aunque varios yacimientos se encuentran en una etapa avanzada de explotación, todavía existen oportunidades para extender su vida útil mediante nuevas intervenciones, tecnología y un manejo preciso de los costos.</p>

              <p>El análisis se inscribe en una nueva etapa para las áreas transferidas. Terra Ignis, junto a Velitec, avanza en el desarrollo de las áreas hidrocarburíferas, con distintas líneas de trabajo orientadas a sostener la producción, intervenir pozos existentes y evaluar nuevas oportunidades dentro de los campos convencionales.</p>

              <p>Durante una entrevista con el periodista Guillermo Lacaze en FM ISLA, Eloff remarcó que el ingreso de operadores más pequeños a campos maduros no constituye una experiencia inédita dentro de la industria argentina. Recordó que procesos similares comenzaron hace décadas en otras cuencas y sostuvo que el desafío consiste en adaptar la estructura operativa a yacimientos donde las oportunidades son menores y requieren un análisis mucho más detallado.</p>

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Una cuenca principalmente gasífera</h3>

              <p>Eloff explicó que la particularidad de la Cuenca Austral es su fuerte perfil gasífero y que esa característica condiciona las posibilidades de recuperación de los campos existentes.</p>

              <blockquote className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg italic text-foreground font-medium my-8">
                “El factor de recobro es muy alto. Del gas que está en los reservorios se extrae más del 90% y eso es todo por explotación natural, bajando la presión con compresión.”
                <span className="block mt-4 text-sm font-bold text-accent not-italic">— Alejandro Eloff, director de Terra Ignis Energía</span>
              </blockquote>

              <p>Por esa razón, aclaró que no existe necesariamente un gran volumen de gas remanente que pueda recuperarse simplemente incorporando una nueva tecnología.</p>

              <p>Dentro de Tierra del Fuego, mencionó situaciones diferentes según cada yacimiento. San Sebastián, el principal campo onshore provincial, se encuentra en niveles de presión muy bajos y conserva un margen limitado de extracción adicional. Sin embargo, explicó que todavía pueden realizarse operaciones para reducir presión, aislar capas de agua y recuperar parte de la producción restante.</p>

              <p>En otros casos, como Lago Fuego, señaló que existen reservorios más cerrados o tight y que aún quedan pozos y tareas vinculadas con punzado y fractura que podrían desarrollarse.</p>

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">El rol del Workover</h3>

              <p>Una parte central de esa recuperación pasa por las intervenciones sobre pozos existentes. Eloff explicó que para esas tareas resulta fundamental el equipo de Workover, que permite trabajar sobre las cañerías de producción, realizar punzados, cementaciones y fracturas.</p>

              {imagenesNota[0] && (
                <img src={imagenesNota[0]} alt="Trabajadores de Terra Ignis y Velitec durante el montaje del equipo de Workover" className="w-full rounded-xl my-10 shadow-md object-cover" />
              )}

              <p>En esa línea, la semana pasada se anunció la llegada a Cruz del Sur de un nuevo equipo de Workover, que comenzó a trabajar sobre los pozos seleccionados para esta etapa. La campaña prevé intervenir más de 70 pozos ya identificados, con el objetivo de recuperar producción en yacimientos maduros y avanzar sobre nuevas oportunidades dentro de las áreas.</p>

              <blockquote className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg italic text-foreground font-medium my-8">
                “Se requiere de esa tecnología y mucho estudio de las oportunidades que quedan.”
                <span className="block mt-4 text-sm font-bold text-accent not-italic">— Alejandro Eloff</span>
              </blockquote>

              <p>Eloff definió el trabajo sobre pozos maduros como una tarea “de detalle, de prueba y error muchas veces”, mediante la cual se puede ir extendiendo su vida productiva.</p>

              <p>También destacó el peso del conocimiento acumulado por los trabajadores de la actividad. “Lo más importante para estos desarrollos, como todo, es el capital humano”, sostuvo, y señaló que las cuencas maduras cuentan con geólogos, ingenieros de reservorios y técnicos de operaciones y producción con experiencia suficiente para llevar adelante ese tipo de intervenciones.</p>

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">“Se tiene que trabajar con un criterio low cost”</h3>

              <p>A diferencia de los grandes desarrollos nuevos, Eloff explicó que en los campos maduros no siempre se requieren inversiones extraordinarias, pero sí una fuerte disciplina sobre los costos.</p>

              <blockquote className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg italic text-foreground font-medium my-8">
                “Es un trabajo más multidisciplinario, más del día a día, y en el cual no es tanta la inversión que se requiere en relación al desarrollo de los yacimientos nuevos, pero sí mucha dedicación, mucho control de costos.”
                <span className="block mt-4 text-sm font-bold text-accent not-italic">— Alejandro Eloff</span>
              </blockquote>

              <p>En ese punto fue categórico: “Cada cosa que se hace tiene que estar muy bien pensada para que se pueda hacer lo más económica posible”.</p>

              <p>“Se tiene que trabajar con un criterio low cost para que lo que queda por hacer sea rentable”, sintetizó.</p>

              <p>Eloff recordó que este modelo tiene antecedentes de más de cuatro décadas en distintas cuencas argentinas, donde YPF fue cediendo campos a operadores más pequeños que, en algunos casos, incluso encontraron nuevas oportunidades productivas que inicialmente no estaban previstas.</p>

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">No volverán los niveles históricos, pero quedan oportunidades</h3>

              <p>Consultado sobre las expectativas concretas para las áreas fueguinas, Eloff evitó proyectar una recuperación hasta los niveles originales de producción.</p>

              <blockquote className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg italic text-foreground font-medium my-8">
                “No se va a volver a los niveles de producción que tuvieron, porque los yacimientos más prolíficos ya fueron desarrollados.”
                <span className="block mt-4 text-sm font-bold text-accent not-italic">— Alejandro Eloff</span>
              </blockquote>

              <p>Sin embargo, sostuvo que todavía quedan oportunidades. “Lo que va quedando tiene menor magnitud y requiere más trabajo, un trabajo mucho más fino, más multidisciplinario”, explicó.</p>

              <p>Para el director de Terra Ignis, la capacidad de los nuevos operadores para sostener esa producción estará directamente vinculada con tres factores: eficiencia de costos, tecnología y aprovechamiento del capital humano.</p>

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Pozos sin terminar y las primeras “victorias tempranas”</h3>

              <p>Eloff también se refirió a las posibilidades existentes más allá de la recuperación de los campos más maduros. Mencionó sectores como CA-2 y Uribe, donde las perspectivas podrían ser mayores, aunque requieren inversiones considerablemente más importantes, exploración y nueva infraestructura.</p>

              <p>En el caso de Uribe, explicó que existen formaciones tight con potencial, pero ubicadas a unos 60 kilómetros de la planta de San Sebastián. Su desarrollo exigiría, entre otras obras, la construcción de un gasoducto, por lo que habló de inversiones que podrían alcanzar cientos de millones de dólares.</p>

              <p>La situación es distinta en otros puntos donde YPF dejó trabajos iniciados. “YPF dejó una serie de pozos perforados sin terminar, sobre los cuales la inversión que queda por hacer es afrontable para la operación de Terra Ignis con Velitec”, señaló.</p>

              <p>Eloff consideró que allí podrían aparecer las primeras respuestas concretas del nuevo esquema operativo. “Creo que van a ser las victorias tempranas y lo que realmente se puede ejecutar”, afirmó.</p>

              <p>Para proyectos de mayor escala, como CA-2, Uribe o incluso algunos bloques offshore próximos a la costa, planteó un horizonte diferente: mayores recursos potenciales, pero también más inversión, estudios y tiempo.</p>

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">“Una compañía más chica, más focalizada y más eficiente”</h3>

              <p>Sobre el modelo elegido para esta nueva etapa, Eloff sostuvo que la hoja de ruta aplicada en Tierra del Fuego coincide con experiencias anteriores de campos maduros.</p>

              <blockquote className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg italic text-foreground font-medium my-8">
                “El camino que se ha emprendido, entiendo que es el correcto.”
                <span className="block mt-4 text-sm font-bold text-accent not-italic">— Alejandro Eloff</span>
              </blockquote>

              <p>Desde su experiencia de cuatro décadas en la industria, explicó que la continuidad de los yacimientos maduros suele requerir operadores con estructuras más pequeñas, capacidad de decisión directa y un fuerte control económico.</p>

              <p>“Para extender la producción hay que cambiar hacia una compañía chica, con ese foco”, señaló, y remarcó que ese esquema permite realizar trabajos que dentro de estructuras empresariales mayores pueden dejar de resultar económicamente atractivos.</p>

              <p>Para Eloff, esa combinación de operación focalizada, eficiencia de costos, tecnología y experiencia técnica será determinante para establecer cuánto más puede extenderse la producción de las áreas maduras de Tierra del Fuego y qué nuevas oportunidades podrán desarrollarse en los próximos años.</p>
            </div>
          ) : id === "nuevo-equipo-workover" ? (
            <div className="space-y-6 text-foreground/80 leading-relaxed text-lg">
              <p className="font-medium text-xl text-foreground mb-8">
                Tierra del Fuego, 27 de septiembre de 2026. Terra Ignis Energía S.A. y su socio operador Velitec S.A. anuncian la llegada de un nuevo equipo de Workover para la operación en Tierra del Fuego. Estará destinado a realizar intervenciones sobre pozos existentes, con el objetivo de sostener y recuperar su capacidad productiva.
              </p>

              <p>El equipo es propiedad de Velitec y forma parte de la inversión comprometida por la compañía en las áreas que opera junto a Terra Ignis en la Cuenca Austral. Fue trasladado por vía terrestre y marítima desde Comodoro Rivadavia y ya se encuentra en Cruz del Sur, desde donde iniciará su campaña de intervención de pozos.</p>

              {imagenesNota[4] && (
                <img src={imagenesNota[4]} alt="Trabajadores de Terra Ignis y Velitec durante el montaje del equipo de Workover" className="w-full rounded-xl my-10 shadow-md object-cover" />
              )}

              <p>La incorporación permitirá ampliar la capacidad operativa disponible en los yacimientos y avanzar con mayor agilidad en tareas de mantenimiento y reacondicionamiento de pozos, como parte del plan de recuperación de producción que ambas compañías llevan adelante desde el traspaso de las áreas.</p>

              <blockquote className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg italic text-foreground font-medium my-8">
                “La llegada de este equipo es un paso concreto dentro del plan de trabajo que venimos desarrollando junto a Velitec. Buscamos sostener la producción, recuperar el rendimiento de pozos con potencial y extender la vida productiva de los yacimientos.”
                <span className="block mt-4 text-sm font-bold text-accent not-italic">— Maximiliano D’Alessio, presidente de Terra Ignis Energía</span>
              </blockquote>

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Una herramienta clave para intervenir pozos existentes</h3>

              <p>Un equipo de Workover es una unidad especializada que permite realizar tareas de mantenimiento, reparación y reacondicionamiento sobre pozos de petróleo y gas que ya se encuentran perforados.</p>

              {imagenesNota[1] && (
                <img src={imagenesNota[1]} alt="Montaje del nuevo equipo de Workover de Velitec en Cruz del Sur" className="w-full rounded-xl my-10 shadow-md object-cover max-h-[760px]" />
              )}

              <p>Estas intervenciones pueden incluir, entre otras tareas, el reemplazo de componentes, trabajos sobre tuberías y bombas, limpieza y reacondicionamiento de instalaciones del pozo y distintas acciones orientadas a recuperar o mantener su capacidad productiva.</p>

              <p>En yacimientos maduros, este tipo de trabajos resulta especialmente relevante porque permite intervenir sobre la infraestructura existente y continuar aprovechando el potencial productivo de los pozos.</p>

              {imagenesNota[3] && (
                <img src={imagenesNota[3]} alt="Tareas de armado y montaje del equipo de Workover" className="w-full rounded-xl my-10 shadow-md object-cover" />
              )}

              <blockquote className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg italic text-foreground font-medium my-8">
                “Contar con este tipo de maquinaria propia acelera la campaña de intervención de pozos y baja los costos operativos, aspectos centrales del plan que llevamos adelante con Terra Ignis.”
                <span className="block mt-4 text-sm font-bold text-accent not-italic">— Facundo Araoz, presidente de Velitec</span>
              </blockquote>

              <p>El armado, montaje y la operación del nuevo equipo demandaron la incorporación de 12 trabajadores especializados: dos supervisores de equipo, dos maquinistas, dos enganchadores, cuatro operarios de boca de pozo, un mecánico y un electricista. Esta dotación técnica y operativa acompaña la puesta en marcha del equipo Workover y las intervenciones previstas sobre los pozos de las áreas operadas por Terra Ignis y Velitec.</p>

              <blockquote className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg italic text-foreground font-medium my-8">
                “Con esta incorporación, reafirmamos nuestro compromiso de sostener e incrementar la producción de gas y petróleo en Tierra del Fuego, generar empleo local y poner en valor activos que aún conservan potencial.”
                <span className="block mt-4 text-sm font-bold text-accent not-italic">— Facundo Araoz, presidente de Velitec</span>
              </blockquote>

              {imagenesNota[5] && (
                <img src={imagenesNota[5]} alt="Nuevo equipo de Workover montado para la operación en Tierra del Fuego" className="w-full rounded-xl my-10 shadow-md object-cover max-h-[760px]" />
              )}

              <p>La llegada del nuevo equipo se suma a las acciones que ambas compañías vienen desarrollando para fortalecer la operación de las áreas hidrocarburíferas provinciales y avanzar en la recuperación de su potencial productivo.</p>

              <blockquote className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg italic text-foreground font-medium my-8">
                “Estamos trabajando para que los recursos que hoy administra la Provincia puedan seguir generando producción, actividad y trabajo en Tierra del Fuego. Eso requiere inversión, capacidad operativa y una planificación sostenida en el tiempo.”
                <span className="block mt-4 text-sm font-bold text-accent not-italic">— Maximiliano D’Alessio, presidente de Terra Ignis Energía</span>
              </blockquote>

              <div className="mt-12 pt-8 border-t border-border">
                <h4 className="text-2xl font-bold text-foreground mb-6">Galería de imágenes</h4>
                <div className="grid grid-cols-1 gap-6">
                  {[imagenesNota[2]].filter(Boolean).map((img, idx) => (
                    <img key={idx} src={img} alt="Montaje del equipo de Workover en Cruz del Sur" className="w-full h-64 rounded-xl shadow-md object-cover hover:scale-[1.02] transition-transform" loading="lazy" />
                  ))}
                </div>
              </div>
            </div>
          ) : id === "final-tdf-innova-2026" ? (
            <div className="space-y-6 text-foreground/80 leading-relaxed text-lg">
              <p className="font-medium text-xl text-foreground mb-8">
                Terra Ignis Energía acompañó la final provincial de la 6.ª edición de TDF Innova, realizada en el Campus Ushuaia de la Universidad Nacional de Tierra del Fuego, como una de las empresas patrocinadoras de la iniciativa impulsada por el Ministerio de Producción y Ambiente de la Provincia, a través de la Secretaría de Desarrollo Productivo y PyME.
              </p>

              <p>TDF Innova es un programa orientado a distinguir, estimular y visibilizar iniciativas de micro, pequeñas y medianas empresas de Tierra del Fuego, promoviendo proyectos que incorporan innovación y contribuyen a ampliar la oferta de productos y servicios de la provincia.</p>

              {imagenesNota[0] && (
                <img src={imagenesNota[0]} alt="Presentación de un proyecto durante la final provincial de TDF Innova" className="w-full rounded-xl my-10 shadow-md object-cover" />
              )}

              <p>Durante la jornada, los emprendimientos finalistas presentaron sus propuestas mediante un pitch ante un jurado integrado por representantes de instituciones públicas, académicas y empresariales.</p>

              <p>El jurado estuvo conformado por Víctor Salgues, de Terra Ignis Energía S.A.; Nicolás Verón, del Banco de Tierra del Fuego; Adolfo Daga, de Camuzzi Gas del Sur S.A.; Élida Rechi, de la Agencia de Innovación Fueguina; Adriana Vetrone, del Centro Universitario de Desarrollo Emprendedor y PyMEs de la Universidad Nacional de Tierra del Fuego; Federico Breden, de la Cámara de Comercio y Otras Actividades Empresarias de Ushuaia; y Claudia Fernández, de la Confederación Argentina de la Mediana Empresa (CAME).</p>

              <p>Para la evaluación de las propuestas, el jurado tuvo en cuenta criterios vinculados con la innovación, la diferenciación y el atractivo de mercado, el modelo de negocios, la escalabilidad del proyecto y la conformación del equipo de trabajo.</p>

              <p>En representación de Terra Ignis Energía participó el ingeniero Víctor Salgues, uno de los miembros del Directorio de la empresa, quien formó parte del proceso de evaluación de las propuestas.</p>

              {imagenesNota[2] && (
                <img src={imagenesNota[2]} alt="Víctor Salgues durante la final provincial de TDF Innova" className="w-full rounded-xl my-10 shadow-md object-cover" />
              )}

              <p>Salgues destacó el valor de generar espacios que permitan vincular a emprendedores, instituciones y empresas:</p>

              <blockquote className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg italic text-foreground font-medium my-8">
                “TDF Innova permite conocer proyectos que nacen en Tierra del Fuego y que tienen posibilidades concretas de seguir creciendo. Para Terra Ignis es importante formar parte de estos espacios, acompañando el talento, la innovación y las capacidades que existen en la provincia.”
                <span className="block mt-4 text-sm font-bold text-accent not-italic">— Víctor Salgues, miembro del Directorio de Terra Ignis Energía</span>
              </blockquote>

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Los proyectos reconocidos</h3>

              <p>En la categoría Emprendimientos Tradicionales – Crecimiento y Expansión, Roux Sublime, de Mariela Alejandra Castillo Gutiérrez, obtuvo el primer puesto, mientras que Taller de Diseño, de Noelia Rubio, alcanzó el segundo lugar.</p>

              <p>En Emprendimientos Tradicionales – Despegue Emprendedor, el primer puesto correspondió a LastSeat.com, de Bruno Leal, mientras que Ushuaia360.com, de Juan Cruz Santana, obtuvo el segundo puesto.</p>

              <p>Por su parte, en la categoría Emprendimientos Tecnológicos y de Innovación Científica – Despegue Emprendedor, resultó ganador Factor Q, de Reinaldo Lencina.</p>

              <p>Los proyectos ganadores recibieron un premio de $2 millones para invertir en sus iniciativas, además de un acompañamiento individualizado de la Agencia de Innovación Fueguina para realizar, junto a especialistas, un diagnóstico de madurez digital.</p>

              <p>Los proyectos ganadores representarán a Tierra del Fuego en la instancia nacional de Emprendimiento Argentino, que se realizará en Buenos Aires durante noviembre de 2026.</p>

              <p>La sexta edición de TDF Innova reunió a autoridades provinciales, representantes de instituciones del sector productivo y empresarial, empresas patrocinadoras, emprendedores y público en general, consolidando un espacio de articulación para el desarrollo de nuevas iniciativas en la provincia.</p>

              <p>La participación de Terra Ignis como empresa patrocinadora se enmarca en sus acciones de Responsabilidad Social Empresaria, orientadas al acompañamiento de iniciativas vinculadas con la innovación, deportes y desarrollo local en Tierra del Fuego.</p>

              <div className="mt-12 pt-8 border-t border-border">
                <h4 className="text-2xl font-bold text-foreground mb-6">Galería de imágenes</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[imagenesNota[3]].filter(Boolean).map((img, idx) => (
                    <img key={idx} src={img} alt="Emprendedor durante la final provincial de TDF Innova" className="w-full h-64 rounded-xl shadow-md object-cover hover:scale-[1.02] transition-transform" loading="lazy" />
                  ))}
                </div>
              </div>
            </div>
          ) : id === "tdf-innova-terra-ignis" ? (
            <div className="space-y-6 text-foreground/80 leading-relaxed text-lg">
              <p className="font-medium text-xl text-foreground mb-8">
                Terra Ignis Energía S.A. y el Ministerio de Producción y Ambiente de la Provincia firmaron un convenio de colaboración mediante el cual la empresa provincial se incorpora como agente patrocinador de la sexta edición del programa TDF Innova, una iniciativa que promueve, visibiliza y reconoce proyectos innovadores que contribuyen al fortalecimiento del entramado productivo de Tierra del Fuego.
              </p>

              <p>En el marco del acuerdo, Terra Ignis otorgará el premio correspondiente a la categoría “Emprendimientos Tecnológicos y de Innovación Científica – Estadio de Crecimiento y Expansión”, reafirmando su compromiso con el impulso a la innovación, el desarrollo tecnológico y la generación de valor agregado en la provincia.</p>

              {imagenesNota[0] && (
                <img src={imagenesNota[0]} alt="Firma del convenio entre Terra Ignis y el Ministerio de Producción y Ambiente" className="w-full rounded-xl my-10 shadow-md object-cover" />
              )}

              <p>Asimismo, la empresa podrá integrar el jurado provincial y acompañará la difusión del programa junto al Ministerio de Producción y Ambiente. La incorporación de Terra Ignis a TDF Innova refleja el compromiso de la empresa provincial con iniciativas que impulsan la innovación como herramienta para diversificar la matriz productiva, fortalecer el entramado emprendedor y generar nuevas oportunidades de desarrollo para Tierra del Fuego.</p>

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Articulación para el desarrollo productivo</h3>

              <p>Al respecto, el ministro de Producción y Ambiente, Francisco Devita, expresó:</p>

              <blockquote className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg italic text-foreground font-medium my-8">
                “La incorporación de Terra Ignis a TDF Innova fortalece una política pública que busca identificar, visibilizar y acompañar emprendimientos innovadores de Tierra del Fuego. La participación de una empresa provincial en este programa refleja una articulación que potencia el desarrollo productivo y genera nuevas oportunidades para quienes apuestan por la innovación.”
                <span className="block mt-4 text-sm font-bold text-accent not-italic">— Francisco Devita, ministro de Producción y Ambiente</span>
              </blockquote>

              <p>Por su parte, el presidente de Terra Ignis Energía S.A., Maximiliano D&apos;Alessio, señaló:</p>

              <blockquote className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg italic text-foreground font-medium my-8">
                “Terra Ignis fue creada para contribuir al desarrollo de Tierra del Fuego. En ese marco, sumarnos a TDF Innova representa una forma concreta de acompañar proyectos que promueven la innovación, generan valor agregado y fortalecen el entramado productivo provincial. Creemos que el desarrollo energético también requiere impulsar iniciativas que contribuyan a diversificar la matriz productiva y ampliar las capacidades de la provincia.”
                <span className="block mt-4 text-sm font-bold text-accent not-italic">— Maximiliano D&apos;Alessio, presidente de Terra Ignis Energía S.A.</span>
              </blockquote>

              <p>En ese contexto, también se anunció la extensión del plazo de inscripción para participar de la sexta edición de TDF Innova hasta el 18 de agosto, con el propósito de ampliar la participación de emprendedores y emprendimientos de toda la provincia.</p>

              <p>La convocatoria está dirigida a emprendimientos tradicionales con modelos de negocio innovadores y a proyectos tecnológicos y de innovación científica, tanto en etapa de despegue como de crecimiento y expansión. Los proyectos serán evaluados por un jurado integrado por especialistas provinciales y nacionales, considerando criterios como el grado de innovación, el potencial de crecimiento y su aporte al desarrollo económico, social y ambiental de la provincia.</p>

              <div className="rounded-xl border border-accent/30 bg-accent/5 p-6 my-10">
                <h3 className="text-xl font-bold text-foreground mb-3">Inscripciones abiertas hasta el 18 de agosto</h3>
                <p className="mb-4">Las personas interesadas pueden consultar las bases y condiciones e inscribirse a través del sitio web oficial del programa:</p>
                <a href="https://prodyambiente.tierradelfuego.gob.ar/tdf-innova-2026/" target="_blank" rel="noreferrer" className="text-accent font-semibold underline underline-offset-4 break-all hover:text-primary transition-colors">
                  prodyambiente.tierradelfuego.gob.ar/tdf-innova-2026/
                </a>
              </div>

              {imagenesNota.length > 1 && (
                <div className="mt-12 pt-8 border-t border-border">
                  <h4 className="text-2xl font-bold text-foreground mb-6">Galería de imágenes</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {imagenesNota.slice(1).map((img, idx) => (
                      <img key={idx} src={img} alt={`Galería TDF Innova ${idx + 1}`} className="w-full h-64 rounded-xl shadow-md object-cover hover:scale-[1.02] transition-transform" loading="lazy" />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : id === "gran-premio-de-la-hermandad" ? (
            <div className="space-y-6 text-foreground/80 leading-relaxed text-lg">
              <p className="font-medium text-xl text-foreground mb-8">
                Río Grande, 25 de julio de 2026. Terra Ignis Energía S.A. firmó un convenio de colaboración con el Automóvil Club Río Grande para acompañar la 51.ª edición del Gran Premio de la Hermandad, una de las competencias deportivas y de integración binacional más emblemáticas de la Patagonia.
              </p>

              <p>El acuerdo fue suscripto por el presidente de Terra Ignis, Maximiliano D&apos;Alessio, y la presidenta del Automóvil Club Río Grande, Sandra Martínez, y contempla un aporte de 2.000 litros de combustible, destinados exclusivamente a los vehículos afectados al operativo de seguridad de la competencia.</p>

              {imagenesNota[0] && (
                <img src={imagenesNota[0]} alt="Firma del convenio entre Terra Ignis y el Automóvil Club Río Grande" className="w-full rounded-xl my-10 shadow-md object-cover" />
              )}

              <p>La competencia se desarrollará los días 14, 15 y 16 de agosto entre Río Grande, Argentina, y Porvenir, Chile. A través de este aporte, Terra Ignis acompaña la planificación logística y las tareas de prevención que permiten que el evento se desarrolle con mejores condiciones de seguridad para pilotos, equipos, familias y comunidades.</p>

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Compromiso con una competencia histórica</h3>

              <p>La iniciativa se enmarca en el Programa de Responsabilidad Social Empresaria de Terra Ignis, que impulsa acciones orientadas al desarrollo provincial, el fortalecimiento institucional y el acompañamiento de iniciativas estratégicas para Tierra del Fuego.</p>

              <blockquote className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg italic text-foreground font-medium my-8">
                &quot;Acompañamos el Gran Premio de la Hermandad porque es un evento histórico para Tierra del Fuego y entendemos que, como empresa provincial, podemos contribuir a que se desarrolle en las mejores condiciones de seguridad&quot;.
                <span className="block mt-4 text-sm font-bold text-accent not-italic">— Maximiliano D&apos;Alessio, presidente de Terra Ignis</span>
              </blockquote>

              <p>Con más de cinco décadas de historia, el Gran Premio de la Hermandad constituye uno de los eventos deportivos más representativos de la región. La competencia fortalece los vínculos de integración entre Argentina y Chile y convoca cada año a cientos de pilotos, equipos y familias de ambos lados de la frontera.</p>

              <p>A través de este convenio, Terra Ignis continúa impulsando acciones que contribuyen al desarrollo de Tierra del Fuego, acompañando iniciativas de interés provincial y fortaleciendo el trabajo conjunto con instituciones que forman parte de la historia y la identidad fueguina.</p>
            </div>
          ) : id === "convenio-deporte-fueguino" ? (
            <div className="space-y-6 text-foreground/80 leading-relaxed text-lg">
              <p className="font-medium text-xl text-foreground mb-8">
                Tierra del Fuego, 17 de julio de 2026. La ministra de Bienestar Ciudadano y Justicia, Lucía Rossi, y el presidente de Terra Ignis Energía S.A., Maximiliano D'Alessio, suscribieron un convenio de colaboración destinado a impulsar el desarrollo del deporte en Tierra del Fuego, Antártida e Islas del Atlántico Sur.
              </p>

              <p>El acuerdo permitirá que la empresa provincial realice aportes en bienes, servicios, asistencia técnica, logística, capacitaciones y otros recursos orientados a fortalecer programas y proyectos deportivos, acompañar a deportistas y selecciones provinciales, mejorar la infraestructura y el equipamiento, además de promover iniciativas inclusivas dirigidas a niños, jóvenes, personas con discapacidad y personas mayores.</p>

              {imagenesNota[2] && (
                <img src={imagenesNota[2]} alt="Reunión de trabajo durante la firma del convenio para fortalecer el deporte fueguino" className="w-full rounded-xl my-10 shadow-md object-cover" />
              )}

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Más apoyo para el deporte fueguino</h3>

              <blockquote className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg italic text-foreground font-medium my-8">
                "Este acuerdo representa un paso muy importante para seguir fortaleciendo el deporte fueguino."
                <span className="block mt-4 text-sm font-bold text-accent not-italic">— Lucía Rossi, Ministra de Bienestar Ciudadano y Justicia</span>
              </blockquote>

              <p>Tras la firma, la ministra Lucía Rossi agradeció al presidente de Terra Ignis, Maximiliano D'Alessio, y a todo el equipo de la empresa por el compromiso y la decisión de acompañar políticas que generan más oportunidades para la comunidad fueguina.</p>

              <p>La funcionaria sostuvo además que la articulación entre el Estado y las empresas provinciales constituye una herramienta fundamental para potenciar el desarrollo deportivo y ampliar el alcance de las políticas públicas en todo el territorio fueguino.</p>

              <blockquote className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg italic text-foreground font-medium my-8">
                "Estamos convencidos de que el trabajo conjunto nos permite potenciar el desarrollo de nuestros deportistas y seguir construyendo una Tierra del Fuego con más inclusión y más oportunidades para todos y todas."
                <span className="block mt-4 text-sm font-bold text-accent not-italic">— Lucía Rossi</span>
              </blockquote>

              {imagenesNota[1] && (
                <img src={imagenesNota[1]} alt="Firma del convenio entre el Gobierno provincial y Terra Ignis" className="w-full rounded-xl my-10 shadow-md object-cover" />
              )}

              <p>Finalmente, Rossi remarcó el valor social del deporte al considerar que transforma vidas, promueve valores, fomenta hábitos saludables y genera igualdad de oportunidades, y aseguró que este convenio permitirá llegar con más acciones y recursos a deportistas e instituciones de toda la provincia.</p>

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Responsabilidad social y comunidad</h3>

              <blockquote className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg italic text-foreground font-medium my-8">
                "Terra Ignis nació para generar valor para Tierra del Fuego, y ese compromiso también implica acompañar el desarrollo de nuestra comunidad."
                <span className="block mt-4 text-sm font-bold text-accent not-italic">— Maximiliano D'Alessio, Presidente de Terra Ignis</span>
              </blockquote>

              <blockquote className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg italic text-foreground font-medium my-8">
                "En el marco de nuestra política de Responsabilidad Social Empresaria, este convenio refleja nuestra decisión de impulsar el deporte como una herramienta de inclusión, formación y desarrollo. Queremos estar presentes acompañando a los deportistas fueguinos, desde quienes dan sus primeros pasos hasta quienes representan con orgullo a nuestra provincia en diferentes competencias. Creemos que invertir en el deporte es invertir en oportunidades, en valores y en el futuro de Tierra del Fuego."
                <span className="block mt-4 text-sm font-bold text-accent not-italic">— Maximiliano D'Alessio</span>
              </blockquote>

              {imagenesNota[3] && (
                <img src={imagenesNota[3]} alt="Maximiliano D'Alessio durante la firma del convenio de colaboración" className="w-full rounded-xl my-10 shadow-md object-cover" />
              )}

              <p>Con este convenio, el Gobierno provincial y Terra Ignis consolidan una agenda de trabajo conjunto orientada a ampliar oportunidades, fortalecer el entramado deportivo fueguino y acompañar a deportistas e instituciones con más herramientas, recursos y presencia territorial.</p>

              {imagenesNota.length > 0 && (
                <div className="mt-12 pt-8 border-t border-border">
                  <h4 className="text-2xl font-bold text-foreground mb-6">Galería de imágenes</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[imagenesNota[0]].filter(Boolean).map((img, idx) => (
                      <img key={idx} src={img} alt={`Galería convenio deporte fueguino ${idx + 1}`} className="w-full h-64 rounded-xl shadow-md object-cover hover:scale-[1.02] transition-transform" loading="lazy" />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : id === "agenda-neuquen" ? (
            <div className="space-y-6 text-foreground/80 leading-relaxed text-lg">
              <p className="font-medium text-xl text-foreground mb-8">
                Neuquén, 14 de julio de 2026. Autoridades de Terra Ignis Energía S.A. desarrollaron una agenda estratégica en la provincia del Neuquén para fortalecer la cooperación entre empresas públicas del sector energético, intercambiar experiencias de gestión y conocer buenas prácticas vinculadas al desarrollo hidrocarburífero y la gestión ambiental.
              </p>

              <p>La agenda comenzó con una reunión institucional junto a autoridades de Gas y Petróleo del Neuquén S.A. (GyP), encabezada por los presidentes de ambas empresas, Maximiliano D'Alessio y Guillermo Savasta. Del encuentro también participaron, por parte de GyP, el gerente de Exploración y Producción, Alejandro Aubert, y miembros del equipo técnico de la empresa. En representación de Terra Ignis asistieron la gerente Legal e Institucional, Verónica Tito; el subgerente de Finanzas, Rafael Pereyra Ramos; los directores titulares Mauro Pérez Toscani y Alejandro Eloff; y la síndica Evelyn Ruiz.</p>

              {imagenesNota[4] && (
                <img src={imagenesNota[4]} alt="Autoridades de Terra Ignis y GyP durante la agenda institucional en Neuquén" className="w-full rounded-xl my-10 shadow-md object-cover" />
              )}

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Intercambio institucional y cooperación energética</h3>

              <p>Durante el encuentro se abordaron temas vinculados al desarrollo de las cuencas hidrocarburíferas, el rol de las empresas con participación estatal, los desafíos de la actividad energética, el desarrollo de recursos convencionales y no convencionales y el intercambio de experiencias entre ambas compañías.</p>

              <blockquote className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg italic text-foreground font-medium my-8">
                "Fue una reunión muy productiva entre dos empresas con características similares, donde pudimos intercambiar experiencias y sentar las bases para una colaboración futura. Compartimos una visión sobre el desarrollo de los recursos energéticos con un fuerte foco en la sustentabilidad ambiental y social."
                <span className="block mt-4 text-sm font-bold text-accent not-italic">— Guillermo Savasta, Presidente de GyP</span>
              </blockquote>

              {imagenesNota[5] && (
                <img src={imagenesNota[5]} alt="Reunión institucional entre Terra Ignis y GyP en Neuquén" className="w-full rounded-xl my-10 shadow-md object-cover" />
              )}

              <blockquote className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg italic text-foreground font-medium my-8">
                "El intercambio con empresas públicas que cuentan con una amplia trayectoria en el desarrollo energético representa una oportunidad para fortalecer nuestras capacidades institucionales y técnicas, incorporando experiencias y herramientas adaptadas a los desafíos de las provincias patagónicas. Conocer modelos de gestión consolidados y promover espacios de cooperación nos permite potenciar el crecimiento de Terra Ignis y avanzar hacia un desarrollo hidrocarburífero cada vez más eficiente, sostenible y alineado con las necesidades de Tierra del Fuego."
                <span className="block mt-4 text-sm font-bold text-accent not-italic">— Maximiliano D'Alessio, Presidente de Terra Ignis</span>
              </blockquote>

              <p>En el marco de la agenda, la comitiva realizó además una visita técnica a las instalaciones de Servicios Ambientales Neuquén (SAN), empresa de capitales nacionales especializada en el tratamiento, valorización y disposición final de residuos peligrosos, con amplia experiencia en la gestión de residuos generados por la actividad hidrocarburífera. La delegación fue recibida por el presidente de SAN, Federico Fardighini, y el director de la empresa, Lucas Peri, quienes acompañaron el recorrido por la planta y presentaron el funcionamiento de sus procesos, la tecnología aplicada y los estándares ambientales implementados en la gestión de residuos peligrosos.</p>

              {imagenesNota[1] && (
                <img src={imagenesNota[1]} alt="Recorrida técnica de Terra Ignis en las instalaciones de SAN" className="w-full rounded-xl my-10 shadow-md object-cover" />
              )}

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Visita técnica y aprendizaje ambiental aplicado</h3>

              <p>De la visita técnica participaron, por parte del Gobierno de Tierra del Fuego, la ministra de Energía, Gabriela Castillo; la secretaria de Hidrocarburos, Julieta Balderramas; y la directora general de Fiscalización de las Operaciones Hidrocarburíferas, Ana Laura López. Asimismo, participaron el asesor ambiental de Terra Ignis, Sergio Federovisky, junto a las autoridades de Terra Ignis que integraban la comitiva institucional.</p>

              <p>Durante la recorrida, las autoridades conocieron en detalle el relleno de seguridad operado por SAN, los procesos de tratamiento y disposición final de residuos hidrocarburíferos, la ingeniería aplicada al diseño de las celdas de confinamiento, los sistemas de control ambiental y la experiencia desarrollada por la provincia del Neuquén para la gestión de este tipo de residuos.</p>

              <blockquote className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg italic text-foreground font-medium my-8">
                "Pudimos recorrer las instalaciones, hacer preguntas, comprender cada una de las etapas del tratamiento y conocer cómo otra provincia ha dado respuesta a la gestión de sus residuos hidrocarburíferos. Este tipo de intercambios nos brinda herramientas para seguir avanzando en Tierra del Fuego con una mirada puesta en la mejora de las condiciones ambientales y en una explotación hidrocarburífera cada vez más sostenible."
                <span className="block mt-4 text-sm font-bold text-accent not-italic">— Gabriela Castillo, Ministra de Energía</span>
              </blockquote>

              {imagenesNota[6] && (
                <img src={imagenesNota[6]} alt="Recorrida de la delegación por la planta ambiental en Neuquén" className="w-full rounded-xl my-10 shadow-md object-cover" />
              )}

              <blockquote className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg italic text-foreground font-medium my-8">
                "Los procesos que se utilizan en esta planta son plenamente replicables en Tierra del Fuego, adaptándolos a la escala de nuestra actividad. Conocer experiencias reales nos permite comprender la magnitud de este tipo de proyectos y aprovechar todo el aprendizaje acumulado para implementar las mejores herramientas y procesos disponibles en materia ambiental."
                <span className="block mt-4 text-sm font-bold text-accent not-italic">— Alejandro Eloff, Director Titular de Terra Ignis</span>
              </blockquote>

              <blockquote className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg italic text-foreground font-medium my-8">
                "Pudimos comprobar cómo funciona una infraestructura de estas características y conocer la tecnología aplicada al tratamiento de residuos petroleros. Esta experiencia reafirma la importancia de avanzar en soluciones que permitan gestionar de manera segura los residuos de la actividad y contribuir a la remediación de los pasivos ambientales."
                <span className="block mt-4 text-sm font-bold text-accent not-italic">— Sergio Federovisky, Asesor Ambiental de Terra Ignis</span>
              </blockquote>

              <p>La agenda desarrollada en Neuquén se enmarca en la estrategia de Terra Ignis de promover una agenda de trabajo junto a instituciones y empresas referentes del sector energético, incorporando experiencias que contribuyan al fortalecimiento de la gestión pública, el desarrollo de infraestructura estratégica y la consolidación de una actividad hidrocarburífera con los más altos estándares técnicos y ambientales.</p>

              {imagenesNota.length > 0 && (
                <div className="mt-12 pt-8 border-t border-border">
                  <h4 className="text-2xl font-bold text-foreground mb-6">Galería de imágenes</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[imagenesNota[0], imagenesNota[2], imagenesNota[3], imagenesNota[7]].filter(Boolean).map((img, idx) => (
                      <img key={idx} src={img} alt={`Galería agenda estratégica en Neuquén ${idx + 1}`} className="w-full h-64 rounded-xl shadow-md object-cover hover:scale-[1.02] transition-transform" loading="lazy" />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : id === "convenio-colegio-ingenieros" ? (
            <div className="space-y-6 text-foreground/80 leading-relaxed text-lg">
              <p className="font-medium text-xl text-foreground mb-8">
                Río Grande, 26 de junio de 2026. Terra Ignis Energía S.A. y el Colegio de Ingenieros de Tierra del Fuego suscribieron un Convenio Marco de Cooperación con el objetivo de promover acciones conjuntas de capacitación, asistencia técnica, intercambio de conocimientos y desarrollo de iniciativas vinculadas al sector energético de la provincia.
              </p>

              <p>El acuerdo establece un marco de trabajo conjunto orientado a impulsar actividades de formación profesional, cooperación institucional, investigación y asesoramiento técnico, fortaleciendo las capacidades de ambas instituciones y contribuyendo al desarrollo de proyectos de interés común. Asimismo, prevé la realización de programas de capacitación, intercambio de experiencias y colaboración en iniciativas relacionadas con la ingeniería y el desarrollo energético provincial.</p>

              {imagenesNota[0] && (
                <img src={imagenesNota[0]} alt="Firma del convenio entre Terra Ignis y el Colegio de Ingenieros de Tierra del Fuego" className="w-full rounded-xl my-10 shadow-md object-cover" />
              )}

              <p>Durante la firma del convenio, el director de Terra Ignis Energía S.A., Víctor Salgués, expresó:</p>

              <blockquote className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg italic text-foreground font-medium my-8">
                "Este convenio tiene como finalidad contar con el apoyo técnico del Colegio de Ingenieros para el desarrollo de capacitaciones, auditorías, estudios y otras acciones de asistencia técnica que contribuyan al fortalecimiento de nuestra empresa. El Colegio reúne a profesionales de 27 especialidades de la ingeniería, entre ellas civil, eléctrica, mecánica, electromecánica, petróleo, ambiental y seguridad e higiene, lo que representa un respaldo muy importante para Terra Ignis y para los desafíos que tenemos por delante."
                <span className="block mt-4 text-sm font-bold text-accent not-italic">— Víctor Salgués, Director de Terra Ignis Energía S.A.</span>
              </blockquote>

              <p>Por su parte, el presidente del Colegio de Ingenieros de Tierra del Fuego, Gustavo Núñez, señaló:</p>

              <blockquote className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg italic text-foreground font-medium my-8">
                "Desde el Colegio de Ingenieros celebramos la firma de este convenio con Terra Ignis Energía. Contamos con profesionales de distintas especialidades que podrán aportar asesoramiento técnico y capacitaciones para acompañar el desarrollo de la empresa. Nuestra institución tiene las puertas abiertas para trabajar de manera conjunta en beneficio de la provincia."
                <span className="block mt-4 text-sm font-bold text-accent not-italic">— Gustavo Núñez, Presidente del Colegio de Ingenieros de Tierra del Fuego</span>
              </blockquote>

              <p>Finalmente, el presidente de Terra Ignis Energía S.A., Maximiliano D'Alessio, destacó:</p>

              <blockquote className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg italic text-foreground font-medium my-8">
                "La articulación entre el sector público y las instituciones profesionales es fundamental para construir una empresa cada vez más sólida. Este convenio con el Colegio de Ingenieros nos permitirá seguir incorporando conocimiento, promoviendo la capacitación y fortaleciendo nuestras capacidades para afrontar los desafíos del desarrollo energético provincial."
                <span className="block mt-4 text-sm font-bold text-accent not-italic">— Maximiliano D'Alessio, Presidente de Terra Ignis Energía S.A.</span>
              </blockquote>

              <p>Acompañaron la firma del convenio el director de Terra Ignis Energía S.A., Mauro Pérez Toscani; el subgerente de Finanzas, Rafael Pereyra Ramos; y el arquitecto Daniel Hernández.</p>

              <p>Con esta iniciativa, Terra Ignis reafirma su compromiso con la formación permanente de sus equipos, la vinculación con las instituciones profesionales de la provincia y la consolidación de una gestión orientada al desarrollo de capacidades técnicas que acompañen el crecimiento del sector energético fueguino.</p>
            </div>
          ) : id === "presentacion-canada" ? (
            <div className="space-y-6 text-foreground/80 leading-relaxed text-lg">
              <p className="font-medium text-xl text-foreground mb-8">
                La empresa provincial Terra Ignis Energía participa de la Global Energy Show 2026, uno de los principales encuentros de la industria energética a nivel mundial, que se desarrolla en Calgary, Canadá, donde expone las oportunidades de inversión y el modelo de articulación público-privada que impulsa Tierra del Fuego para el desarrollo de sus recursos energéticos.
              </p>

              <p>La delegación fueguina está integrada por la ministra de Energía, Gabriela Castillo; la secretaria de Hidrocarburos, Julieta Balderramas; el presidente de Terra Ignis Energía, Maximiliano D'Alessio; la gerente Legal e Institucional de la compañía, Verónica Tito; y Facundo Araoz, presidente de Velitec, empresa operadora de las áreas hidrocarburíferas provinciales. La participación conjunta permite presentar ante referentes de la industria energética internacional y actores del sector privado canadiense, un modelo de gestión basado en la articulación entre el Estado provincial, la empresa pública y el sector privado.</p>

              {/* Mostramos la imagen asignada */}
              {imagenesNota[0] && (
                <img src={imagenesNota[0]} alt="Delegación de Terra Ignis en Canadá" className="w-full rounded-xl my-10 shadow-md object-cover" />
              )}

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Un modelo de gestión ante el mundo</h3>

              <p>En el marco del seminario "From Vaca Muerta to Conventional Basins: Unlocking Argentina’s Full Energy Potential", organizado por la Cámara de Comercio argentino canadiense, Terra Ignis fue convocada para exponer ante empresas, inversores y referentes internacionales sobre el modelo de gestión que impulsa en Tierra del Fuego junto a su socio operador. La presentación permitió mostrar la experiencia fueguina como un ejemplo de articulación entre el Estado provincial, la empresa pública y el sector privado para el desarrollo de la actividad energética.</p>

              <p>En ese marco, D'Alessio destacó que Terra Ignis nació con el objetivo de convertirse en un articulador entre el sector público y el sector privado, promoviendo nuevas inversiones y acompañando el desarrollo de proyectos energéticos en la provincia. Asimismo, repasó el proceso mediante el cual la empresa asumió las concesiones de las áreas Lago Fuego, Los Chorrillos y Tierra del Fuego, actualmente operadas en asociación con Velitec.</p>

              <blockquote className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg italic text-foreground font-medium my-8">
                "Presentamos un modelo en el que la provincia, la empresa pública y el operador privado trabajan de manera coordinada para transformar los recursos energéticos en desarrollo, empleo e inversión para Tierra del Fuego."
                <span className="block mt-4 text-sm font-bold text-accent not-italic">— Maximiliano D'Alessio, Presidente de Terra Ignis</span>
              </blockquote>

              <p>Los directivos también expusieron las ventajas competitivas que ofrece la provincia para el desarrollo de inversiones energéticas, entre ellas los beneficios derivados del régimen de promoción de la Ley 19.640, el acceso a herramientas de financiamiento para proyectos de agregado de valor y los incentivos previstos para nuevos emprendimientos hidrocarburíferos, entre otros relacionados con la asociación con la empresa.</p>

              <p>La presentación incluyó además las perspectivas de crecimiento de la actividad en la provincia, las oportunidades asociadas a futuras campañas exploratorias y el potencial de nuevas áreas de exploración y desarrollo en la Cuenca Austral.</p>

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Oportunidades de inversión y cooperación</h3>

              <p>En el marco de la misión, la delegación fueguina desarrolla una intensa agenda de reuniones bilaterales con empresas internacionales vinculadas a la ingeniería, el desarrollo de proyectos, la operación y los servicios para la industria energética, con el objetivo de atraer inversiones y promover la transferencia tecnológica. Hasta el momento, se han concretado más de 15 encuentros orientados a presentar las oportunidades de inversión existentes en Tierra del Fuego y explorar posibles ámbitos de cooperación y desarrollo.</p>

              <blockquote className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg italic text-foreground font-medium my-8">
                "Tierra del Fuego cuenta con herramientas diferenciales para el desarrollo de nuevos proyectos energéticos y observamos un marcado interés por parte de empresas internacionales en conocer las oportunidades que ofrece la provincia."
                <span className="block mt-4 text-sm font-bold text-accent not-italic">— Verónica Tito, Gerenta Legal e Institucional</span>
              </blockquote>

              <p>Entre ellas se destacan Thermo Design Engineering (TDE), ALCO Energy Solutions y Chinook, compañías con las que se intercambiaron experiencias y se analizan potenciales oportunidades vinculadas a futuros proyectos energéticos en la provincia.</p>

              <p>La participación de Terra Ignis forma parte de una misión institucional y empresarial impulsada por el Consejo Federal de Inversiones (CFI) enmarcada en el Global Energy Forum orientada a promover nuevas inversiones, fortalecer vínculos internacionales y posicionar el potencial energético argentino ante algunos de los principales actores de la industria energética global.</p>

              <p>La agenda de trabajo continuará durante los próximos días con nuevas reuniones institucionales y empresariales destinadas a fortalecer vínculos internacionales, promover inversiones y generar oportunidades de desarrollo para el sector energético fueguino. Calgary, ubicada en la provincia canadiense de Alberta, es reconocida como uno de los principales polos energéticos de América del Norte y constituye un centro de referencia para la industria hidrocarburífera mundial, concentrando empresas, proveedores, inversores y desarrolladores de tecnología vinculados al sector.</p>
            </div>
          ) : id === "saneamiento-velitec" ? (
            <div className="space-y-6 text-foreground/80 leading-relaxed text-lg">
              <p>
                <strong className="text-foreground">Terra Ignis S.A., y Velitec S.A., su socio operador</strong>, avanzan con la campaña integral de deschatarrización y saneamiento ambiental en las áreas Fracción A, Fracción B y San Sebastián en la provincia de Tierra del Fuego. La semana pasada finalizó la carga y despacho del primer lote de residuos ferrosos, trasladado en 35 camiones. Esta acción marca el avance de la primera etapa de la campaña de remediación, que permitió retirar 800 toneladas de residuos y pasivos ferrosos del área de concesión, los cuales fueron previamente sometidos a una descontaminación in situ.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Antecedentes de la campaña</h3>
              <p>La actividad hidrocarburífera desarrollada durante décadas en la Cuenca Austral generó materiales remanentes que, una vez cumplida su vida útil, requieren procesos específicos de retiro, clasificación y disposición final, contribuyendo al ordenamiento ambiental de las áreas operativas. Se trata de cañerías, válvulas, motores, componentes de bombas y otras estructuras metálicas fuera de servicio y en desuso.</p>
              <p>En ese marco, Velitec junto a Terra Ignis S.A implementaron una campaña integral de saneamiento, descontaminación, clasificación y transporte a destino final con el objetivo de mitigar riesgos ambientales y de seguridad, dando pleno cumplimiento a la legislación ambiental provincial.</p>

              {/* Intercalamos la primera imagen (si existe) */}
              {imagenesNota[0] && (
                <img src={imagenesNota[0]} alt="Trabajos de saneamiento en Tierra del Fuego" className="w-full rounded-xl my-10 shadow-md object-cover" />
              )}

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Una nueva etapa de gestión Ambiental</h3>
              <p>La iniciativa contribuye a prevenir la contaminación, recuperar el paisaje, reducir el impacto visual y proteger la biodiversidad en zonas de pastoreo de ganadería ovina y hábitat natural de especies autóctonas como el guanaco.</p>
              <p>Las tareas se enmarcan en las exigencias de la Ley Provincial N.° 55 de Medio Ambiente, el Decreto Reglamentario N.° 1333/93 de Residuos Peligrosos y las directrices de la Secretaría de Ambiente de la Provincia de Tierra del Fuego.</p>

              <blockquote className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg italic text-foreground font-medium my-8">
                “Esta campaña refleja nuestro compromiso concreto con la responsabilidad ambiental y el desarrollo sostenible de la actividad hidrocarburífera en Tierra del Fuego”, destacaron desde Velitec S.A.
              </blockquote>

              <p>Desde la empresa Provincial, señalaron que esta campaña forma parte de la nueva etapa de gestión energética impulsada por Terra Ignis Energía S.A., orientada a combinar continuidad operativa, cuidado ambiental y desarrollo estratégico de los recursos hidrocarburíferos de la provincia.</p>

              {/* Intercalamos la segunda imagen (si existe) */}
              {imagenesNota[1] && (
                <img src={imagenesNota[1]} alt="Saneamiento ambiental" className="w-full rounded-xl my-10 shadow-md object-cover" />
              )}

              <p>En ese marco, Terra Ignis viene promoviendo acciones de saneamiento, remediación y ordenamiento ambiental en las áreas revertidas, con el objetivo de avanzar hacia una actividad hidrocarburífera con mayores estándares ambientales y una gestión sustentable de largo plazo.</p>

              {/* Galería dinámica para el resto de las imágenes */}
              {imagenesNota.length > 2 && (
                <div className="mt-12 pt-8 border-t border-border">
                  <h4 className="text-2xl font-bold text-foreground mb-6">Galería de imágenes</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {imagenesNota.slice(2).map((img, idx) => (
                      <img key={idx} src={img} alt={`Galería saneamiento ${idx + 1}`} className="w-full h-64 rounded-xl shadow-md object-cover hover:scale-[1.02] transition-transform" loading="lazy" />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : id === "convenio-btf" ? (
            <div className="space-y-6 text-foreground/80 leading-relaxed text-lg">
              <p className="font-medium text-xl text-foreground mb-8">
                A través de este acuerdo, el Banco de Tierra del Fuego se constituye como el proveedor estratégico de coberturas para la empresa estatal, reforzando el rol de BTF Seguros como un actor fundamental en la protección del sector público, empresas y particulares.
              </p>

              <p>En el marco de su Plan Estratégico 2026, el Banco de Tierra del Fuego (BTF) formalizó un convenio con la empresa estatal de hidrocarburos y energía Terra Ignis Energía S.A. Mediante este acuerdo, la entidad financiera provincial asume el rol de agente institorio, brindando soluciones integrales de aseguramiento para la operatividad y los activos de la compañía.</p>
              
              {/* Intercalamos la primera imagen (si existe) */}
              {imagenesNota[0] && (
                <img src={imagenesNota[0]} alt="Firma de convenio entre BTF y Terra Ignis" className="w-full rounded-xl my-10 shadow-md object-cover" />
              )}

              <p>Esta alianza consolida el papel del Banco como un referente de peso en el mercado asegurador regional. Bajo la marca BTF Seguros, la entidad pone a disposición de organismos públicos, sectores productivos y clientes particulares el asesoramiento de un equipo de gestión especializado y el respaldo de las compañías aseguradoras más prestigiosas del mercado nacional.</p>

              <blockquote className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg italic text-foreground font-medium my-8">
                "La firma de este convenio con Terra Ignis no es un hecho aislado, sino que forma parte de nuestra visión de conectar todas las capacidades del Banco con el desarrollo de la provincia. Estamos consolidando nuestro rol como agente institorio para ofrecer un servicio de excelencia, conectando la demanda de protección de sectores estratégicos con las mejores coberturas disponibles en el mercado. Queremos que cada actor de la economía local, desde una empresa estatal hasta un vecino, encuentre en el BTF el asesoramiento y la seguridad que su actividad requiere."
                <span className="block mt-4 text-sm font-bold text-accent not-italic">— Adrián Cosentino, Presidente del BTF</span>
              </blockquote>

              <p>El objetivo central es que el Banco actúe como un facilitador de confianza, garantizando las mejores condiciones de contratación y una respuesta ágil, apalancándose en su presencia en toda la provincia y su conocimiento de la realidad fueguina.</p>

              {/* Intercalamos la segunda imagen (si existe) */}
              {imagenesNota[1] && (
                <img src={imagenesNota[1]} alt="Autoridades de Terra Ignis y BTF" className="w-full rounded-xl my-10 shadow-md object-cover" />
              )}

              <blockquote className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg italic text-foreground font-medium my-8">
                "Este acuerdo representa un primer paso institucional muy importante entre Terra Ignis y el Banco de Tierra del Fuego. Estamos consolidando un modelo de desarrollo en el que las instituciones de la provincia trabajan integradas para potenciar la actividad energética, generar valor local y fortalecer la capacidad de gestión fueguina sobre sectores estratégicos."
                <span className="block mt-4 text-sm font-bold text-accent not-italic">— Maximiliano D'Alessio, Presidente de Terra Ignis</span>
              </blockquote>

              <p>De la firma del convenio participaron autoridades de ambas entidades, acompañando a sus respectivos presidentes. En representación de Terra Ignis Energía S.A. estuvieron presentes los directores Víctor Salgues, Mauro Pérez Toscani y Alejandro Eloff, junto a Verónica Tito, Gerenta Legal e Institucional de la compañía.</p>
              
              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Relanzamiento de BTF Seguros</h3>
              <p>Este convenio se enmarca en un proceso más amplio: el relanzamiento del área de seguros del BTF como una unidad de negocios estratégica, con equipo propio, cartera ampliada y una propuesta de valor orientada a toda la sociedad fueguina. En ese sentido, el Banco ya viene desarrollando acciones concretas para acercar estas soluciones a los vecinos, con descuentos desde el 40% en distintas coberturas —automotor, vivienda, vida y más— con las mejores compañías del mercado nacional. En este sentido, el área de seguros se consolida como un servicio complementario que refuerza el rol histórico del BTF como institución de fomento al servicio de los fueguinos.</p>

              <blockquote className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg italic text-foreground font-medium my-8">
                "BTF Seguros no es un servicio accesorio, es una decisión estratégica. Estamos llevando adelante transformaciones profundas en el área para reposicionar al Banco como un actor central en el mercado asegurador de la provincia, con una oferta competitiva, accesible y respaldada por las compañías más sólidas del país. De la misma manera que el Banco tiene un rol de liderazgo en el crédito a familias y empresas, queremos construir ese mismo posicionamiento en el segmento de seguros. Queremos que un fueguino pueda asegurar su auto, su casa o su negocio con la confianza de que tiene al Banco de su provincia detrás."
              </blockquote>

              <p>Con este relanzamiento, BTF Seguros se consolida como una pieza central en la estrategia de servicios del Banco, respaldando a empresas, organismos públicos y particulares con una gestión de riesgos profesional, ágil y profundamente arraigada en la realidad de la provincia.</p>

              {/* Galería dinámica para el resto de las imágenes */}
              {imagenesNota.length > 2 && (
                <div className="mt-12 pt-8 border-t border-border">
                  <h4 className="text-2xl font-bold text-foreground mb-6">Galería de imágenes</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {imagenesNota.slice(2).map((img, idx) => (
                      <img key={idx} src={img} alt={`Galería convenio BTF ${idx + 1}`} className="w-full h-64 rounded-xl shadow-md object-cover hover:scale-[1.02] transition-transform" loading="lazy" />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : id === "lanzamiento-terra-ignis" ? (
            <div className="space-y-6 text-foreground/80 leading-relaxed text-lg">
              <p className="font-medium text-xl text-foreground mb-8">
                Desde la visión de una política estratégica orientada a fortalecer el desarrollo energético provincial, el Gobierno de la Provincia de Tierra del Fuego AIAS realizó el lanzamiento de Terra Ignis Energía S.A y presentó el acuerdo operativo con Velitec S.A. para explotar los pozos petroleros cedidos por YPF.
              </p>

              <p>El acto fue encabezado por el presidente de Terra Ignis, Maximiliano D’Alessio, acompañado del vicepresidente de la compañía, Pablo Carreras Meyer; de la ministra de Energía, Gabriela Castillo; de la gerente Legal e Institucional, Verónica Tito; del representante de Velitec S.A., Francisco Araoz; y del asesor ambiental, Sergio Federovisky. Asimismo, participaron autoridades provinciales y municipales, integrantes de los Concejos Deliberantes de Río Grande y Tolhuin, representantes del sector energético, de la Cámara de Comercio, sindicatos, empresarios, trabajadores, medios de comunicación y miembros de la comunidad.</p>

              <p>Cabe destacar el carácter fundacional de esta iniciativa que marca el inicio de una etapa concreta de gestión, producción e inversión para la provincia, consolidando herramientas propias para la administración de sus recursos naturales.</p>

              {/* Intercalamos la primera imagen (si existe) */}
              {imagenesNota[0] && (
                <img src={imagenesNota[0]} alt="Lanzamiento de Terra Ignis y acuerdo con Velitec" className="w-full rounded-xl my-10 shadow-md object-cover" />
              )}

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">El desafío de edificar una empresa estatal</h3>
              
              <blockquote className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg italic text-foreground font-medium my-8">
                “Agradecemos a nuestro gobernador, Gustavo Melella, quien nos dio la misión de llevar adelante una visión que él tuvo desde el inicio de la primera gestión. Cuando llegó, él marcó claramente la necesidad de armar una empresa provincial de energía.”
                <span className="block mt-4 text-sm font-bold text-accent not-italic">— Maximiliano D’Alessio, Presidente de Terra Ignis</span>
              </blockquote>

              <p>Además, subrayó que mientras otras provincias patagónicas ya contaban con estructuras similares, Tierra del Fuego asumió el desafío de edificar una empresa desde sus cimientos. “Se nos dio el doble desafío de armar una empresa, ponerla en funcionamiento y entrar en una negociación ardua con YPF”, indicó.</p>

              <p>Asimismo, precisó que esta nueva etapa es el resultado de un extenso proceso de negociaciones con YPF, que había definido el retiro de los yacimientos para concentrar sus inversiones en Vaca Muerta.</p>

              <blockquote className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg italic text-foreground font-medium my-8">
                “Frente a este panorama se nos presentaron dos opciones muy claras. Una era ver cómo se apagaba el yacimiento, y en función de eso, entrar el día después a ver qué se podía hacer. La segunda fue la que nuestro Gobernador nos marcó claramente, seguir, hacer una cesión y una continuidad operativa de lo que está en el yacimiento. A partir de esa definición política, se inició un proceso de negociación que se extendió durante más de un año y medio, caracterizado por su alta complejidad técnica y jurídica.”
              </blockquote>

              {/* Intercalamos la segunda imagen (si existe) */}
              {imagenesNota[1] && (
                <img src={imagenesNota[1]} alt="Autoridades presentes en el lanzamiento" className="w-full rounded-xl my-10 shadow-md object-cover" />
              )}

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Soberanía energética y cuidado ambiental</h3>

              <p>Al culminar las negociaciones "limitamos dos grandes áreas de trabajo", señaló y profundizó: "Por un lado, el cuidado ambiental, así como reinsertar esquemas de trabajo nuevos, empresas que se ocuparán de esto, y por otro lado, el fortalecimiento de la soberanía energética como eje central de la política provincial”.</p>

              <blockquote className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg italic text-foreground font-medium my-8">
                “Mantener soberanía energética significa que la provincia empiece a estar en la mesa de decisiones de qué se hace con el gas y qué se hace con el petróleo, y no estar desde el costado solo como unidad de control. Es una clara medida de recuperación de la soberanía energética, con una mirada ambiental y con el otro ojo puesto en mantener y multiplicar los puestos de trabajo.”
              </blockquote>

              <p>Finalmente, D’Alessio expresó: “Nosotros cerramos esta primera etapa con estos compromisos, ahora empieza una nueva, que es la etapa de Velitec como operador, y en un breve período de tiempo ya el lanzamiento de la nueva UTE”.</p>

              {/* Galería dinámica para el resto de las imágenes */}
              {imagenesNota.length > 2 && (
                <div className="mt-12 pt-8 border-t border-border">
                  <h4 className="text-2xl font-bold text-foreground mb-6">Galería de imágenes</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {imagenesNota.slice(2).map((img, idx) => (
                      <img key={idx} src={img} alt={`Galería lanzamiento ${idx + 1}`} className="w-full h-64 rounded-xl shadow-md object-cover hover:scale-[1.02] transition-transform" loading="lazy" />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : id === "nueva-etapa-energetica" ? (
            <div className="space-y-6 text-foreground/80 leading-relaxed text-lg">
              <p className="font-medium text-xl text-foreground mb-8">
                La empresa provincial avanza en la consolidación de un modelo energético con participación estatal y operadores privados, garantizando la continuidad productiva en áreas hidrocarburíferas y poniendo en marcha un plan ambiental integral enfocado en la remediación de pasivos históricos.
              </p>

              <p>La provincia de Tierra del Fuego avanza en la consolidación de una nueva etapa en su desarrollo energético a partir del proceso de cesión de áreas hidrocarburíferas y la incorporación de un nuevo operador que permita sostener la producción, recuperar niveles de actividad y proyectar nuevas inversiones en el sector.</p>

              <blockquote className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg italic text-foreground font-medium my-8">
                “Esto no es un final, sino el principio de una nueva etapa. Lejos de representar un cierre, el proceso marca un punto de inflexión.”
                <span className="block mt-4 text-sm font-bold text-accent not-italic">— Verónica Tito, Gerenta Legal e Institucional de Terra Ignis</span>
              </blockquote>

              {/* Intercalamos la primera imagen (si existe) */}
              {imagenesNota[0] && (
                <img src={imagenesNota[0]} alt="Nueva etapa energética en Tierra del Fuego" className="w-full rounded-xl my-10 shadow-md object-cover" />
              )}

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Un proceso de selección con criterios técnicos, financieros y productivos</h3>

              <p>El punto de partida fue la firma del contrato de cesión con YPF, de las áreas Lago Fuego, Los Chorrillos y Tierra del Fuego, aprobado por la Legislatura provincial junto con la prórroga de las concesiones por diez años, extendiendo su horizonte hasta 2037.</p>
              
              <p>A partir de ese momento, Terra Ignis inició un proceso de búsqueda de operadores y socios estratégicos con el objetivo de garantizar la continuidad de la actividad en un contexto marcado por la desinversión y el declino natural de las áreas convencionales.</p>

              <blockquote className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg italic text-foreground font-medium my-8">
                “Se había producido una desinversión en estas áreas que, sumada al declino natural, generaba cada vez menos producción”, explicó Tito, al justificar la necesidad de avanzar rápidamente en la selección de un operador.
              </blockquote>

              <p>El proceso comenzó en enero y convocó diez empresas y grupos inversores, que fueron evaluados a partir de múltiples variables: antecedentes técnicos, capacidad financiera, experiencia en la industria y, especialmente, propuestas de inversión y desarrollo.</p>

              <p>El universo de interesados incluyó desde empresas con trayectoria en cuencas convencionales hasta nuevos actores surgidos en el contexto de reconfiguración del sector hidrocarburífero argentino. La selección final se definió en base a un criterio central: la capacidad de sostener la actividad, recuperar producción e impulsar nuevas inversiones.</p>

              <blockquote className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg italic text-foreground font-medium my-8">
                “La intención es sostener la producción, pero también incrementarla en el tiempo, desarrollando el potencial que hoy no está siendo plenamente aprovechado.”
              </blockquote>

              {/* Intercalamos la segunda imagen (si existe) */}
              {imagenesNota[1] && (
                <img src={imagenesNota[1]} alt="Operaciones y evaluación técnica" className="w-full rounded-xl my-10 shadow-md object-cover" />
              )}

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Velitec: continuidad operativa, inversión y modelo asociativo</h3>

              <p>En ese marco, Terra Ignis firmó un acuerdo con Velitec S.A., que asumirá la operación de las áreas en una primera etapa transitoria, mientras se termina de estructurar la Unión Transitoria de Empresas (UTE) que regirá el esquema de largo plazo. El contrato inicial prevé un período operativo acotado que permite garantizar la continuidad inmediata de la producción mientras se consolidan los aspectos contractuales definitivos.</p>

              <blockquote className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg italic text-foreground font-medium my-8">
                “Era fundamental que la operación se iniciara rápidamente para no perder nivel de actividad.”
              </blockquote>

              <p>Velitec es una empresa argentina con trayectoria en servicios de perforación, mantenimiento e intervención de pozos en la industria del petróleo y la minería, con presencia en distintas cuencas productivas del país, incluyendo Mendoza, Salta, Neuquén y Chubut. La compañía se especializa en el desarrollo de soluciones operativas, ingeniería y provisión de equipos, con experiencia en proyectos vinculados tanto a hidrocarburos como a litio, incluyendo perforación, recuperación de pozos y obras asociadas a infraestructura energética.</p>

              <p>Uno de los aspectos centrales del acuerdo es la continuidad laboral. Velitec incorporará al personal proveniente de YPF vinculado a las áreas, asegurando la preservación del empleo y la transferencia de conocimiento operativo.</p>

              <blockquote className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg italic text-foreground font-medium my-8">
                “El sostenimiento de la actividad y del trabajo es un eje indispensable en este proceso. Este es un modelo dinámico, que puede incorporar nuevos actores a medida que se avance en el desarrollo de las áreas.”
              </blockquote>

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Plan ambiental y remediación de pasivos</h3>

              <p>En paralelo, la Empresa avanza en un plan integral de remediación ambiental asociado a la actividad hidrocarburífera, que actualmente se desarrolla en dos etapas.</p>

              <p>En una primera etapa, se lleva adelante el cierre técnico de pozos que han cumplido su vida útil y no presentan productividad, mediante procedimientos controlados que garantizan su sellado definitivo y condiciones ambientales seguras. Estas tareas forman parte de una estrategia de ordenamiento productivo, que permite concentrar recursos en aquellos yacimientos con potencial.</p>

              <p>En este marco, la Secretaría de Hidrocarburos supervisa un proceso planificado de abandono de pozos, que incluye tareas de punzado, cementación y verificación hasta su cierre en superficie, asegurando que queden completamente aislados y en condiciones ambientales adecuadas.</p>

              <p>Cuando un pozo deja de ser productivo, no puede permanecer inactivo sin control, ya que su abandono forma parte del ciclo normal de la actividad y resulta necesario para asegurar su cierre adecuado, proteger el ambiente y concentrar los recursos en aquellos yacimientos que aún presentan potencial. El plan contempla el cierre de 107 pozos sin productividad, en un esquema que se desarrolla en paralelo con la evaluación y reactivación de otros que aún presentan posibilidades de mejora productiva.</p>

              <p>En una segunda etapa, se avanzará en la remediación de pasivos ambientales históricos. El asesor ambiental de Terra Ignis, Sergio Federovisky, explicó que ya se ha realizado la identificación y valorización de estos pasivos, junto con la definición de los procesos tecnológicos necesarios para su tratamiento y la identificación de las empresas que llevarán adelante estos trabajos.</p>

              <blockquote className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg italic text-foreground font-medium my-8">
                “Ya estamos en condiciones de iniciar muy prontamente la remediación de los pasivos ambientales, con un dato central que es la decisión de construir un relleno de seguridad para el tratamiento de aquellos residuos que no puedan ser gestionados por otras vías.”
                <span className="block mt-4 text-sm font-bold text-accent not-italic">— Sergio Federovisky, Asesor Ambiental</span>
              </blockquote>

              <p>Esta infraestructura permitirá a la Provincia contar con un sistema propio para el tratamiento de residuos derivados de la actividad hidrocarburífera, consolidando un enfoque integral que combina producción, control y responsabilidad ambiental.</p>

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Una nueva etapa para el desarrollo energético provincial</h3>

              <p>El proceso en marcha no solo apunta a garantizar la continuidad operativa de las áreas existentes, sino también a sentar las bases para una nueva etapa de desarrollo energético en la provincia.</p>

              <blockquote className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg italic text-foreground font-medium my-8">
                “Se trata de maximizar el desarrollo de los recursos y atraer inversiones para sostener una actividad que es clave para la provincia”, concluyó Tito.
              </blockquote>

              <p>En ese horizonte, se contemplan nuevas oportunidades tanto en áreas en producción como en proyectos de exploración, consolidando un modelo que articula soberanía energética, desarrollo productivo y responsabilidad ambiental.</p>

              {/* Galería dinámica para el resto de las imágenes */}
              {imagenesNota.length > 2 && (
                <div className="mt-12 pt-8 border-t border-border">
                  <h4 className="text-2xl font-bold text-foreground mb-6">Galería de imágenes</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {imagenesNota.slice(2).map((img, idx) => (
                      <img key={idx} src={img} alt={`Galería nueva etapa ${idx + 1}`} className="w-full h-64 rounded-xl shadow-md object-cover hover:scale-[1.02] transition-transform" loading="lazy" />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : id === "programa-mipymes-cfi" ? (
            <div className="space-y-6 text-foreground/80 leading-relaxed text-lg">
              <p className="font-medium text-xl text-foreground mb-8">
                El Gobernador Gustavo Melella suscribió con el Consejo Federal de Inversiones (CFI), la adhesión al Programa de Desarrollo de Proveedores y dos convenios específicos para fortalecer a las MiPyMEs locales, en esta oportunidad con sectores acuícola e hidrocarburífero, con ejes en capacitación técnica y financiamiento productivo.
              </p>

              <p>La rúbrica se realizó en la Ciudad Autónoma de Buenos Aires, junto al titular del CFI, Ignacio Lamothe; el presidente de Terra Ignis, Maximiliano D'Alessio y el Director y socio de Newsan Food, Miguel Glikman. Estas acciones forman parte del Plan Estratégico para el Desarrollo Acuícola y del nuevo impulso fueguino que lleva adelante el Gobierno de Tierra del Fuego.</p>

              {/* Intercalamos la primera imagen (si existe) */}
              {imagenesNota[0] && (
                <img src={imagenesNota[0]} alt="Firma del convenio con el CFI" className="w-full rounded-xl my-10 shadow-md object-cover" />
              )}

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Empresas núcleo y desarrollo local</h3>

              <p>En el marco de este acuerdo, se firmaron dos convenios específicos con empresas núcleo. En esta primera instancia, con Newsan, para el desarrollo de proveedores locales en el sector acuícola. Y con Terra Ignis, empresa con capitales estatales provinciales, que se convierte en la primera empresa pública en integrar un proyecto de esta naturaleza, para el fortalecimiento de proveedores del sector hidrocarburífero.</p>

              <p>El programa tiene por objetivo central sustituir proveedores externos por locales, generando empleo y arraigo en la provincia. Se estructura en dos ejes fundamentales:</p>

              <ul className="list-disc pl-6 space-y-3 mb-6">
                <li><strong className="text-foreground">Capacitación técnica y financiera:</strong> Asesoramiento integral para que las MiPyMEs accedan a herramientas bancarias, garantías y mercado de capitales.</li>
                <li><strong className="text-foreground">Financiamiento productivo:</strong> El CFI destinará fondos específicos con tasas competitivas, administrados por el Fondo Federal de Inversiones, a través de la Línea Triple Impacto.</li>
              </ul>

              <blockquote className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg italic text-foreground font-medium my-8">
                "Este programa es estratégico porque pone a Tierra del Fuego como provincia exportadora, genera trabajo y trae inversión privada real en un momento muy complicado para el país. El trabajo es soberanía."
              </blockquote>

              {/* Intercalamos la segunda imagen (si existe) */}
              {imagenesNota[1] && (
                <img src={imagenesNota[1]} alt="Autoridades en la firma del convenio" className="w-full rounded-xl my-10 shadow-md object-cover" />
              )}

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Articulación productiva y ejecución</h3>

              <p>El modelo consiste en articular el desarrollo desde una empresa ya instalada (Newsan y Terra Ignis) para que, a partir de sus necesidades, se capacite y financie a proveedores fueguinos. De esta manera, se busca reemplazar insumos y servicios que actualmente se adquieren fuera de la provincia.</p>

              <p>Se conformará un Comité Técnico paritario entre la Provincia y el CFI, encargado de seleccionar las firmas proveedoras beneficiarias y supervisar la ejecución. El convenio tiene vigencia inicial hasta el 31 de diciembre de 2026, con renovación automática anual.</p>

              <p>Con esta iniciativa, Tierra del Fuego da un paso clave en su Plan Estratégico de Desarrollo Acuícola y en la ampliación de su matriz productiva, apostando a la sustitución de importaciones de proveedores y al fortalecimiento del tejido de MiPyMEs locales.</p>

              {/* Galería dinámica para el resto de las imágenes */}
              {imagenesNota.length > 2 && (
                <div className="mt-12 pt-8 border-t border-border">
                  <h4 className="text-2xl font-bold text-foreground mb-6">Galería de imágenes</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {imagenesNota.slice(2).map((img, idx) => (
                      <img key={idx} src={img} alt={`Galería convenio CFI ${idx + 1}`} className="w-full h-64 rounded-xl shadow-md object-cover hover:scale-[1.02] transition-transform" loading="lazy" />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : id === "maximizar-potencial" ? (
            <div className="space-y-6 text-foreground/80 leading-relaxed text-lg">
              <p className="font-medium text-xl text-foreground mb-8">
                Tras la reciente firma del contrato con la empresa Velitec S.A., la gerente Legal e Institucional de Terra Ignis, Verónica Tito, brindó precisiones sobre el proceso técnico y administrativo que permitirá a la provincia retomar la operatividad plena de las áreas Lago Fuego, Los Chorrillos y Tierra del Fuego.
              </p>

              <p>En relación con el camino recorrido para la selección del nuevo operador, Tito explicó que, tras la salida de YPF de la actividad convencional, se llevó adelante una instancia de preselección.</p>

              <blockquote className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg italic text-foreground font-medium my-8">
                “En un principio fueron aproximadamente 10 empresas o grupos de inversores interesados, que se fueron descartando por idoneidad técnica, antecedentes y capacidad financiera”
                <span className="block mt-4 text-sm font-bold text-accent not-italic">— Verónica Tito, Gerenta Legal e Institucional</span>
              </blockquote>

              {/* Mostramos la imagen asignada */}
              {imagenesNota[0] && (
                <img src={imagenesNota[0]} alt="Maximizar potencial productivo" className="w-full rounded-xl my-10 shadow-md object-cover" />
              )}

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Análisis riguroso y optimización</h3>

              <p>La funcionaria destacó que la elección de Velitec S.A. surgió de un riguroso análisis realizado por profesionales especializados en aspectos financieros, operativos y legales. En ese marco, precisó que se evaluaron en profundidad los antecedentes, las ofertas técnicas y los planes de inversión de cada empresa.</p>

              <blockquote className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg italic text-foreground font-medium my-8">
                “Se tuvo en cuenta qué proponía cada una en el área”, afirmó, y subrayó que el objetivo central de esta nueva etapa es incrementar los niveles de producción.
              </blockquote>

              <p>Respecto de la trayectoria de la firma seleccionada, Tito indicó que Velitec cuenta con experiencia comprobada en las provincias de Mendoza, Salta y Neuquén. Según explicó, estos antecedentes, sumados a la propuesta de desarrollo e inversión y al compromiso con la continuidad de la actividad, resultaron determinantes para su elección. En particular, remarcó la importancia de optimizar pozos que actualmente no se encuentran en su máximo potencial.</p>

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Plazos y continuidad laboral</h3>

              <p>En cuanto a los plazos, la gerente confirmó que el traspaso operativo es inminente y que las operaciones comenzarán el próximo 1 de mayo. Además, señaló que la empresa asumirá la totalidad del personal fijo, compuesto por aproximadamente 26 trabajadores, en el marco del acuerdo de cesión.</p>

              <p>Sobre la duración del vínculo contractual, explicó que se trata de un acuerdo inicial de tres meses, con posibilidad de prórroga mientras se avanza en la conformación de una Unión Transitoria de Empresas (UTE).</p>

              <blockquote className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg italic text-foreground font-medium my-8">
                “La intención es firmar finalmente el contrato de UTE para que esto esté culminado desde el punto de vista contractual. La UTE aspira a acompañar el plazo por el cual Terra Ignis es titular de estas áreas, que en principio es hasta 2037”
              </blockquote>

              <p>Por otra parte, Tito destacó el compromiso ambiental asumido en esta nueva etapa, e informó que ya se puso en marcha un plan de remediación de pasivos ambientales de manera inmediata en los yacimientos.</p>

              <p>La reactivación de la actividad hidrocarburífera provincial tendrá su presentación oficial el próximo 15 de abril, con un acto en la ciudad de Río Grande, donde se anunciará formalmente el inicio de las operaciones de Terra Ignis a través de Velitec.</p>
            </div>
          ) : id === "informe-pasivos-ambientales" ? (
            <div className="space-y-6 text-foreground/80 leading-relaxed text-lg">
              <p className="font-medium text-xl text-foreground mb-8">
                El asesor ambiental de Terra Ignis, Sergio Federovisky, presentó en una reunión con la ministra de Energía de la provincia, Gabriela Castillo, y equipos técnicos de las áreas de Energía, Hidrocarburos y Ambiente, los resultados de los estudios realizados para identificar, cuantificar y valorizar los pasivos ambientales derivados de la actividad petrolera en Tierra del Fuego.
              </p>

              {/* Intercalamos la primera imagen (si existe) */}
              {imagenesNota[0] && (
                <img src={imagenesNota[0]} alt="Presentación del informe sobre pasivos ambientales" className="w-full rounded-xl my-10 shadow-md object-cover" />
              )}

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Estudios y valorización</h3>

              <p>Durante el encuentro, el especialista explicó que los trabajos se realizaron a partir de dos estudios financiados por la provincia a través del Consejo Federal de Inversiones.</p>

              <blockquote className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg italic text-foreground font-medium my-8">
                “Uno de ellos permitió identificar los pasivos ambientales de los activos que YPF cedió a la provincia, para que Tierra del Fuego cuente con elementos concretos para negociar la indemnización destinada al tratamiento y remediación de esos pasivos”
                <span className="block mt-4 text-sm font-bold text-accent not-italic">— Sergio Federovisky, Asesor Ambiental</span>
              </blockquote>

              <p>Federovisky indicó además que también se realizó un relevamiento del resto de la industria petrolera que opera en la provincia.</p>

              <blockquote className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg italic text-foreground font-medium my-8">
                “Como resultado de estos trabajos sabemos que será necesario realizar inversiones para revertir y remediar los pasivos ambientales que ha dejado la actividad petrolera a lo largo del tiempo”
              </blockquote>

              {/* Intercalamos la segunda imagen (si existe) */}
              {imagenesNota[1] && (
                <img src={imagenesNota[1]} alt="Reunión de equipos técnicos" className="w-full rounded-xl my-10 shadow-md object-cover" />
              )}

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Desarrollo sustentable y remediación</h3>

              <p>Asimismo, remarcó que “el compromiso del Gobernador y de Terra Ignis es avanzar en el desarrollo hidrocarburífero con una línea de base ambiental clara y con políticas que eviten la generación de nuevos pasivos y permitan remediar los existentes”.</p>

              <p>Finalmente, adelantó que se convocó a un concurso para definir políticas de tratamiento de estos pasivos ambientales y avanzar en la construcción de un relleno de seguridad en la provincia, infraestructura clave para el tratamiento de residuos petroleros y el proceso de remediación.</p>

              {/* Galería dinámica para el resto de las imágenes */}
              {imagenesNota.length > 2 && (
                <div className="mt-12 pt-8 border-t border-border">
                  <h4 className="text-2xl font-bold text-foreground mb-6">Galería de imágenes</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {imagenesNota.slice(2).map((img, idx) => (
                      <img key={idx} src={img} alt={`Galería informe pasivos ${idx + 1}`} className="w-full h-64 rounded-xl shadow-md object-cover hover:scale-[1.02] transition-transform" loading="lazy" />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-6 text-foreground/80 leading-relaxed text-lg">
              <p className="font-medium text-foreground">{noticia.summary}</p>
              <p className="italic text-muted-foreground mt-8">El desarrollo completo de esta nota estará disponible próximamente...</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default NoticiaSingle;
