import BaseLayout from '@/components/BaseLayout';
import PageIntro from '@/components/PageIntro';

export default function Page() {
  return (
    <>
      <BaseLayout title="News — Baldo Vino">
      	<main id="main">
      		<PageIntro title="News" subtitle="Novità" lead="Archivio notizie e comunicati — da collegare a CMS o blog." />
      		<div className="section__inner note">
      			<p>Le ultime novita' editoriali saranno pubblicate qui.</p>
      		</div>
      	</main>
      </BaseLayout>
    </>
  );
}
