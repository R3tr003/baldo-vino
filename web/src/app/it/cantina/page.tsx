import BaseLayout from '@/components/BaseLayout';
import PageIntro from '@/components/PageIntro';

export default function Page() {
  return (
    <>
      <BaseLayout title="Cantina — Baldo Vino">
      	<main id="main">
      		<PageIntro
      			title="Cantina"
      			subtitle="Vini e champagne"
      			lead="La cantina e' il cuore del progetto Baldo Vino: ampiezza, ricerca e abbinamento al servizio dell'esperienza a tavola."
      		/>
      
      		<div className="section__inner intro">
      			<p>
      				Oltre 3.000 referenze, selezione continua e attenzione agli Champagne: due percorsi distinti, uno per il
      				ristorante e uno per il bistrot.
      			</p>
      		</div>
      
      		<div className="hub section__inner" aria-label="Percorsi cantina">
      			<article className="hub__card">
      				<p className="hub__kicker">Ristorante gourmet</p>
      				<h2>Cantina Baldo Vino</h2>
      				<p>Collezione ampia e verticale, pensata per il servizio di sala e i percorsi degustazione.</p>
      				<a className="btn btn--primary" href="/it/cantina/baldo-vino/">Esplora la cantina</a>
      			</article>
      
      			<article className="hub__card">
      				<p className="hub__kicker">Wine bar · bistrot</p>
      				<h2>Cantina Bibendum</h2>
      				<p>Selezione dinamica al calice e in bottiglia, orientata alla convivialita' e agli abbinamenti bistrot.</p>
      				<a className="btn" href="/it/cantina/bibendum/">Scopri Bibendum</a>
      			</article>
      		</div>
      	</main>
      </BaseLayout>
    </>
  );
}
