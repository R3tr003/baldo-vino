import BaseLayout from '@/components/BaseLayout';
import PageIntro from '@/components/PageIntro';
import { images } from '@/data/assets';

export default function Page() {
  return (
    <>
      <BaseLayout title="Bibendum — Bistrot">
      	<main id="main">
      		<PageIntro
      			title="Bibendum"
      			subtitle="Wine bar e bistrot"
      			lead="Piatti semplici e materia prima eccellente, vino e cocktail nel cuore del Palazzo Cancellieri."
      			image={images.heroBibendum}
      			imageAlt="Bibendum"
      		/>
      		<div className="hub section__inner">
      			<ul className="hub__list">
      				<li><a className="hub__link" href="/it/bibendum/bibendum/">Il bistrot</a></li>
      				<li><a className="hub__link" href="/it/menu/bibendum/">Menù</a></li>
      				<li><a className="hub__link" href="/it/cantina/bibendum/">Cantina</a></li>
      			</ul>
      		</div>
      	</main>
      </BaseLayout>
    </>
  );
}
