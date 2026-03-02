import { useLanguage } from "@/i18n/LanguageContext";

const Privacy = () => {
  const { t } = useLanguage();

  const sections = [
    { title: t.privacy.responsible, text: t.privacy.responsibleText },
    { title: t.privacy.purpose, text: t.privacy.purposeText },
    { title: t.privacy.legitimation, text: t.privacy.legitimationText },
    { title: t.privacy.recipients, text: t.privacy.recipientsText },
    { title: t.privacy.rights, text: t.privacy.rightsText },
    { title: t.privacy.retention, text: t.privacy.retentionText },
    { title: t.privacy.cookies, text: t.privacy.cookiesText, id: "cookies" },
    { title: t.privacy.legal, text: t.privacy.legalText, id: "legal" },
  ];

  return (
    <main className="bg-background">
      <section className="bg-steel-gradient py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-primary-foreground text-center">
            {t.privacy.title}
          </h1>
          <div className="w-20 h-1 bg-spark mx-auto mt-4 rounded-full" />
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 py-16 max-w-3xl">
        <p className="text-muted-foreground mb-10 leading-relaxed">{t.privacy.intro}</p>

        <div className="space-y-8">
          {sections.map((s) => (
            <div key={s.title} id={s.id}>
              <h2 className="font-heading text-xl font-bold text-foreground mb-2">{s.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Privacy;
