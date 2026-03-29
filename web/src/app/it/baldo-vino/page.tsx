import clsx from 'clsx';
import BaseLayout from '@/components/BaseLayout';
import PageIntro from '@/components/PageIntro';
import { images } from '@/data/assets';
import styles from './page.module.css';

const destinations = [
  {
    href: '/it/baldo-vino/baldo-vino/',
    kicker: 'La sala',
    title: 'Il ristorante',
    desc: 'Quattro sale d’epoca, giardino in stagione e cucina gourmet firmata Andrea Ciottoli.',
    image: images.heroBaldo,
    imageAlt: 'Sala del ristorante Baldo Vino',
  },
  {
    href: '/it/menu/baldo-vino/',
    kicker: 'Percorsi',
    title: 'Menù',
    desc: 'Degustazioni da quattro a otto portate e wine pairing su misura.',
    image: images.heroInterior,
    imageAlt: 'Interno Palazzo Cancellieri',
  },
  {
    href: '/it/cantina/baldo-vino/',
    kicker: '3000+ etichette',
    title: 'Cantina',
    desc: 'Champagne, verticali e ricerca internazionale — la carta che accompagna ogni tavolo.',
    image: images.heroInterior,
    imageAlt: 'Ambiente enoteca Baldo Vino',
  },
  {
    href: '/it/baldo-vino/gallery/',
    kicker: 'Atmosfera',
    title: 'Gallery',
    desc: 'Immagini di sale, dettagli e del palazzo che ospita l’esperienza.',
    image: images.heroBaldo,
    imageAlt: 'Dettagli e atmosfera Baldo Vino',
  },
] as const;

export default function Page() {
  return (
    <BaseLayout title="Baldo Vino — Ristorante">
      <main id="main">
        <PageIntro
          title="Baldo Vino"
          subtitle="Enoteca — Ristorante gourmet"
          lead="Dal 1998 a Pistoia, oggi nel seicentesco Palazzo Cancellieri: alta cucina toscana, servizio in sala curato e una cantina che racconta il mondo del vino."
          image={images.heroBaldo}
          imageAlt="Sala del ristorante Baldo Vino a Palazzo Cancellieri"
        />

        <div className="section-divider" aria-hidden="true" />

        <section
          className={clsx('section reveal', styles.landingBaldoStory)}
          aria-labelledby="baldo-landing-story-heading"
        >
          <div className={clsx('section__inner', styles.landingBaldoStoryInner)}>
            <figure className={styles.landingBaldoStoryFigure}>
              <img
                src={images.heroInterior}
                alt=""
                width={1400}
                height={1000}
                loading="lazy"
                decoding="async"
                className={styles.landingBaldoStoryImg}
              />
              <figcaption className={styles.landingBaldoStoryCaption}>
                Palazzo Cancellieri — Pistoia
              </figcaption>
            </figure>
            <div className={styles.landingBaldoStoryCopy}>
              <div className="editorial-line" aria-hidden="true" />
              <p className={styles.landingBaldoStoryEyebrow}>Sede</p>
              <h2
                id="baldo-landing-story-heading"
                className={styles.landingBaldoStoryTitle}
              >
                Una casa storica per l’alta cucina
              </h2>
              <p className={styles.landingBaldoStoryText}>
                Pavimenti antichi, sete alle pareti e lampadari d’epoca dialogano con
                una mise en place ricercata. In bella stagione l’esperienza si estende
                nel giardino del palazzo — un ritmo lento, riservato, preciso.
              </p>
              <p className={styles.landingBaldoStoryTextAccent}>
                Qui ogni dettaglio — dalla carta dei vini al servizio in sala — è pensato
                per far durare il piacere oltre l’ultimo calice.
              </p>
            </div>
          </div>
        </section>

        <div className="section-divider" aria-hidden="true" />

        <nav
          className={clsx('section__inner reveal', styles.landingBaldoNav)}
          aria-label="Sezioni Baldo Vino"
        >
          <header className={styles.landingBaldoNavHeader}>
            <p className={styles.landingBaldoNavKicker}>Percorrere</p>
            <h2 className={styles.landingBaldoNavTitle}>Cosa vuoi scoprire</h2>
            <p className={styles.landingBaldoNavLead}>
              Scegli dove approfondire: ogni sezione ha testi, immagini e collegamenti
              utili prima di prenotare o contattarci.
            </p>
          </header>
          <ul className={styles.landingBaldoNavGrid}>
            {destinations.map((item) => (
              <li key={item.href} className={styles.landingBaldoNavItem}>
                <a href={item.href} className={styles.landingBaldoCard}>
                  <div className={styles.landingBaldoCardMedia}>
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      width={800}
                      height={520}
                      loading="lazy"
                      decoding="async"
                      className={styles.landingBaldoCardImg}
                    />
                    <span className={styles.landingBaldoCardVeil} aria-hidden="true" />
                  </div>
                  <div className={styles.landingBaldoCardBody}>
                    <span className={styles.landingBaldoCardEyebrow}>{item.kicker}</span>
                    <h3 className={styles.landingBaldoCardTitle}>{item.title}</h3>
                    <p className={styles.landingBaldoCardDesc}>{item.desc}</p>
                    <span className={styles.landingBaldoCardCta}>Apri la sezione</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section
          className={clsx('section reveal', styles.landingBaldoCloser)}
          aria-label="Prossimi passi"
        >
          <div className={clsx('section__inner', styles.landingBaldoCloserInner)}>
            <p className={styles.landingBaldoCloserQuote}>
              &ldquo;La mia cucina è quel luogo in grado di ospitare vini provenienti da
              molte parti del mondo.&rdquo;
            </p>
            <p className={styles.landingBaldoCloserAuthor}>— Francesco Balloni</p>
            <div className={styles.landingBaldoCloserActions}>
              <a className="btn btn--primary" href="/it/contatti/contatti/">
                Contatti
              </a>
              <a className="btn" href="/it/#prenota">
                Prenota
              </a>
            </div>
          </div>
        </section>
      </main>
    </BaseLayout>
  );
}
