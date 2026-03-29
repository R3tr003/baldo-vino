import BaseLayout from '@/components/BaseLayout';
import PageIntro from '@/components/PageIntro';
import { images } from '@/data/assets';

export default function Page() {
  return (
    <>
      <BaseLayout title="Menu — Baldo Vino e Bibendum">
      	<main id="main">
      		<PageIntro
      			title="Menu"
      			subtitle="Ristorante e bistrot"
      			lead="Due identita gastronomiche, una visione comune: qualità della materia prima, precisione tecnica e stile di servizio."
      			image={images.heroBaldo}
      			imageAlt="Esperienza gastronomica Baldo Vino"
      		/>
      
      		<section className="menu-hub section__inner" aria-label="Scelta menu">
      			<article className="menu-card">
      				<p className="menu-card__kicker">Fine dining</p>
      				<h2>Menu Baldo Vino</h2>
      				<p>
      					Percorsi degustazione e carta stagionale: cucina contemporanea con radici toscane,
      					abbinamenti dedicati e attenzione ai dettagli di sala.
      				</p>
      				<ul>
      					<li>Degustazione 4 portate</li>
      					<li>Degustazione 6 portate</li>
      					<li>Degustazione 8 portate</li>
      				</ul>
      				<a className="btn btn--primary" href="/it/menu/baldo-vino/">Apri menu Baldo Vino</a>
      			</article>
      
      			<article className="menu-card menu-card--soft">
      				<p className="menu-card__kicker">Bistrot & wine bar</p>
      				<h2>Menu Bibendum</h2>
      				<p>
      					Piatti conviviali e proposte da calice: una cucina agile e curata, pensata per
      					pranzo, aperitivo, cena e dopocena.
      				</p>
      				<ul>
      					<li>Selezione bistrot stagionale</li>
      					<li>Proposte al calice e pairing rapidi</li>
      					<li>Cocktail e after dinner</li>
      				</ul>
      				<a className="btn" href="/it/menu/bibendum/">Apri menu Bibendum</a>
      			</article>
      		</section>
      	</main>
      </BaseLayout>
    </>
  );
}
