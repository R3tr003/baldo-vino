import BaseLayout from '@/components/BaseLayout';
import PageIntro from '@/components/PageIntro';

export default function Page() {
  return (
    <>
      <BaseLayout title="Privacy — Baldo Vino" description="Informativa privacy del sito Baldo Vino.">
      	<main id="main">
      		<PageIntro
      			title="Privacy"
      			subtitle="Trattamento dati personali"
      			lead="Qui viene pubblicata l'informativa sul trattamento dei dati personali."
      		/>
      		<div className="section__inner legal">
      			<p>
      				Inserire qui l’informativa privacy completa (titolare, base giuridica, diritti dell’interessato, contatti,
      				transfer, ecc.).
      			</p>
      			<p><a href="/it/privacy/cookie/">Cookie</a></p>
      		</div>
      	</main>
      </BaseLayout>
    </>
  );
}
