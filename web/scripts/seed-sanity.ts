import { createClient } from '@sanity/client';
import { images } from '../src/data/assets';
import { baldoVenuePage, bibendumVenuePage } from '../src/data/venuePresentations';
import { eventi, palazzo } from '../src/data/longCopy';
import * as dotenv from 'dotenv';
import path from 'path';

// Load env vars
dotenv.config({ path: path.join(process.cwd(), '.env.local') });

if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || !process.env.SANITY_API_TOKEN) {
  throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_TOKEN');
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

async function uploadImage(urlOrPath: string, filename: string) {
  try {
    console.log(`Uploading ${filename}...`);
    let buffer: Buffer;
    
    if (urlOrPath.startsWith('http')) {
      const response = await fetch(urlOrPath);
      const arrayBuffer = await response.arrayBuffer();
      buffer = Buffer.from(arrayBuffer);
    } else {
       // It's a local file, read from public folder
       const fs = await import('fs');
       const localPath = path.join(process.cwd(), 'public', urlOrPath);
       if (fs.existsSync(localPath)) {
         buffer = fs.readFileSync(localPath);
       } else {
         console.warn(`Local file not found: ${localPath}`);
         return null;
       }
    }

    const asset = await client.assets.upload('image', buffer, { filename });
    console.log(`✅ Uploaded ${filename}: ${asset._id}`);
    return {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id,
      },
    };
  } catch (err) {
    console.error(`❌ Failed to upload ${urlOrPath}:`, err);
    return null;
  }
}

const toPortableText = (textArray: string[]) =>
  textArray.map((t) => ({
    _key: Math.random().toString(36).substring(7),
    _type: 'block',
    children: [{ _key: Math.random().toString(36).substring(7), _type: 'span', text: t, marks: [] }],
    markDefs: [],
    style: 'normal',
  }));

async function seed() {
  console.log('🌱 Starting Sanity Seed...');

  // 1. Upload Images
  const imageRefs: Record<string, any> = {};
  for (const [key, url] of Object.entries(images)) {
    const ref = await uploadImage(url, `${key}.webp`);
    if (ref) imageRefs[key] = ref;
  }

  // 2. Generic Pages
  const genericPages = [
    {
      _type: 'genericPage',
      title: 'Eventi',
      slug: { current: 'eventi' },
      subtitle: 'Location esclusiva a Pistoia',
      heroImage: imageRefs.heroBaldo,
      body: toPortableText(eventi.body),
    },
    {
      _type: 'genericPage',
      title: palazzo.ganucciTitle,
      slug: { current: 'palazzo-cancellieri' },
      subtitle: 'Pistoia',
      lead: palazzo.ganucciLead,
      heroImage: imageRefs.heroInterior,
      body: toPortableText([
        "Il seicentesco Palazzo Ganucci Cancellieri è la splendida cornice che ospita Enoteca Baldo Vino e Bistrot Bibendum. Situato nel cuore del centro storico di Pistoia, le sue sale affrescate, i dettagli d'epoca e il suggestivo loggiato si fondono con la nostra proposta enogastronomica per offrire un'esperienza in cui storia e gusto si incontrano in perfetta armonia.",
        "Ogni ambiente, dalla sala ristorante al cortile estivo, è pensato per avvolgere gli ospiti in un'atmosfera elegante ma intima, rendendo omaggio alla nobile architettura pistoiese."
      ]),
    },
    {
      _type: 'genericPage',
      title: 'Menu',
      slug: { current: 'menu' },
      subtitle: 'Ristorante e bistrot',
      lead: 'Due identita gastronomiche, una visione comune: qualità della materia prima, precisione tecnica e stile di servizio.',
      heroImage: imageRefs.heroBaldo,
      hubCards: [
        {
          _key: 'b-v',
          kicker: 'Fine dining',
          title: 'Menu Baldo Vino',
          description: 'Percorsi degustazione e carta stagionale: cucina contemporanea con radici toscane, abbinamenti dedicati e attenzione ai dettagli di sala.',
          ctaLabel: 'Apri menu Baldo Vino',
          ctaHref: '/it/menu/baldo-vino/',
        },
        {
          _key: 'bib',
          kicker: 'Bistrot & wine bar',
          title: 'Menu Bibendum',
          description: 'Piatti conviviali e proposte da calice: una cucina agile e curata, pensata per pranzo, aperitivo, cena e dopocena.',
          ctaLabel: 'Apri menu Bibendum',
          ctaHref: '/it/menu/bibendum/',
        }
      ]
    },
    {
      _type: 'genericPage',
      title: 'Cantina',
      slug: { current: 'cantina' },
      subtitle: 'Vini e champagne',
      lead: "La cantina e' il cuore del progetto Baldo Vino: ampiezza, ricerca e abbinamento al servizio dell'esperienza a tavola.",
      body: toPortableText([
        "Oltre 3.000 referenze, selezione continua e attenzione agli Champagne: due percorsi distinti, uno per il ristorante e uno per il bistrot."
      ]),
      hubCards: [
        {
          _key: 'b-v-cantina',
          kicker: 'Ristorante gourmet',
          title: 'Cantina Baldo Vino',
          description: 'Collezione ampia e verticale, pensata per il servizio di sala e i percorsi degustazione.',
          ctaLabel: 'Esplora la cantina',
          ctaHref: '/it/cantina/baldo-vino/',
        },
        {
          _key: 'bib-cantina',
          kicker: 'Wine bar · bistrot',
          title: 'Cantina Bibendum',
          description: 'Selezione dinamica al calice e in bottiglia, orientata alla convivialita\' e agli abbinamenti bistrot.',
          ctaLabel: 'Scopri Bibendum',
          ctaHref: '/it/cantina/bibendum/',
        }
      ]
    }
  ];

  for (const page of genericPages) {
    console.log(`Saving Generic Page: ${page.title}`);
    await client.createOrReplace({ ...page, _id: `page-${page.slug.current}` } as any);
  }

  // 3. Venue Pages
  const baldoRefImageMap = (url: string) => {
    if (url.includes('7723')) return imageRefs.heroBaldo;
    if (url.includes('7728')) return imageRefs.heroInterior;
    if (url.includes('bibendum')) return imageRefs.heroBibendum;
    return null;
  };

  const venuePages = [
    {
      _type: 'venuePage',
      _id: 'page-baldo-vino',
      title: 'Ristorante Baldo Vino',
      slug: { current: 'baldo-vino' },
      subtitle: 'Enoteca — Ristorante gourmet a Pistoia',
      lead: baldoVenuePage.introLead,
      heroImage: imageRefs.heroBaldo,
      chapters: baldoVenuePage.chapters.map((ch, i) => ({
        _key: `baldo-ch-${i}`,
        ...ch,
        image: baldoRefImageMap(ch.image as unknown as string),
      })),
    },
    {
      _type: 'venuePage',
      _id: 'page-bibendum',
      title: 'Bibendum',
      slug: { current: 'bibendum' },
      subtitle: 'Bistrot — Wine bar',
      lead: bibendumVenuePage.introLead,
      heroImage: imageRefs.heroBibendum,
      chapters: bibendumVenuePage.chapters.map((ch, i) => ({
        _key: `bib-ch-${i}`,
        ...ch,
        tone: ch.tone || 'default',
        image: baldoRefImageMap(ch.image as unknown as string),
      })),
    }
  ];

  for (const venue of venuePages) {
    console.log(`Saving Venue Page: ${venue.title}`);
    await client.createOrReplace(venue as any);
  }

  console.log(`Saving Homepage...`);
  await client.createOrReplace({
    _type: 'homepage',
    _id: 'homepage',
    heroTitle: 'Enoteca Baldo Vino',
    heroSubtitle: 'Ristorante e Bistrot a Pistoia',
    heroLead: 'Due anime nello stesso palazzo d’epoca: il ristorante gourmet per i grandi percorsi degustazione, il bistrot Bibendum per il convivio quotidiano.',
    heroImage: imageRefs.heroBaldo,
    manifesto: 'Siamo guidati dalla passione per l\'alta cucina e per le grandissime etichette. Entrare da noi significa intraprendere un viaggio sensoriale tra i sapori della Toscana contemporanea.',
    quote: 'Il vino prepara i cuori e li rende più pronti alla passione.',
    quoteAuthor: 'Ovidio',
    
    baldoTeaserTitle: 'Baldo Vino',
    baldoTeaserKicker: 'Il Ristorante',
    baldoTeaser: 'Un\'esperienza di fine dining dove tecnica, estetica ed eccellenza delle materie prime toscane si fondono per dar vita a menu memorabili.',
    baldoImage: imageRefs.heroBaldo,
    
    bibendumTeaserTitle: 'Bibendum',
    bibendumTeaserKicker: 'Wine bar e Bistrot',
    bibendumTeaser: 'La giusta atmosfera per un aperitivo, una pausa pranzo veloce o un cocktail dopo cena, accompagnati da piatti sfiziosi e calici in continua evoluzione.',
    bibendumImage: imageRefs.heroBibendum,
    
    eventiTitle: 'Eventi Privati',
    eventiTeaser: 'Gli spazi di Palazzo Ganucci Cancellieri si adattano perfettamente a qualsiasi cerimonia, cena di gala o evento aziendale, con menu dedicati e cura minuziosa di ogni dettaglio.',
    eventiImage: imageRefs.heroInterior,
    
    cantinaTitle: 'La Cantina',
    cantinaLead: 'Il vero fulcro della nostra proposta: oltre 3.000 referenze provenienti dall\'Italia, dalla Francia e dal resto del mondo, custodite con cura.',
    cantinaPoints: [
      'Oltre 3.000 etichette attentamente selezionate',
      'Grande profondità e verticali di Champagne',
      'Artigiani del vino e grandi maison storiche'
    ],
    
    legalNote: '© 2026 Enoteca Baldo Vino. Tutti i diritti riservati. P.IVA 0123456789. Made with ❤️ in Pistoia.'
  });


  // 5. Sample Menu Items for Baldo Vino
  const sampleMenus = [
    // Baldo Vino
    {
      _type: 'menuItem',
      nome: 'Uovo cotto a 65°',
      descrizione: 'Fonduta di Parmigiano Reggiano 36 mesi, tartufo nero pregiato, spuma di patate.',
      prezzo: 22,
      categoria: 'Antipasti',
      allergeni: ['Uova', 'Latte'],
      cantina: 'baldo-vino'
    },
    {
      _type: 'menuItem',
      nome: 'Risotto Carnaroli Riserva',
      descrizione: 'Zafferano in pistilli, ragout di faraona, fondo bruno.',
      prezzo: 24,
      categoria: 'Primi Piatti',
      allergeni: ['Latte', 'Sedano', 'Solfiti'],
      cantina: 'baldo-vino'
    },
    {
      _type: 'menuItem',
      nome: 'Piccione in due cotture',
      descrizione: 'Petto rosato, coscia confit, bietoline saltate e salsa ai mirtilli rossi.',
      prezzo: 38,
      categoria: 'Secondi Piatti',
      allergeni: ['Solfiti'],
      cantina: 'baldo-vino'
    },
    {
      _type: 'menuItem',
      nome: 'Millefoglie destrutturata',
      descrizione: 'Crema chantilly alla vaniglia Bourbon, sfoglia caramellata, lamponi freschi.',
      prezzo: 14,
      categoria: 'Dolci',
      allergeni: ['Glutine', 'Uova', 'Latte'],
      cantina: 'baldo-vino'
    },
    
    // Bibendum
    {
      _type: 'menuItem',
      nome: 'Tagliere di salumi e formaggi',
      descrizione: 'Selezione di affettati artigianali toscani, pecorini affinati, confetture locali.',
      prezzo: 20,
      categoria: 'Antipasti',
      allergeni: ['Latte'],
      cantina: 'bibendum'
    },
    {
      _type: 'menuItem',
      nome: 'Pici Cacio e Pepe',
      descrizione: 'Pasta fresca artigianale, pepe nero tostato, crema di pecorino romano.',
      prezzo: 18,
      categoria: 'Primi Piatti',
      allergeni: ['Glutine', 'Latte'],
      cantina: 'bibendum'
    },
    {
      _type: 'menuItem',
      nome: 'Tataki di Tonno',
      descrizione: 'Sesamo tostato, maionese al wasabi, cipolla in agrodolce.',
      prezzo: 26,
      categoria: 'Secondi Piatti',
      allergeni: ['Pesce', 'Sesamo', 'Soia'],
      cantina: 'bibendum'
    },
    {
      _type: 'menuItem',
      nome: 'Tiramisù al bicchiere',
      descrizione: 'Savoiardi bagnati al caffè arabica, crema al mascarpone, cacao amaro.',
      prezzo: 9,
      categoria: 'Dolci',
      allergeni: ['Glutine', 'Uova', 'Latte'],
      cantina: 'bibendum'
    }
  ];

  for (const menu of sampleMenus) {
    console.log(`Saving Menu: ${menu.nome}`);
    await client.create(menu as any);
  }

  // 6. Sample Wines
  const sampleWines = [
    // Baldo Vino (Premium section)
    {
      _type: 'wine',
      nome: 'Cuvée Speciale',
      produttore: 'Maison Pol Roger',
      regione: 'Champagne',
      paese: 'Francia',
      annata: '2015',
      prezzo: 160,
      categoria: 'champagne',
      cantina: 'baldo-vino',
      descrizione: 'Uno champagne elegante con perlage finissimo, note di crosta di pane e agrumi.',
      inEvidenza: true
    },
    {
      _type: 'wine',
      nome: 'Tignanello',
      produttore: 'Marchesi Antinori',
      regione: 'Toscana',
      paese: 'Italia',
      annata: '2020',
      prezzo: 140,
      categoria: 'rossi',
      cantina: 'baldo-vino',
      descrizione: 'Iconico Supertuscan con profumi di frutta rossa matura, cuoio e vaniglia.',
      inEvidenza: true
    },
    {
      _type: 'wine',
      nome: 'Cervaro della Sala',
      produttore: 'Castello della Sala',
      regione: 'Umbria',
      paese: 'Italia',
      annata: '2021',
      prezzo: 85,
      categoria: 'bianchi',
      cantina: 'baldo-vino',
      descrizione: 'Chardonnay complesso parzialmente fermentato in legno. Avvolgente e sapido.',
      inEvidenza: false
    },
  
    // Bibendum
    {
      _type: 'wine',
      nome: 'Chianti Classico Riserva',
      produttore: 'Fèlsina',
      regione: 'Toscana',
      paese: 'Italia',
      annata: '2019',
      prezzo: 45,
      categoria: 'rossi',
      cantina: 'bibendum',
      descrizione: 'Sangiovese in purezza, grande beva con tannini eleganti e scorrevoli.',
      inEvidenza: true
    },
    {
      _type: 'wine',
      nome: 'Vermentino Bolgheri',
      produttore: 'Tenuta Guado al Tasso',
      regione: 'Toscana',
      paese: 'Italia',
      annata: '2022',
      prezzo: 35,
      categoria: 'bianchi',
      cantina: 'bibendum',
      descrizione: 'Fresco e minerale, perfetto per l\'aperitivo o abbinamento con piatti leggeri.',
      inEvidenza: true
    },
    {
      _type: 'wine',
      nome: 'Franciacorta Brut',
      produttore: 'Ca\' del Bosco',
      regione: 'Lombardia',
      paese: 'Italia',
      annata: 'NV',
      prezzo: 55,
      categoria: 'champagne',
      cantina: 'bibendum',
      descrizione: 'Metodo classico italiano per eccellenza, bollicina croccante e finale pulito.',
      inEvidenza: false
    }
  ];

  for (const wine of sampleWines) {
    console.log(`Saving Wine: ${wine.nome}`);
    await client.create(wine as any);
  }

  console.log('✅ Seeding complete!');
}

seed().catch(console.error);
