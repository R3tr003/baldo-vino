import clsx from 'clsx';
import BaseLayout from '@/components/BaseLayout';
import PageIntro from '@/components/PageIntro';
import { images } from '@/data/assets';
import styles from './page.module.css';

const destinations = [
  {
    href: '/it/bibendum/bibendum/',
    kicker: 'Wine bar',
    title: 'Il bistrot',
    desc: 'Bancone, corte e cucina a vista: aperitivo, pranzo e cena in un’atmosfera leggera e conviviale.',
    image: images.heroBibendum,
    imageAlt: 'Interno Bibendum bistrot e wine bar',
  },
  {
    href: '/it/menu/bibendum/',
    kicker: 'Da condividere',
    title: 'Menù',
    desc: 'Ostriche, tartare, salumi, focacce e piatti rapidi da abbinare a calici e cocktail.',
    image: images.heroInterior,
    imageAlt: 'Palazzo Cancellieri — ambiente conviviale',
  },
  {
    href: '/it/cantina/bibendum/',
    kicker: 'Al calice',
    title: 'Cantina',
    desc: 'Rotazione frequente, etichette versatili e pairing immediato con la cucina del bistrot.',
    image: images.heroBibendum,
    imageAlt: 'Selezione vini Bibendum',
  },
] as const;

export default function Page() {
  return (
    <BaseLayout title="Bibendum — Bistrot">
      <main id="main">
        <PageIntro
          title="Bibendum"
          subtitle="Bistrot — Wine bar"
          lead="Nel Palazzo Cancellieri, accanto al ristorante: cocktail, calici in rotazione e cucina semplice su materia prima eccellente — dall’aperitivo all’after dinner."
          image={images.heroBibendum}
          imageAlt="Bibendum wine bar e bistrot a Pistoia"
        />

        <section
          className={clsx('section reveal', styles.landingBibBand)}
          aria-labelledby="bib-landing-band-heading"
        >
          <div className={clsx('section__inner', styles.landingBibBandInner)}>
            <div className={styles.landingBibBandCopy}>
              <div
                className={clsx('editorial-line', styles.landingBibBandLine)}
                aria-hidden="true"
              />
              <p className={styles.landingBibBandEyebrow}>Convivialità</p>
              <h2 id="bib-landing-band-heading" className={styles.landingBibBandTitle}>
                Il ritmo del bistrot
              </h2>
              <p className={styles.landingBibBandText}>
                Tavoli dentro e nella corte, bancone curato dal barman Cristian Schiavone e una
                proposta che invita a fermarsi: poco formale, molto precisa — vino, mixology e
                piccoli piatti che si prestano alla condivisione.
              </p>
              <p className={styles.landingBibBandText}>
                Bibendum è il contrappunto conviviale all’esperienza gourmet di Baldo Vino:
                stesso palazzo, anima diversa, stessa attenzione al dettaglio.
              </p>
            </div>
            <figure className={styles.landingBibBandFigure}>
              <img
                src={images.heroBibendum}
                alt=""
                width={1200}
                height={900}
                loading="lazy"
                decoding="async"
                className={styles.landingBibBandImg}
              />
              <figcaption className={styles.landingBibBandCaption}>
                Bibendum · Palazzo Cancellieri
              </figcaption>
            </figure>
          </div>
        </section>

        <div className="section-divider" aria-hidden="true" />

        <nav
          className={clsx('section__inner reveal', styles.landingBibNav)}
          aria-label="Sezioni Bibendum"
        >
          <header className={styles.landingBibNavHeader}>
            <p className={styles.landingBibNavKicker}>Esplora</p>
            <h2 className={styles.landingBibNavTitle}>Tre porte d’ingresso</h2>
            <p className={styles.landingBibNavLead}>
              Approfondisci bistrot, menù o carta vini prima di passare da noi o scriverci.
            </p>
          </header>
          <ul className={styles.landingBibNavGrid}>
            {destinations.map((item) => (
              <li key={item.href} className={styles.landingBibNavItem}>
                <a href={item.href} className={styles.landingBibCard}>
                  <div className={styles.landingBibCardMedia}>
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      width={800}
                      height={520}
                      loading="lazy"
                      decoding="async"
                      className={styles.landingBibCardImg}
                    />
                    <span className={styles.landingBibCardVeil} aria-hidden="true" />
                  </div>
                  <div className={styles.landingBibCardBody}>
                    <span className={styles.landingBibCardEyebrow}>{item.kicker}</span>
                    <h3 className={styles.landingBibCardTitle}>{item.title}</h3>
                    <p className={styles.landingBibCardDesc}>{item.desc}</p>
                    <span className={styles.landingBibCardCta}>Apri la sezione</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section
          className={clsx('section reveal', styles.landingBibCloser)}
          aria-label="Contatti Bibendum"
        >
          <div className={clsx('section__inner', styles.landingBibCloserInner)}>
            <p className={styles.landingBibCloserLine}>
              Aperitivo, cena o dopo cena: scrivici o chiamaci per un tavolo o un evento informale.
            </p>
            <div className={styles.landingBibCloserActions}>
              <a className="btn btn--primary" href="/it/contatti/contatti/">
                Contatti
              </a>
              <a className="btn" href="/it/baldo-vino/">
                Baldo Vino
              </a>
            </div>
          </div>
        </section>
      </main>
    </BaseLayout>
  );
}
