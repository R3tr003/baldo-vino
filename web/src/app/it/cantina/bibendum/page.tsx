import BaseLayout from '@/components/BaseLayout';
import PageIntro from '@/components/PageIntro';

export default function Page() {
  return (
    <>
      <BaseLayout title="Cantina — Bibendum">
      	<main id="main">
      		<PageIntro
      			title="Cantina Bibendum"
      			subtitle="Wine bar"
      			lead="Una selezione dinamica, pensata per il ritmo del bistrot: calici, bottiglie e pairing agili ma ricercati."
      		/>
      
      		<section className="section__inner details" aria-label="Identita della cantina Bibendum">
      			<article>
      				<h2>Calice protagonista</h2>
      				<p>
      					Rotazione frequente per offrire una carta al calice viva, capace di accompagnare aperitivo, cena e
      					after dinner.
      				</p>
      			</article>
      			<article>
      				<h2>Abbinamenti bistrot</h2>
      				<p>
      					Selezione orientata alla convivialita': etichette versatili, beva precisa e pairing immediato con la
      					cucina Bibendum.
      				</p>
      			</article>
      		</section>
      
      		<div className="section__inner note">
      			<p>
      				La carta completa verra' finalizzata con aggiornamento editoriale periodico, mantenendo la coerenza con lo
      				stile della sala.
      			</p>
      			<div className="note__actions">
      				<a className="btn btn--primary" href="/it/bibendum/bibendum/">Il bistrot</a>
      				<a className="btn" href="/it/contatti/contatti/">Contattaci</a>
      			</div>
      		</div>
      	</main>
      </BaseLayout>
    </>
  );
}
