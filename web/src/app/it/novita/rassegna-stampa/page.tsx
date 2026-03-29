import BaseLayout from '@/components/BaseLayout';
import PageIntro from '@/components/PageIntro';

export default function Page() {
  return (
    <>
      <BaseLayout title="Rassegna stampa — Baldo Vino">
      	<main id="main">
      		<PageIntro
      			title="Rassegna stampa"
      			subtitle="Novità"
      			lead="Ritagli e citazioni — contenuti da migrare dal sito attuale."
      		/>
      		<div className="section__inner note">
      			<p>In questa sezione troverai la rassegna stampa aggiornata.</p>
      		</div>
      	</main>
      </BaseLayout>
    </>
  );
}
