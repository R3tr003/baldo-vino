import BaseLayout from '@/components/BaseLayout';
import PageIntro from '@/components/PageIntro';
import VenueShowcase from '@/components/VenueShowcase';
import { images } from '@/data/assets';
import { bibendumVenuePage } from '@/data/venuePresentations';
import styles from './page.module.css';

export default function Page() {
  return (
    <BaseLayout title="Bibendum — Bistrot">
      <main id="main">
        <PageIntro
          title="Bibendum"
          subtitle="Bistrot — Wine bar"
          lead={bibendumVenuePage.introLead}
          image={images.heroBibendum}
          imageAlt="Bibendum — wine bar e bistrot a Palazzo Cancellieri"
        />

        {bibendumVenuePage.chapters.map((chapter, index) => (
          <div key={`bibendum-venue-${index}-${chapter.kicker}`}>
            {index > 0 && (
              <div className="section-divider" aria-hidden="true" />
            )}
            <VenueShowcase {...chapter} />
          </div>
        ))}

        <div className={`section__inner ${styles.venueCtaRow}`}>
          <a className="btn btn--primary" href="/it/menu/bibendum/">
            Vai al menù
          </a>
          <a className="btn" href="/it/cantina/bibendum/">
            Vai alla cantina
          </a>
        </div>
      </main>
    </BaseLayout>
  );
}
