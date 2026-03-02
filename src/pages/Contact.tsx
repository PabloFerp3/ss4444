import { useState, FormEvent } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const schema = z.object({
    name: z.string().trim().min(1).max(100),
    email: z.string().trim().email().max(255),
    message: z.string().trim().min(1).max(2000),
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast({ title: t.contact.error, variant: "destructive" });
      return;
    }

    setSending(true);
    const mailto = `mailto:info.talleresveloso@gmail.com?subject=Contacto de ${encodeURIComponent(result.data.name)}&body=${encodeURIComponent(
      `Nombre: ${result.data.name}\nEmail: ${result.data.email}\n\n${result.data.message}`
    )}`;
    window.open(mailto, "_blank");
    toast({ title: t.contact.success });
    setForm({ name: "", email: "", message: "" });
    setSending(false);
  };

  return (
    <main className="bg-background">
      {/* Title */}
      <section className="bg-steel-gradient py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-primary-foreground text-center">
            {t.contact.title}
          </h1>
          <div className="w-20 h-1 bg-spark mx-auto mt-4 rounded-full" />
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-spark/10 flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-spark" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                  {t.footer.location.split(",")[0]}
                </h3>
                <p className="text-muted-foreground text-sm">{t.footer.location}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-spark/10 flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5 text-spark" />
              </div>
              <div>
                <a href="tel:+34623258421" className="font-heading text-lg font-semibold text-foreground hover:text-spark transition-colors">
                  +34 {t.footer.phone}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-spark/10 flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5 text-spark" />
              </div>
              <div>
                <a href="mailto:info.talleresveloso@gmail.com" className="font-heading text-lg font-semibold text-foreground hover:text-spark transition-colors">
                  {t.footer.email}
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-card rounded-lg shadow-lg p-8 space-y-6 border border-border">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                {t.contact.name}
              </label>
              <input
                id="name"
                type="text"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder={t.contact.namePlaceholder}
                className="w-full px-4 py-3 rounded border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                {t.contact.email}
              </label>
              <input
                id="email"
                type="email"
                required
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder={t.contact.emailPlaceholder}
                className="w-full px-4 py-3 rounded border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                {t.contact.message}
              </label>
              <textarea
                id="message"
                required
                maxLength={2000}
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder={t.contact.messagePlaceholder}
                className="w-full px-4 py-3 rounded border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full inline-flex items-center justify-center gap-2 bg-spark hover:bg-spark-glow text-primary-foreground font-heading uppercase tracking-wider text-sm px-8 py-4 rounded transition-all shadow-spark hover:shadow-lg disabled:opacity-50"
            >
              <Send className="h-4 w-4" />
              {t.contact.send}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
