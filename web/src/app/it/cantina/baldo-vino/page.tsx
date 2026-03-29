import BaseLayout from '@/components/BaseLayout';
import PageIntro from '@/components/PageIntro';

export default function Page() {
  return (
    <>
      <BaseLayout title="Cantina — Baldo Vino">
      	<main id="main">
      		<PageIntro
      			title="Cantina Baldo Vino"
      			subtitle="Oltre 3000 referenze"
      			lead="Una cantina in continua evoluzione, costruita negli anni con ricerca costante, attenzione agli Champagne e ampiezza internazionale."
      		/>
      
      		<div className="section__inner note">
      			<blockquote>
      				“La mia passione per il vino, e una ricerca continua, mi hanno portato a collezionare etichette provenienti
      				da molti Paesi, con una particolare attenzione agli Champagne.” — Francesco Balloni
      			</blockquote>
      		</div>
      
      		<section className="section__inner pillars" aria-label="Punti chiave della cantina">
      			<article>
      				<h2>Selezione</h2>
      				<p>Verticalita', annate e produttori iconici accanto a etichette da scoperta, con una curatela costante.</p>
      			</article>
      			<article>
      				<h2>Abbinamento</h2>
      				<p>Percorsi pensati per dialogare con la cucina, dal calice al pairing completo nei menu degustazione.</p>
      			</article>
      			<article>
      				<h2>Servizio</h2>
      				<p>Consulenza in sala e carta in aggiornamento continuo, per accompagnare ogni tavolo con precisione.</p>
      			</article>
      		</section>
      
      		<div className="section__inner actions">
      			<a className="btn btn--primary" href="/it/baldo-vino/baldo-vino/">Il ristorante</a>
      			<a className="btn" href="/it/contatti/contatti/">Contatta la sala</a>
      		</div>
      	</main>
      </BaseLayout>
    </>
  );
}
