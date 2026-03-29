import BaseLayout from '@/components/BaseLayout';
import PageIntro from '@/components/PageIntro';
import VenueShowcase from '@/components/VenueShowcase';
import { images } from '@/data/assets';
import { baldoVenuePage } from '@/data/venuePresentations';
import styles from './page.module.css';

export default function Page() {
  return (
    <BaseLayout title="Ristorante Baldo Vino">
      <main id="main">
        <PageIntro
          title="Ristorante Baldo Vino"
          subtitle="Enoteca — Ristorante gourmet a Pistoia"
          lead={baldoVenuePage.introLead}
          image={images.heroBaldo}
          imageAlt="Ristorante Baldo Vino — sala e tavoli"
        />

        {baldoVenuePage.chapters.map((chapter, index) => (
          <div key={`baldo-venue-${index}-${chapter.kicker}`}>
            {index > 0 && (
              <div className="section-divider" aria-hidden="true" />
            )}
            <VenueShowcase {...chapter} />
          </div>
        ))}


        <div className={`section__inner ${styles.venueCtaRow}`}>
          <a className="btn btn--primary" href="/it/menu/baldo-vino/">
            Vai al menù
          </a>
          <a className="btn" href="/it/cantina/baldo-vino/">
            Vai alla cantina
          </a>
        </div>
      </main>
    </BaseLayout>
  );
}
