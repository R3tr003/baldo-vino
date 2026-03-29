import { defineField, defineType } from 'sanity';

export const wineSchema = defineType({
  name: 'wine',
  title: 'Vino',
  type: 'document',
  fields: [
    defineField({ name: 'nome', title: 'Nome', type: 'string' }),
    defineField({ name: 'produttore', title: 'Produttore', type: 'string' }),
    defineField({ name: 'regione', title: 'Regione', type: 'string' }),
    defineField({ name: 'paese', title: 'Paese', type: 'string' }),
    defineField({ name: 'annata', title: 'Annata', type: 'string' }),
    defineField({ name: 'prezzo', title: 'Prezzo (€)', type: 'number' }),
    defineField({
      name: 'categoria',
      title: 'Categoria',
      type: 'string',
      options: {
        list: [
          { title: 'Champagne & Spumanti', value: 'champagne' },
          { title: 'Vini Bianchi', value: 'bianchi' },
          { title: 'Vini Rossi', value: 'rossi' },
          { title: 'Vini Rosati', value: 'rosati' },
          { title: 'Fine Pasto', value: 'finepasto' },
          { title: 'Distillati', value: 'distillati' },
          { title: 'Al Bicchiere', value: 'bicchiere' },
        ],
        layout: 'radio',
      },
    }),
    defineField({ name: 'inEvidenza', title: 'In Evidenza', type: 'boolean', initialValue: false }),
    defineField({ name: 'descrizione', title: 'Descrizione', type: 'text' }),
    defineField({
      name: 'cantina',
      title: 'Cantina',
      type: 'string',
      options: {
        list: [
          { title: 'Baldo Vino', value: 'baldo-vino' },
          { title: 'Bibendum', value: 'bibendum' },
        ],
        layout: 'radio',
      },
    }),
  ],
  preview: {
    select: { title: 'nome', subtitle: 'produttore' },
  },
});
