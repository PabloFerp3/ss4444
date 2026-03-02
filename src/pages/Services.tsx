import { useLanguage } from "@/i18n/LanguageContext";
import weldingImg from "@/assets/service-welding.jpg";
import montajeImg from "@/assets/service-montaje.jpg";
import caldereriaImg from "@/assets/service-caldereria.jpg";
import reparacionesImg from "@/assets/service-reparaciones.jpg";

const services = [
  { key: "welding" as const, img: weldingImg },
  { key: "assembly" as const, img: montajeImg },
  { key: "boilermaking" as const, img: caldereriaImg },
  { key: "repairs" as const, img: reparacionesImg },
];

const Services = () => {
  const { t } = useLanguage();

  return (
    <main className="bg-background">
      {/* Title */}
      <section className="bg-steel-gradient py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-primary-foreground text-center">
            {t.services.title}
          </h1>
          <div className="w-20 h-1 bg-spark mx-auto mt-4 rounded-full" />
        </div>
      </section>

      {/* Services grid */}
      <section className="container mx-auto px-4 lg:px-8 py-16 space-y-20">
        {services.map((service, idx) => {
          const data = t.services[service.key];
          const reversed = idx % 2 !== 0;

          return (
            <div
              key={service.key}
              className={`flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-12 items-center`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2 overflow-hidden rounded-lg shadow-lg">
                <img
                  src={service.img}
                  alt={data.title}
                  className="w-full h-72 lg:h-96 object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Text */}
              <div className="w-full lg:w-1/2">
                <div className="w-12 h-1 bg-spark rounded-full mb-4" />
                <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  {data.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                  {data.desc}
                </p>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Services;
