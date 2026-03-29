import BaseLayout from '@/components/BaseLayout';
import PageIntro from '@/components/PageIntro';
import { images } from '@/data/assets';

export default function Page() {
  return (
    <>
      <BaseLayout title="Gallery — Baldo Vino">
      	<main id="main">
      		<PageIntro
      			title="Gallery"
      			subtitle="Baldo Vino"
      			lead="Galleria fotografica di sala, cucina e dettagli: selezione in costante aggiornamento."
      			image={images.heroInterior}
      			imageAlt="Interno"
      		/>
      		<div className="section__inner gallery-placeholder">
      			<p>
      				Le immagini definitive possono essere caricate in <code>public/gallery/</code> o gestite via CMS nella prossima fase.
      			</p>
      		</div>
      	</main>
      </BaseLayout>
    </>
  );
}
