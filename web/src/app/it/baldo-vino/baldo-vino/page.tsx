import BaseLayout from '@/components/BaseLayout';
import PageIntro from '@/components/PageIntro';
import ProseSections from '@/components/ProseSections';
import { images } from '@/data/assets';
import { baldoRistorante } from '@/data/longCopy';

export default function Page() {
  return (
    <>
      <BaseLayout title="Ristorante Baldo Vino">
      	<main id="main">
      		<PageIntro
      			title="Ristorante Baldo Vino"
      			subtitle="Enoteca — Ristorante gourmet a Pistoia"
      			image={images.heroBaldo}
      			imageAlt="Ristorante Baldo Vino"
      		/>
      		<ProseSections sections={baldoRistorante.sections} />
      		<div className="cta-row section__inner">
      			<a className="btn btn--primary" href="/it/menu/baldo-vino/">Vai al menù</a>
      			<a className="btn" href="/it/cantina/baldo-vino/">Vai alla cantina</a>
      		</div>
      	</main>
      </BaseLayout>
    </>
  );
}
