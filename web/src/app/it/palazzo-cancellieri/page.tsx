import BaseLayout from '@/components/BaseLayout';
import PageIntro from '@/components/PageIntro';
import { images } from '@/data/assets';
import { palazzo } from '@/data/longCopy';

export default function Page() {
  return (
    <>
      <BaseLayout title="Palazzo Cancellieri — Baldo Vino">
      	<main id="main">
      		<PageIntro
      			title="Palazzo Cancellieri"
      			subtitle="Sede del ristorante Baldo Vino e del Bistrot Bibendum"
      			image={images.heroInterior}
      			imageAlt="Palazzo"
      		/>
      		<div className="section__inner prose-block">
      			{palazzo.intro.map((p, i) => <p key={i}>{p}</p>)}
      			<p>
      				<a className="btn" href="/it/palazzo-cancellieri/palazzo-ganucci-cancellieri/">Palazzo Ganucci Cancellieri</a>
      			</p>
      		</div>
      	</main>
      </BaseLayout>
    </>
  );
}
