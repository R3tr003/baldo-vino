import BaseLayout from '@/components/BaseLayout';
import PageIntro from '@/components/PageIntro';
import { images } from '@/data/assets';
import { client, urlFor } from '@/lib/sanity';
import { genericPageQuery } from '@/lib/queries';

async function getPageData() {
  if (!client) return null;
  try {
    return await client.fetch(genericPageQuery('menu'));
  } catch {
    return null;
  }
}

export default async function Page() {
  const sanityData = await getPageData();

  return (
    <>
      <BaseLayout title={sanityData?.title ? `${sanityData.title} — Baldo Vino` : "Menu — Baldo Vino e Bibendum"}>
      	<main id="main">
      		<PageIntro
      			title={sanityData?.title ?? "Menu"}
      			subtitle={sanityData?.subtitle ?? "Ristorante e bistrot"}
      			lead={sanityData?.lead ?? "Due identita gastronomiche, una visione comune: qualità della materia prima, precisione tecnica e stile di servizio."}
      			image={sanityData?.heroImage ? urlFor(sanityData.heroImage).url() : images.heroBaldo}
      			imageAlt={sanityData?.title ?? "Esperienza gastronomica Baldo Vino"}
      		/>
      
      		<section className="menu-hub section__inner" aria-label="Scelta menu">
            {sanityData?.hubCards?.length > 0 ? (
              sanityData.hubCards.map((card: { _key: string, kicker?: string, title: string, description?: string, ctaHref: string, ctaLabel: string }, idx: number) => (
                <article key={card._key} className={`menu-card ${idx > 0 ? 'menu-card--soft' : ''}`}>
                  <p className="menu-card__kicker">{card.kicker}</p>
                  <h2>{card.title}</h2>
                  <p>{card.description}</p>
                  {/* Note: Fallback lists are omitted if using dynamic CMS content without bullet fields */}
                  <a className={`btn ${idx === 0 ? 'btn--primary' : ''}`} href={card.ctaHref}>{card.ctaLabel}</a>
                </article>
              ))
            ) : (
              <>
          			<article className="menu-card">
          				<p className="menu-card__kicker">Fine dining</p>
          				<h2>Menu Baldo Vino</h2>
          				<p>
          					Percorsi degustazione e carta stagionale: cucina contemporanea con radici toscane,
          					abbinamenti dedicati e attenzione ai dettagli di sala.
          				</p>
          				<ul>
          					<li>Degustazione 4 portate</li>
          					<li>Degustazione 6 portate</li>
          					<li>Degustazione 8 portate</li>
          				</ul>
          				<a className="btn btn--primary" href="/it/menu/baldo-vino/">Apri menu Baldo Vino</a>
          			</article>
          
          			<article className="menu-card menu-card--soft">
          				<p className="menu-card__kicker">Bistrot & wine bar</p>
          				<h2>Menu Bibendum</h2>
          				<p>
          					Piatti conviviali e proposte da calice: una cucina agile e curata, pensata per
          					pranzo, aperitivo, cena e dopocena.
          				</p>
          				<ul>
          					<li>Selezione bistrot stagionale</li>
          					<li>Proposte al calice e pairing rapidi</li>
          					<li>Cocktail e after dinner</li>
          				</ul>
          				<a className="btn" href="/it/menu/bibendum/">Apri menu Bibendum</a>
          			</article>
              </>
            )}
      		</section>
      	</main>
      </BaseLayout>
    </>
  );
}
