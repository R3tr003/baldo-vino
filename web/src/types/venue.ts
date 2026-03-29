export interface VenueChapter {
  kicker: string;
  title: string;
  paragraphs: string[];
  highlights?: string[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
  tone?: 'light' | 'dark';
  cta?: { href: string; label: string };
}
