import BaseLayout from '@/components/BaseLayout';
import PageIntro from '@/components/PageIntro';
import { images } from '@/data/assets';

export default function Page() {
  return (
    <>
      <BaseLayout title="Baldo Vino — Ristorante">
      	<main id="main">
      		<PageIntro
      			title="Baldo Vino"
      			subtitle="Ristorante gourmet"
      			lead="Enoteca e alta cucina nel Palazzo Cancellieri. Esplora il ristorante, il menù, la cantina e la gallery."
      			image={images.heroBaldo}
      			imageAlt="Sala ristorante"
      		/>
      		<div className="hub section__inner">
      			<ul className="hub__list">
      				<li><a className="hub__link" href="/it/baldo-vino/baldo-vino/">Il ristorante</a></li>
      				<li><a className="hub__link" href="/it/menu/baldo-vino/">Menù</a></li>
      				<li><a className="hub__link" href="/it/cantina/baldo-vino/">Cantina</a></li>
      				<li><a className="hub__link" href="/it/baldo-vino/gallery/">Gallery</a></li>
      			</ul>
      		</div>
      	</main>
      </BaseLayout>
    </>
  );
}
