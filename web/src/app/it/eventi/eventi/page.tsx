import BaseLayout from '@/components/BaseLayout';
import PageIntro from '@/components/PageIntro';
import { eventi } from '@/data/longCopy';
import { images } from '@/data/assets';

export default function Page() {
  return (
    <>
      <BaseLayout title="Eventi — Baldo Vino">
      	<main id="main">
      		<PageIntro
      			title="Eventi"
      			subtitle="Location esclusiva a Pistoia"
      			image={images.heroBaldo}
      			imageAlt="Eventi"
      		/>
      		<div className="section__inner prose-block">
      			{eventi.body.map((p) => <p>{p}</p>)}
      			<p>
      				<a className="btn btn--primary" href="/it/contatti/contatti/">Contattaci</a>
      			</p>
      		</div>
      	</main>
      </BaseLayout>
    </>
  );
}
