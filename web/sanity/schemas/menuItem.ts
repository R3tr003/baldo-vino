import { defineField, defineType } from 'sanity';

export const menuItemSchema = defineType({
  name: 'menuItem',
  title: 'Menu Item',
  type: 'document',
  fields: [
    defineField({ name: 'nome', title: 'Nome', type: 'string' }),
    defineField({ name: 'descrizione', title: 'Descrizione', type: 'text' }),
    defineField({ name: 'prezzo', title: 'Prezzo (€)', type: 'number' }),
    defineField({ name: 'categoria', title: 'Categoria', type: 'string' }),
    defineField({
      name: 'allergeni',
      title: 'Allergeni',
      type: 'array',
      of: [{ type: 'string' }],
    }),
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
    select: { title: 'nome', subtitle: 'categoria' },
  },
});
