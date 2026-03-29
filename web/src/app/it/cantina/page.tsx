import BaseLayout from '@/components/BaseLayout';
import PageIntro from '@/components/PageIntro';
import { client } from '@/lib/sanity';
import { genericPageQuery } from '@/lib/queries';
import { PortableText } from 'next-sanity';

async function getPageData() {
  if (!client) return null;
  try {
    return await client.fetch(genericPageQuery('cantina'));
  } catch {
    return null;
  }
}

export default async function Page() {
  const sanityData = await getPageData();

  return (
    <>
      <BaseLayout title={sanityData?.title ? `${sanityData.title} — Baldo Vino` : "Cantina — Baldo Vino"}>
      	<main id="main">
      		<PageIntro
      			title={sanityData?.title ?? "Cantina"}
      			subtitle={sanityData?.subtitle ?? "Vini e champagne"}
      			lead={sanityData?.lead ?? "La cantina e' il cuore del progetto Baldo Vino: ampiezza, ricerca e abbinamento al servizio dell'esperienza a tavola."}
      		/>
      
      		<div className="section__inner intro">
            {sanityData?.body ? (
              <PortableText value={sanityData.body} />
            ) : (
      			  <p>
      				  Oltre 3.000 referenze, selezione continua e attenzione agli Champagne: due percorsi distinti, uno per il
      				  ristorante e uno per il bistrot.
      			  </p>
            )}
      		</div>
      
      		<div className="hub section__inner" aria-label="Percorsi cantina">
            {sanityData?.hubCards?.length > 0 ? (
              sanityData.hubCards.map((card: any, idx: number) => (
                <article key={card._key} className="hub__card">
                  <p className="hub__kicker">{card.kicker}</p>
                  <h2>{card.title}</h2>
                  <p>{card.description}</p>
                  <a className={`btn ${idx === 0 ? 'btn--primary' : ''}`} href={card.ctaHref}>{card.ctaLabel}</a>
                </article>
              ))
            ) : (
              <>
          			<article className="hub__card">
          				<p className="hub__kicker">Ristorante gourmet</p>
          				<h2>Cantina Baldo Vino</h2>
          				<p>Collezione ampia e verticale, pensata per il servizio di sala e i percorsi degustazione.</p>
          				<a className="btn btn--primary" href="/it/cantina/baldo-vino/">Esplora la cantina</a>
          			</article>
          
          			<article className="hub__card">
          				<p className="hub__kicker">Wine bar · bistrot</p>
          				<h2>Cantina Bibendum</h2>
          				<p>Selezione dinamica al calice e in bottiglia, orientata alla convivialita' e agli abbinamenti bistrot.</p>
          				<a className="btn" href="/it/cantina/bibendum/">Scopri Bibendum</a>
          			</article>
              </>
            )}
      		</div>
      	</main>
      </BaseLayout>
    </>
  );
}
