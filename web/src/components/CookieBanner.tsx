"use client";

import { useEffect, useState } from "react";


const KEY = "baldo_cookie_banner_dismissed";

export default function CookieBanner() {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (!sessionStorage.getItem(KEY)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setHidden(false);
    }
  }, []);

  const close = () => {
    setHidden(true);
    sessionStorage.setItem(KEY, "1");
  };

  return (
    <div
      className="cookie-banner"
      id="cookie-banner"
      role="dialog"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-desc"
      aria-modal="true"
      hidden={hidden}
    >
      <div className="cookie-banner__panel">
        <h2 className="cookie-banner__title" id="cookie-title">
          Cookie e privacy
        </h2>
        <p className="cookie-banner__text" id="cookie-desc">
          Questa e&apos; una versione in anteprima: il banner e&apos; pronto per essere collegato alla
          policy ufficiale e agli strumenti di consenso (es. analytics) nella fase di pubblicazione.
        </p>
        <div className="cookie-banner__actions">
          <button type="button" className="btn" id="cookie-customize" disabled>
            Personalizza
          </button>
          <button type="button" className="btn" id="cookie-reject" onClick={close}>
            Rifiuta
          </button>
          <button type="button" className="btn btn--primary" id="cookie-accept" onClick={close}>
            Accetta (chiudi)
          </button>
        </div>
        <p className="cookie-banner__fine">
          <a href="/it/privacy/cookie/">Informativa cookie</a> · <a href="/it/privacy/privacy/">Privacy</a>
        </p>
      </div>
    </div>
  );
}
