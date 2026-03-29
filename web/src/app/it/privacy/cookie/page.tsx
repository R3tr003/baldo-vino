import BaseLayout from '@/components/BaseLayout';
import PageIntro from '@/components/PageIntro';

export default function Page() {
  return (
    <>
      <BaseLayout title="Cookie — Baldo Vino" description="Informativa cookie del sito Baldo Vino.">
      	<main id="main">
      		<PageIntro
      			title="Informativa cookie"
      			subtitle="Privacy"
      			lead="Testo legale da sostituire con la versione approvata dal consulente / DPO. Questa pagina non costituisce consulenza legale."
      		/>
      		<div className="section__inner legal">
      			<p>
      				Qui andrà l’informativa estesa sui cookie, le finalità, la durata e i link di opt-out dei fornitori terzi
      				(analytics, social, ecc.), come sul sito pubblicato.
      			</p>
      			<p><a href="/it/privacy/privacy/">Informativa privacy</a></p>
      		</div>
      	</main>
      </BaseLayout>
    </>
  );
}
