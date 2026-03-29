import BaseLayout from '@/components/BaseLayout';
import PageIntro from '@/components/PageIntro';
import { eventi } from '@/data/longCopy';
import { images } from '@/data/assets';
import { client, urlFor } from '@/lib/sanity';
import { genericPageQuery } from '@/lib/queries';
import { PortableText } from 'next-sanity';

async function getPageData() {
  if (!client) return null;
  try {
    return await client.fetch(genericPageQuery('eventi'));
  } catch {
    return null;
  }
}

export default async function Page() {
  const sanityData = await getPageData();

  return (
    <>
      <BaseLayout title={sanityData?.title ? `${sanityData.title} — Baldo Vino` : "Eventi — Baldo Vino"}>
      	<main id="main">
      		<PageIntro
      			title={sanityData?.title ?? "Eventi"}
      			subtitle={sanityData?.subtitle ?? "Location esclusiva a Pistoia"}
      			image={sanityData?.heroImage ? urlFor(sanityData.heroImage).url() : images.heroBaldo}
      			imageAlt="Eventi"
      		/>
      		<div className="section__inner prose-block">
            {sanityData?.body ? (
              <PortableText value={sanityData.body} />
            ) : (
      			  eventi.body.map((p, i) => <p key={i}>{p}</p>)
            )}
      			<p>
      				<a className="btn btn--primary" href="/it/contatti/contatti/">Contattaci</a>
      			</p>
      		</div>
      	</main>
      </BaseLayout>
    </>
  );
}
