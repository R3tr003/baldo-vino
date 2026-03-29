export type WineCategory =
  | 'champagne'
  | 'bianchi'
  | 'rossi'
  | 'rosati'
  | 'finepasto'
  | 'distillati'
  | 'bicchiere';

export interface Wine {
  id: number;
  nome: string;
  produttore: string;
  regione: string;
  paese: string;
  annata: string;
  prezzo: number;
  categoria: WineCategory;
  inEvidenza: boolean;
  descrizione: string;
}

export const CATEGORY_LABELS: Record<WineCategory | 'tutti', string> = {
  tutti: 'Tutti',
  champagne: 'Champagne & Spumanti',
  bianchi: 'Vini Bianchi',
  rossi: 'Vini Rossi',
  rosati: 'Vini Rosati',
  finepasto: 'Fine Pasto',
  distillati: 'Distillati',
  bicchiere: 'Al Bicchiere',
};
