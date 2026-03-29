import BaseLayout from '@/components/BaseLayout';
import PageIntro from '@/components/PageIntro';
import VenueShowcase from '@/components/VenueShowcase';
import { images } from '@/data/assets';
import { bibendumVenuePage } from '@/data/venuePresentations';
import { client, urlFor } from '@/lib/sanity';
import { venuePageQuery } from '@/lib/queries';
import styles from './page.module.css';

async function getPageData() {
  if (!client) return null;
  try {
    return await client.fetch(venuePageQuery('bibendum'));
  } catch {
    return null;
  }
}

export default async function Page() {
  const sanityData = await getPageData();

  return (
    <BaseLayout title="Bibendum — Bistrot">
      <main id="main">
        <PageIntro
          title={sanityData?.title ?? "Bibendum"}
          subtitle={sanityData?.subtitle ?? "Bistrot — Wine bar"}
          lead={sanityData?.lead ?? bibendumVenuePage.introLead}
          image={sanityData?.heroImage ? urlFor(sanityData.heroImage).url() : images.heroBibendum}
          imageAlt="Bibendum — wine bar e bistrot a Palazzo Cancellieri"
        />

        {(sanityData?.chapters?.length > 0 ? sanityData.chapters : bibendumVenuePage.chapters).map((chapter: any, index: number) => (
          <div key={`bibendum-venue-${index}-${chapter.kicker || chapter._key}`}>
            {index > 0 && (
              <div className="section-divider" aria-hidden="true" />
            )}
            <VenueShowcase 
              kicker={chapter.kicker}
              title={chapter.title}
              paragraphs={chapter.paragraphs || (chapter.lead ? [chapter.lead] : [])}
              highlights={chapter.highlights}
              image={chapter.image ? (chapter.image.asset ? urlFor(chapter.image).url() : images.heroBibendum) : images.heroBibendum}
              imageAlt={chapter.imageAlt || chapter.title}
              reverse={chapter.reverse}
              tone={chapter.tone}
              cta={chapter.cta}
            />
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
