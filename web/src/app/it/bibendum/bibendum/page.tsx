import BaseLayout from '@/components/BaseLayout';
import PageIntro from '@/components/PageIntro';
import ProseSections from '@/components/ProseSections';
import { images } from '@/data/assets';
import { bibendumBistrot } from '@/data/longCopy';

export default function Page() {
  return (
    <>
      <BaseLayout title="Bibendum — Bistrot">
      	<main id="main">
      		<PageIntro
      			title="Bibendum"
      			subtitle="Bistrot"
      			image={images.heroBibendum}
      			imageAlt="Bibendum bistrot"
      		/>
      		<ProseSections sections={bibendumBistrot.sections} />
      		<div className="cta-row section__inner">
      			<a className="btn btn--primary" href="/it/menu/bibendum/">Vai al menù</a>
      			<a className="btn" href="/it/cantina/bibendum/">Vai alla cantina</a>
      		</div>
      	</main>
      </BaseLayout>
    </>
  );
}
