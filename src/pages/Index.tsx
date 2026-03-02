import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import heroImg from "@/assets/hero-welding.jpg";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const { t } = useLanguage();

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <img
          src={heroImg}
          alt="Veloso Industrial - Soldadura profesional"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative container mx-auto px-4 lg:px-8 py-20">
          <div className="max-w-2xl animate-fade-in-up">
            <p className="font-heading text-sm uppercase tracking-[0.3em] text-spark mb-4">
              {t.hero.subtitle}
            </p>
            <h1 className="font-heading text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-base lg:text-lg text-secondary-foreground leading-relaxed mb-8 max-w-xl">
              {t.hero.description}
            </p>
            <Link
              to="/servicios"
              className="inline-flex items-center gap-2 bg-spark hover:bg-spark-glow text-primary-foreground font-heading uppercase tracking-wider text-sm px-8 py-4 rounded transition-all shadow-spark hover:shadow-lg"
            >
              {t.hero.cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
