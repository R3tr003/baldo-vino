export const homepageQuery = `*[_type == "homepage"][0]{
  heroTitle,
  heroSubtitle,
  heroLead,
  heroImage,
  manifesto,
  quote,
  quoteAuthor,
  baldoTeaserTitle,
  baldoTeaserKicker,
  baldoTeaser,
  baldoImage,
  bibendumTeaserTitle,
  bibendumTeaserKicker,
  bibendumTeaser,
  bibendumImage,
  eventiTitle,
  eventiTeaser,
  eventiImage,
  cantinaTitle,
  cantinaLead,
  cantinaPoints,
  legalNote,
}`;

export const winesBaldoQuery = `*[_type == "wine" && cantina == "baldo-vino"] | order(categoria asc) {
  "id": _id,
  nome,
  produttore,
  regione,
  paese,
  annata,
  prezzo,
  categoria,
  inEvidenza,
  descrizione,
}`;

export const winesBibendumQuery = `*[_type == "wine" && cantina == "bibendum"] | order(categoria asc) {
  "id": _id,
  nome,
  produttore,
  regione,
  paese,
  annata,
  prezzo,
  categoria,
  inEvidenza,
  descrizione,
}`;

export const venueQuery = (slug: string) =>
  `*[_type == "venue" && slug.current == "${slug}"][0]{
    name,
    slug,
    kicker,
    description,
    heroImage,
    gallery,
    orari,
    telefono,
    indirizzo,
  }`;

export const genericPageQuery = (slug: string) =>
  `*[_type == "genericPage" && slug.current == "${slug}"][0]`;

export const venuePageQuery = (slug: string) =>
  `*[_type == "venuePage" && slug.current == "${slug}"][0]`;
