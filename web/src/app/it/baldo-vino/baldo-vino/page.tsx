import BaseLayout from '@/components/BaseLayout';
import PageIntro from '@/components/PageIntro';
import VenueShowcase from '@/components/VenueShowcase';
import { images } from '@/data/assets';
import { baldoVenuePage } from '@/data/venuePresentations';
import { client, urlFor } from '@/lib/sanity';
import { venuePageQuery } from '@/lib/queries';
import styles from './page.module.css';

async function getPageData() {
  if (!client) return null;
  try {
    return await client.fetch(venuePageQuery('baldo-vino'));
  } catch {
    return null;
  }
}

export default async function Page() {
  const sanityData = await getPageData();

  return (
    <BaseLayout title="Ristorante Baldo Vino">
      <main id="main">
        <PageIntro
          title={sanityData?.title ?? "Ristorante Baldo Vino"}
          subtitle={sanityData?.subtitle ?? "Enoteca — Ristorante gourmet a Pistoia"}
          lead={sanityData?.lead ?? baldoVenuePage.introLead}
          image={sanityData?.heroImage ? urlFor(sanityData.heroImage).url() : images.heroBaldo}
          imageAlt="Ristorante Baldo Vino — sala e tavoli"
        />

        {(sanityData?.chapters?.length > 0 ? sanityData.chapters : baldoVenuePage.chapters).map((chapter: any, index: number) => (
          <div key={`baldo-venue-${index}-${chapter.kicker || chapter._key}`}>
            {index > 0 && (
              <div className="section-divider" aria-hidden="true" />
            )}
            <VenueShowcase 
              kicker={chapter.kicker}
              title={chapter.title}
              paragraphs={chapter.paragraphs || (chapter.lead ? [chapter.lead] : [])}
              highlights={chapter.highlights}
              image={chapter.image ? (chapter.image.asset ? urlFor(chapter.image).url() : images.heroBaldo) : images.heroBaldo}
              imageAlt={chapter.imageAlt || chapter.title}
              reverse={chapter.reverse}
              tone={chapter.tone}
              cta={chapter.cta}
            />
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
