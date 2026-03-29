import BaseLayout from '@/components/BaseLayout';
import PageIntro from '@/components/PageIntro';
import { images } from '@/data/assets';

export default function Page() {
  return (
    <>
      <BaseLayout title="Menu — Bibendum">
      	<main id="main">
      		<PageIntro
      			title="Menu Bibendum"
      			subtitle="Bistrot"
      			lead="Cucina conviviale e precisa: piatti bistrot, proposte al calice e un ritmo piu informale ma sempre curato."
      			image={images.heroBibendum}
      			imageAlt="Menu Bibendum"
      		/>
      
      		<section className="section__inner menu-detail" aria-label="Identita menu Bibendum">
      			<article className="menu-detail__block">
      				<h2>Stile di cucina</h2>
      				<p>
      					Piatti essenziali, materia prima di qualita e preparazioni pensate per accompagnare il vino,
      					dal pranzo all'aperitivo serale.
      				</p>
      			</article>
      
      			<article className="menu-detail__block">
      				<h2>Cosa trovi</h2>
      				<ul>
      					<li>Selezione bistrot stagionale</li>
      					<li>Proposte da condividere</li>
      					<li>Carta vini e calici in rotazione</li>
      				</ul>
      			</article>
      		</section>
      
      		<section className="section__inner menu-story">
      			<div className="menu-story__actions">
      				<a className="btn btn--primary" href="/it/cantina/bibendum/">Vedi cantina Bibendum</a>
      				<a className="btn" href="/it/bibendum/bibendum/">Scopri il bistrot</a>
      			</div>
      		</section>
      	</main>
      </BaseLayout>
    </>
  );
}
