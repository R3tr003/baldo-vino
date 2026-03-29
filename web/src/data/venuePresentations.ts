import type { VenueChapter } from '@/types/venue';
import { images } from '@/data/assets';

export const baldoVenuePage = {
  introLead:
    'Alta cucina toscana nel Palazzo Cancellieri: sale d’epoca, giardino in stagione, cantina leggendaria e un servizio che fa del tempo a tavola un rito.',
  chapters: [
    {
      kicker: 'Dal 1998',
      title: 'Una storia che cresce con Pistoia',
      paragraphs: [
        'Dall’enoteca al ristorante gourmet: ricerca costante su materia prima, sala e carta dei vini — oltre 3000 referenze tra Champagne, verticali e scoperte internazionali.',
        'Dal marzo 2024 la casa è Palazzo Cancellieri, seicentesco nel centro storico: eleganza, riservatezza e il fascino del tempo.',
      ],
      image: images.heroInterior,
      imageAlt: 'Interni e atmosfera di Palazzo Cancellieri',
      reverse: false,
    },
    {
      kicker: 'Le sale',
      title: 'Charme e dettaglio',
      paragraphs: [
        'Quattro sale con pavimenti antichi, sete alle pareti e lampadari che raccontano secoli di storia. In estate l’esperienza si apre sul giardino del palazzo.',
        'Arredi in stile inglese fine Ottocento, scelti da Francesco Balloni, e una mise en place studiata come in una casa ospitale.',
      ],
      image: images.heroBaldo,
      imageAlt: 'Sala del ristorante Baldo Vino',
      reverse: true,
    },
    {
      kicker: 'In cucina',
      title: 'Andrea Ciottoli',
      paragraphs: [
        'Chef pistoiese: tradizione toscana e sperimentazione, piatti leggeri ma scenici. Terra e mare con la stessa attenzione; la materia prima è il filo conduttore.',
      ],
      highlights: [
        'Degustazione 4 portate — 60 €',
        'Degustazione 6 portate — 80 €',
        'Degustazione 8 portate — 100 €',
        'Wine pairing 3 / 5 / 7 calici — da 50 €',
      ],
      image: images.heroBaldo,
      imageAlt: 'Esperienza gourmet Baldo Vino',
      reverse: false,
    },
    {
      kicker: 'In cantina',
      title: 'Il vino al centro',
      paragraphs: [
        'Una carta viva, in continua evoluzione: ogni bottiglia è scelta per accompagnare la cucina e celebrare territori e produttori.',
      ],
      image: images.heroInterior,
      imageAlt: 'Selezione vini e ambiente enoteca',
      reverse: true,
      cta: { href: '/it/cantina/baldo-vino/', label: 'Scopri la cantina' },
    },
  ] satisfies VenueChapter[],
  chefChapter: {
    kicker: 'Il percorso',
    title: 'Lo chef',
    paragraphs: [
      'Dopo il diploma all’I.P.S.S.A.R. Marini di Montecatini, formazione con Igles Corelli ad Atman di Pescia, pasticceria e panificazione.',
      'Dal 2021 executive chef di Baldo Vino, al fianco di Francesco Balloni.',
    ],
    image: images.heroBaldo,
    imageAlt: 'Ristorante Baldo Vino — dettaglio',
    reverse: false,
  } satisfies VenueChapter,
};

export const bibendumVenuePage = {
  introLead:
    'Wine bar e bistrot nello stesso palazzo del ristorante: cocktail, calici in rotazione, cucina semplice e materia prima eccellente — dall’aperitivo all’after dinner.',
  chapters: [
    {
      kicker: 'Appena entrati',
      title: 'Bibendum vi accoglie a sinistra',
      paragraphs: [
        'Nel palazzo restaurato, il bistrot è il primo incontro: ambiente elegante ma leggero, aperto da pranzo fino a sera.',
        'Piatti diretti e gustosi da abbinare a vino e cocktail — convivialità senza rinunciare alla precisione.',
      ],
      image: images.heroBibendum,
      imageAlt: 'Bibendum wine bar e bancone',
      reverse: false,
    },
    {
      kicker: 'Dove sedersi',
      title: 'Bancone, sala e corte',
      paragraphs: [
        'Tavoli all’interno davanti al bancone, curato dal barman Cristian Schiavone, oppure nella corte interna di Palazzo Cancellieri, dove si affaccia anche la cucina.',
      ],
      image: images.heroInterior,
      imageAlt: 'Corte e palazzo — atmosfera Bibendum',
      reverse: true,
    },
    {
      kicker: 'In tavola',
      title: 'Menù da condividere',
      paragraphs: [
        'Cucina semplice ma accurata: ideale per una bevuta, un pranzo rapido o una serata tra amici.',
      ],
      highlights: [
        'Ostriche, tartare, calamaretti',
        'Zuppe, salumi e formaggi',
        'Focacce, sandwich e altro ancora',
      ],
      image: images.heroBibendum,
      imageAlt: 'Proposte bistrot Bibendum',
      reverse: false,
      cta: { href: '/it/menu/bibendum/', label: 'Vai al menù' },
    },
    {
      kicker: 'Mixology',
      title: 'Cristian Schiavone al bancone',
      paragraphs: [
        'Aperitivi e after dinner firmati: classici reinterpretati e creazioni dedicate — da assaggiare nel contesto del palazzo.',
      ],
      image: images.heroBibendum,
      imageAlt: 'Bancone bar Bibendum',
      reverse: true,
      tone: 'dark' as const,
      cta: { href: '/it/contatti/contatti/', label: 'Prenota o scrivici' },
    },
  ] satisfies VenueChapter[],
};
