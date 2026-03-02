import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { Lang, langLabels } from "@/i18n/translations";
import { Menu, X, Globe } from "lucide-react";

const Header = () => {
  const { t, lang, setLang } = useLanguage();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const links = [
    { to: "/", label: t.nav.home },
    { to: "/servicios", label: t.nav.services },
    { to: "/contacto", label: t.nav.contact },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-steel-gradient border-b border-steel-light">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="font-heading text-2xl font-bold tracking-wider text-primary-foreground">
            VELOSO<span className="text-gradient-spark"> INDUSTRIAL</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2 font-heading text-sm uppercase tracking-widest transition-colors ${
                isActive(link.to)
                  ? "text-spark"
                  : "text-secondary-foreground hover:text-spark-glow"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Language selector */}
          <div className="relative ml-4">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 px-3 py-2 text-sm text-secondary-foreground hover:text-spark-glow transition-colors"
            >
              <Globe className="h-4 w-4" />
              {langLabels[lang]}
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-1 bg-steel-light rounded shadow-lg border border-steel-lighter min-w-[80px] overflow-hidden">
                {(Object.keys(langLabels) as Lang[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); setLangOpen(false); }}
                    className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                      l === lang ? "text-spark bg-steel" : "text-secondary-foreground hover:bg-steel hover:text-spark-glow"
                    }`}
                  >
                    {langLabels[l]}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-secondary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="md:hidden bg-steel border-t border-steel-light">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`block px-6 py-3 font-heading text-sm uppercase tracking-widest ${
                isActive(link.to) ? "text-spark" : "text-secondary-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-2 px-6 py-3">
            {(Object.keys(langLabels) as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => { setLang(l); setMobileOpen(false); }}
                className={`px-3 py-1 text-xs rounded ${
                  l === lang ? "bg-spark text-primary-foreground" : "text-secondary-foreground border border-steel-lighter"
                }`}
              >
                {langLabels[l]}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
