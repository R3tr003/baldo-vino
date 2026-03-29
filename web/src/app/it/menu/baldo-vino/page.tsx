import BaseLayout from '@/components/BaseLayout';
import PageIntro from '@/components/PageIntro';
import { images } from '@/data/assets';

export default function Page() {
  return (
    <>
      <BaseLayout title="Menu — Baldo Vino">
      	<main id="main">
      		<PageIntro
      			title="Menu Baldo Vino"
      			subtitle="Ristorante gourmet"
      			lead="Un percorso di cucina contemporanea con anima toscana: menu degustazione e carta in evoluzione stagionale."
      			image={images.heroBaldo}
      			imageAlt="Menu degustazione Baldo Vino"
      		/>
      
      		<section className="section__inner menu-detail" aria-label="Offerta menu Baldo Vino">
      			<article className="menu-detail__block">
      				<h2>Percorsi degustazione</h2>
      				<ul>
      					<li>4 portate — 60 €</li>
      					<li>6 portate — 80 €</li>
      					<li>8 portate — 100 €</li>
      				</ul>
      			</article>
      
      			<article className="menu-detail__block">
      				<h2>Wine pairing</h2>
      				<ul>
      					<li>3 calici — 50 €</li>
      					<li>5 calici — 70 €</li>
      					<li>7 calici — 90 €</li>
      				</ul>
      			</article>
      		</section>
      
      		<section className="section__inner menu-story">
      			<p>
      				La proposta alterna mare e terra, con una ricerca costante sull'equilibrio tra tecnica,
      				materia prima e leggibilita del gusto.
      			</p>
      			<div className="menu-story__actions">
      				<a className="btn btn--primary" href="/it/cantina/baldo-vino/">Abbina con la cantina</a>
      				<a className="btn" href="/it/contatti/contatti/">Prenota o richiedi info</a>
      			</div>
      		</section>
      	</main>
      </BaseLayout>
    </>
  );
}
