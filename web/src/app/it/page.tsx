import BaseLayout from '@/components/BaseLayout';
import HomeHero from '@/components/HomeHero';
import BookingShell from '@/components/BookingShell';
import EditorialSplit from '@/components/EditorialSplit';
import { home as homeFallback } from '@/data/home';
import { images } from '@/data/assets';
import { client } from '@/lib/sanity';
import { homepageQuery } from '@/lib/queries';

async function getHomeData() {
  if (!client) return null;
  try {
    const data = await client.fetch(homepageQuery);
    if (data) return data;
  } catch {
    // Sanity non disponibile — uso il fallback locale
  }
  return null;
}

export default async function Page() {
  const sanityHome = await getHomeData();

  // Merge: i valori Sanity sovrascrivono il fallback locale
  const home = {
    ...homeFallback,
    ...(sanityHome ?? {}),
  };

  return (
    <>
      <BaseLayout title="Baldo Vino — Enoteca Ristorante Gourmet a Pistoia">
      	<main id="main">
      		<HomeHero />

      		<div className="section-divider" aria-hidden="true"></div>

      		<section className="manifesto section reveal" aria-labelledby="manifesto-title">
      			<div className="manifesto__inner">
      				<p className="kicker">Manifesto</p>
      				<h2 id="manifesto-title">{sanityHome?.manifesto ?? home.heroMantra}</h2>
      			</div>
      		</section>

      		<div className="section-divider" aria-hidden="true"></div>

      		<EditorialSplit
      			kicker={home.baldoTeaserKicker}
      			title={home.baldoTeaserTitle}
      			body={home.baldoTeaser}
      			href="/it/baldo-vino/baldo-vino/"
      			linkLabel="Scopri il ristorante"
      			image={images.heroBaldo}
      			imageAlt="Sala del ristorante Baldo Vino"
      		/>

      		<EditorialSplit
      			kicker={home.bibendumTeaserKicker}
      			title={home.bibendumTeaserTitle}
      			body={home.bibendumTeaser}
      			href="/it/bibendum/bibendum/"
      			linkLabel="Scopri il bistrot"
      			image={images.heroBibendum}
      			imageAlt="Bibendum bistrot e wine bar"
      			reverse={true}
      			tone="dark"
      		/>

      		<section className="section cantina-strip" aria-labelledby="sec-cantina">
      			<div className="section__inner cantina-strip__inner">
      				<div className="cantina-strip__statement reveal--left">
      					<span className="cantina-strip__number" aria-hidden="true">3000+</span>
      					<p className="cantina-strip__number-label">etichette selezionate</p>
      				</div>
      				<div className="cantina-strip__copy reveal--right">
      					<p className="kicker">{home.cantinaTitle}</p>
      					<h2 className="cantina-strip__title" id="sec-cantina">
      						{home.cantinaLead}
      					</h2>
      					<ul className="cantina-strip__points">
						{home.cantinaPoints?.map((point: string) => (
     					 	<li key={point}>{point}</li>
     					 ))}
      					</ul>
      					<div className="cantina-strip__links">
      						<a className="btn" href="/it/cantina/baldo-vino/">Cantina Baldo Vino</a>
      						<a className="btn" href="/it/cantina/bibendum/">Cantina Bibendum</a>
      					</div>
      				</div>
      			</div>
      		</section>

      		<section className="quote-band section" aria-labelledby="sec-quote">
      			<div className="quote-band__inner reveal--scale">
      				<p className="quote-band__label" id="sec-quote">Parole</p>
      				<blockquote>
      					<p>{home.quote}</p>
      					<footer>— {home.quoteAuthor}</footer>
      				</blockquote>
      			</div>
      		</section>

      		<div className="section-divider" aria-hidden="true"></div>

      		<section className="events section" aria-labelledby="sec-eventi">
      			<div className="section__inner events__inner">
      				<div className="events__copy reveal--left">
      					<p className="kicker">Eventi</p>
      					<h2 id="sec-eventi">{home.eventiTitle}</h2>
      					<p>{home.eventiTeaser}</p>
      					<a className="btn btn--primary" href="/it/eventi/eventi/">Organizza un evento</a>
      				</div>
      				<div className="events__visual reveal--right">
      					<img src={images.heroInterior} alt="Palazzo Cancellieri" width="1400" height="1000" loading="lazy" />
      				</div>
      			</div>
      		</section>

      		<BookingShell />

      		<section className="section legal" aria-label="Note legali">
      			<div className="section__inner narrow">
      				<p className="legal-note">{home.legalNote}</p>
      			</div>
      		</section>
      	</main>
      </BaseLayout>
    </>
  );
}
