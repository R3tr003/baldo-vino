import BaseLayout from '@/components/BaseLayout';
import PageIntro from '@/components/PageIntro';
import WineCatalog from '@/components/WineCatalog';
import { winesBaldo as winesBaldoFallback } from '@/data/wines-baldo';
import { images } from '@/data/assets';
import { client } from '@/lib/sanity';
import { winesBaldoQuery } from '@/lib/queries';
import type { Wine } from '@/types/wine';
import styles from './page.module.css';

async function getWines(): Promise<Wine[]> {
  if (!client) return winesBaldoFallback;
  try {
    const data = await client.fetch<Wine[]>(winesBaldoQuery);
    if (data && data.length > 0) return data;
  } catch {
    // Sanity non disponibile — uso fallback locale
  }
  return winesBaldoFallback;
}

export default async function Page(props: {
  searchParams: Promise<{ kiosk?: string }>;
}) {
  const searchParams = await props.searchParams;
  const isKiosk = searchParams.kiosk === '1';
  const wines = await getWines();

  if (isKiosk) {
    return (
      <main id="main">
        <WineCatalog
          wines={wines}
          isKiosk
          kioskLogo={images.navMark}
        />
      </main>
    );
  }

  return (
    <BaseLayout title="Cantina — Baldo Vino">
      <main id="main">
        <PageIntro
          title="Cantina Baldo Vino"
          subtitle="Oltre 3000 referenze"
          lead="Una cantina in continua evoluzione, costruita negli anni con ricerca costante, attenzione agli Champagne e ampiezza internazionale."
        />

        <div className={`section__inner ${styles.note}`}>
          <blockquote>
            &ldquo;La mia passione per il vino, e una ricerca continua, mi
            hanno portato a collezionare etichette provenienti da molti Paesi,
            con una particolare attenzione agli Champagne.&rdquo;
            &mdash;&nbsp;Francesco Balloni
          </blockquote>
        </div>

        <section
          className={`section__inner ${styles.pillars}`}
          aria-label="Punti chiave della cantina"
        >
          <article>
            <h2>Selezione</h2>
            <p>
              Verticalit&agrave;, annate e produttori iconici accanto a
              etichette da scoperta, con una curatela costante.
            </p>
          </article>
          <article>
            <h2>Abbinamento</h2>
            <p>
              Percorsi pensati per dialogare con la cucina, dal calice al
              pairing completo nei menu degustazione.
            </p>
          </article>
          <article>
            <h2>Servizio</h2>
            <p>
              Consulenza in sala e carta in aggiornamento continuo, per
              accompagnare ogni tavolo con precisione.
            </p>
          </article>
        </section>

        <WineCatalog wines={wines} />

        <div className={`section__inner ${styles.actions}`}>
          <a className="btn btn--primary" href="/it/baldo-vino/baldo-vino/">
            Il ristorante
          </a>
          <a className="btn" href="/it/contatti/contatti/">
            Contatta la sala
          </a>
        </div>
      </main>
    </BaseLayout>
  );
}
