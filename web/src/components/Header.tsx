"use client";

import { useEffect, useState } from "react";
import { overlayMenuLinks, quickLinks } from "@/data/nav";
import { images } from "@/data/assets";


export default function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);
  const toggleMenu = () => setOpen((prev) => !prev);

  useEffect(() => {
    document.documentElement.classList.toggle("no-scroll", open);
    return () => document.documentElement.classList.remove("no-scroll");
  }, [open]);

  useEffect(() => {
    const onKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKeydown);
    return () => document.removeEventListener("keydown", onKeydown);
  }, []);

  return (
    <>
      <header className="site-header">
        <div className="site-header__inner">
          <div className="site-header__bar">
            <a className="site-header__brand" href="/it/" aria-label="Baldo Vino — Home">
              <img src={images.navMark} alt="Baldo Vino" width="120" height="120" loading="eager" style={{ height: '48px', width: 'auto', filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.25))' }} />
            </a>

            <nav className="site-header__quick" aria-label="Accesso rapido">
              {quickLinks.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="site-header__actions">
              <a className="btn btn--primary site-header__cta" href="#prenota">
                Prenota
              </a>
              <button
                type="button"
                className={`site-header__toggle ${open ? "is-open" : ""}`}
                aria-expanded={open}
                aria-controls="site-nav-overlay"
                id="nav-toggle"
                onClick={toggleMenu}
              >
                <span className="sr-only">Apri menu</span>
                <span className="site-header__hamburger" aria-hidden="true"></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <aside
        className={`site-nav-overlay ${open ? "site-nav-overlay--open" : ""}`}
        id="site-nav-overlay"
        aria-hidden={!open}
        aria-label="Navigazione principale"
        onClick={(e) => {
          if (e.target === e.currentTarget) closeMenu();
        }}
      >
        <button type="button" className="site-nav-overlay__close" id="nav-close" onClick={closeMenu}>
          <span className="sr-only">Chiudi menu</span>
          <span aria-hidden="true">×</span>
        </button>

        <div className="site-nav-overlay__inner">
          <p className="site-nav-overlay__label">Navigazione</p>
          <nav className="site-nav-overlay__menu" aria-label="Voci principali">
            {overlayMenuLinks.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
          </nav>
          <p className="site-nav-overlay__note">Baldo Vino · Palazzo Cancellieri · Pistoia</p>
        </div>
      </aside>
    </>
  );
}
