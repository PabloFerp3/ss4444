import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-steel-gradient border-t border-steel-light">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-xl font-bold text-primary-foreground mb-3">
              VELOSO<span className="text-gradient-spark"> INDUSTRIAL</span>
            </h3>
            <p className="text-sm text-steel-lighter leading-relaxed">
              © {new Date().getFullYear()} Veloso Industrial. {t.footer.rights}
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <div className="flex items-start gap-3 text-sm text-secondary-foreground">
              <MapPin className="h-4 w-4 mt-0.5 text-spark shrink-0" />
              <span>{t.footer.location}</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-secondary-foreground">
              <Phone className="h-4 w-4 text-spark shrink-0" />
              <a href="tel:+34623258421" className="hover:text-spark-glow transition-colors">{t.footer.phone}</a>
            </div>
            <div className="flex items-center gap-3 text-sm text-secondary-foreground">
              <Mail className="h-4 w-4 text-spark shrink-0" />
              <a href="mailto:info.talleresveloso@gmail.com" className="hover:text-spark-glow transition-colors">{t.footer.email}</a>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-2">
            <Link to="/privacidad" className="block text-sm text-secondary-foreground hover:text-spark-glow transition-colors">
              {t.footer.privacy}
            </Link>
            <Link to="/privacidad#cookies" className="block text-sm text-secondary-foreground hover:text-spark-glow transition-colors">
              {t.footer.cookies}
            </Link>
            <Link to="/privacidad#legal" className="block text-sm text-secondary-foreground hover:text-spark-glow transition-colors">
              {t.footer.legal}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
