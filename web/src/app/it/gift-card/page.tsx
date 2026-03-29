import BaseLayout from '@/components/BaseLayout';
import PageIntro from '@/components/PageIntro';

export default function Page() {
  return (
    <>
      <BaseLayout title="Gift card — Baldo Vino">
      	<main id="main">
      		<PageIntro
      			title="Gift card"
      			subtitle="Un regalo da gustare"
      			lead="Qui potrai acquistare o regalare un'esperienza Baldo Vino: attivazione in arrivo nella prossima fase."
      		/>
      		<div className="section__inner note">
      			<p>Nessun pagamento è attivo in questa build statica.</p>
      			<a className="btn" href="/it/contatti/contatti/">Scrivici</a>
      		</div>
      	</main>
      </BaseLayout>
    </>
  );
}
