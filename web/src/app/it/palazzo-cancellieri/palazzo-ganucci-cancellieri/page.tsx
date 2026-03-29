import BaseLayout from '@/components/BaseLayout';
import PageIntro from '@/components/PageIntro';
import { images } from '@/data/assets';
import { palazzo } from '@/data/longCopy';
import { client, urlFor } from '@/lib/sanity';
import { genericPageQuery } from '@/lib/queries';
import { PortableText } from 'next-sanity';

async function getPageData() {
  if (!client) return null;
  try {
    return await client.fetch(genericPageQuery('palazzo-cancellieri'));
  } catch {
    return null;
  }
}

export default async function Page() {
  const sanityData = await getPageData();

  return (
    <>
      <BaseLayout title={sanityData?.title ? `${sanityData.title} — Pistoia` : "Palazzo Ganucci Cancellieri — Pistoia"}>
      	<main id="main">
      		<PageIntro
      			title={sanityData?.title ?? palazzo.ganucciTitle}
      			subtitle={sanityData?.subtitle ?? "Pistoia"}
      			lead={sanityData?.lead ?? palazzo.ganucciLead}
      			image={sanityData?.heroImage ? urlFor(sanityData.heroImage).url() : images.heroInterior}
      			imageAlt="Palazzo storico"
      		/>
      		<div className="section__inner note">
            {sanityData?.body ? (
              <PortableText value={sanityData.body} />
            ) : (
      			  <p>
      				  In questa sezione verra' inserito l'approfondimento storico completo su Palazzo Ganucci Cancellieri, dopo
      				  revisione editoriale.
      			  </p>
            )}
      			<a className="btn" href="/it/palazzo-cancellieri/">Torna a Palazzo Cancellieri</a>
      		</div>
      	</main>
      </BaseLayout>
    </>
  );
}
