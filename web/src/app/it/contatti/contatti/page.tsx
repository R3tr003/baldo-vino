import BaseLayout from '@/components/BaseLayout';
import PageIntro from '@/components/PageIntro';
import { venues } from '@/data/venues';
const v = venues;

export default function Page() {
  return (
    <>
      <BaseLayout title="Contatti — Baldo Vino">
      	<main id="main">
      		<PageIntro title="Contatti" subtitle="Due anime, un palazzo" lead="Prenotazioni e informazioni." />
      		<div className="section__inner grid">
      			<section className="card">
      				<h2 className="card__title">{v.baldo.name}</h2>
      				<p>{v.baldo.address}</p>
      				<p><a href={v.baldo.phoneHref}>{v.baldo.phone}</a></p>
      				<p>
      					{v.baldo.hoursWeek}: {v.baldo.hoursWeekText}
      					<br />
      					{v.baldo.hoursSunTitle}: {v.baldo.hoursSunText}
      				</p>
      				<p>
      					<a href={v.baldo.facebook}>Facebook</a> · <a href={v.baldo.instagram}>Instagram</a>
      				</p>
      			</section>
      			<section className="card">
      				<h2 className="card__title">{v.bibendum.name}</h2>
      				<p>{v.bibendum.address}</p>
      				<p>
      					<a href={v.bibendum.phoneHref}>{v.bibendum.phone}</a>
      					<br />
      					<a href={v.bibendum.phoneMobileHref}>{v.bibendum.phoneMobile}</a>
      				</p>
      				<p>
      					{v.bibendum.hoursWeek}: {v.bibendum.hoursWeekText}
      					<br />
      					{v.bibendum.hoursWeekendTitle}: {v.bibendum.hoursWeekendText}
      				</p>
      				<p>
      					<a href={v.bibendum.facebook}>Facebook</a> · <a href={v.bibendum.instagram}>Instagram</a>
      				</p>
      			</section>
      		</div>
      		<p className="section__inner back">
      			<a className="btn" href="/it/#prenota">Prenota un tavolo</a>
      		</p>
      	</main>
      </BaseLayout>
    </>
  );
}
