"use client";

import { useEffect, useRef, useState } from "react";

const navigationItems = [
  { id: "iniciativa", label: "Iniciativa" },
  { id: "portfolio", label: "Portfólio" },
  { id: "capacitacoes", label: "Capacitações" },
  { id: "pesquisa", label: "Pesquisa" },
  { id: "metodo", label: "Método FUN" },
];

const trackedSections = [...navigationItems, { id: "colabore", label: "Colabore" }];

export default function SiteHeader() {
  const [activeSection, setActiveSection] = useState("");
  const mobileMenu = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    let frameRequested = false;

    const updateActiveSection = () => {
      const readingLine = window.scrollY + window.innerHeight * 0.34;
      let nextSection = "";

      for (const item of trackedSections) {
        const section = document.getElementById(item.id);
        if (section && section.offsetTop <= readingLine) nextSection = item.id;
      }

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 12) {
        nextSection = "colabore";
      }

      setActiveSection((current) => (current === nextSection ? current : nextSection));
      frameRequested = false;
    };

    const requestUpdate = () => {
      if (frameRequested) return;
      frameRequested = true;
      window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  const closeMobileMenu = () => {
    if (mobileMenu.current) mobileMenu.current.open = false;
  };

  return (
    <header className="site-header">
      <div className="nav-shell">
        <a className="header-brand" href="#inicio" aria-label="FUNGames - início">
          <img className="brand-logo" src="/brand/fungames-logo.png" alt="FUNGames FUNCEME" width={1129} height={376} />
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navigationItems.map((item) => (
            <a
              className={activeSection === item.id ? "is-active" : undefined}
              href={`#${item.id}`}
              aria-current={activeSection === item.id ? "location" : undefined}
              key={item.id}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          className={`header-cta${activeSection === "colabore" ? " is-active" : ""}`}
          href="#colabore"
          aria-current={activeSection === "colabore" ? "location" : undefined}
        >
          Colabore
        </a>
        <details className="mobile-menu" ref={mobileMenu}>
          <summary aria-label="Abrir menu">Menu</summary>
          <nav aria-label="Navegação para celular">
            {trackedSections.map((item) => (
              <a
                className={activeSection === item.id ? "is-active" : undefined}
                href={`#${item.id}`}
                aria-current={activeSection === item.id ? "location" : undefined}
                onClick={closeMobileMenu}
                key={item.id}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
