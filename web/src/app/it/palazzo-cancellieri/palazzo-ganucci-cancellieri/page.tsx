import BaseLayout from '@/components/BaseLayout';
import PageIntro from '@/components/PageIntro';
import { images } from '@/data/assets';
import { palazzo } from '@/data/longCopy';

export default function Page() {
  return (
    <>
      <BaseLayout title="Palazzo Ganucci Cancellieri — Pistoia">
      	<main id="main">
      		<PageIntro
      			title={palazzo.ganucciTitle}
      			subtitle="Pistoia"
      			lead={palazzo.ganucciLead}
      			image={images.heroInterior}
      			imageAlt="Palazzo storico"
      		/>
      		<div className="section__inner note">
      			<p>
      				In questa sezione verra' inserito l'approfondimento storico completo su Palazzo Ganucci Cancellieri, dopo
      				revisione editoriale.
      			</p>
      			<a className="btn" href="/it/palazzo-cancellieri/">Torna a Palazzo Cancellieri</a>
      		</div>
      	</main>
      </BaseLayout>
    </>
  );
}
