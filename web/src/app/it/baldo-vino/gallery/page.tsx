import BaseLayout from '@/components/BaseLayout';
import PageIntro from '@/components/PageIntro';
import { images } from '@/data/assets';
import { client, urlFor } from '@/lib/sanity';
import { genericPageQuery } from '@/lib/queries';
import { PortableText } from 'next-sanity';

async function getPageData() {
  if (!client) return null;
  try {
    return await client.fetch(genericPageQuery('gallery'));
  } catch {
    return null;
  }
}

export default async function Page() {
  const sanityData = await getPageData();

  return (
    <>
      <BaseLayout title={sanityData?.title ? `${sanityData.title} — Baldo Vino` : "Gallery — Baldo Vino"}>
      	<main id="main">
      		<PageIntro
      			title={sanityData?.title ?? "Gallery"}
      			subtitle={sanityData?.subtitle ?? "Baldo Vino"}
      			lead={sanityData?.lead ?? "Galleria fotografica di sala, cucina e dettagli: selezione in costante aggiornamento."}
      			image={sanityData?.heroImage ? urlFor(sanityData.heroImage).url() : images.heroInterior}
      			imageAlt="Interno"
      		/>
      		<div className="section__inner gallery-placeholder">
            {sanityData?.body ? (
              <PortableText value={sanityData.body} />
            ) : (
      			  <p>
      				  Le immagini definitive possono essere caricate in <code>public/gallery/</code> o gestite via CMS nella prossima fase.
      			  </p>
            )}
      		</div>
      	</main>
      </BaseLayout>
    </>
  );
}
