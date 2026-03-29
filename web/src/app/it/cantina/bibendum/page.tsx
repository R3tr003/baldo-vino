import BaseLayout from '@/components/BaseLayout';
import PageIntro from '@/components/PageIntro';
import WineCatalog from '@/components/WineCatalog';
import { winesBibendum as winesBibendumFallback } from '@/data/wines-bibendum';
import { images } from '@/data/assets';
import { client } from '@/lib/sanity';
import { winesBibendumQuery } from '@/lib/queries';
import type { Wine } from '@/types/wine';
import styles from './page.module.css';

async function getWines(): Promise<Wine[]> {
  if (!client) return winesBibendumFallback;
  try {
    const data = await client.fetch<Wine[]>(winesBibendumQuery);
    if (data && data.length > 0) return data;
  } catch {
    // Sanity non disponibile — uso fallback locale
  }
  return winesBibendumFallback;
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
    <BaseLayout title="Cantina — Bibendum">
      <main id="main">
        <PageIntro
          title="Cantina Bibendum"
          subtitle="Wine bar"
          lead="Una selezione dinamica, pensata per il ritmo del bistrot: calici, bottiglie e pairing agili ma ricercati."
        />

        <section
          className={`section__inner ${styles.details}`}
          aria-label="Identità della cantina Bibendum"
        >
          <article>
            <h2>Calice protagonista</h2>
            <p>
              Rotazione frequente per offrire una carta al calice viva, capace
              di accompagnare aperitivo, cena e after dinner.
            </p>
          </article>
          <article>
            <h2>Abbinamenti bistrot</h2>
            <p>
              Selezione orientata alla convivialit&agrave;: etichette versatili,
              beva precisa e pairing immediato con la cucina Bibendum.
            </p>
          </article>
        </section>

        <WineCatalog wines={wines} />

        <div className={`section__inner ${styles.note}`}>
          <p>
            La carta completa verr&agrave; finalizzata con aggiornamento
            editoriale periodico, mantenendo la coerenza con lo stile della sala.
          </p>
          <div className={styles.noteActions}>
            <a className="btn btn--primary" href="/it/bibendum/bibendum/">
              Il bistrot
            </a>
            <a className="btn" href="/it/contatti/contatti/">
              Contattaci
            </a>
          </div>
        </div>
      </main>
    </BaseLayout>
  );
}
