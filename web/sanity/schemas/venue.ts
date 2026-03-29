import { defineField, defineType } from 'sanity';

export const venueSchema = defineType({
  name: 'venue',
  title: 'Venue',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' } }),
    defineField({ name: 'kicker', title: 'Kicker', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'heroImage', title: 'Hero Image', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({ name: 'orari', title: 'Orari', type: 'text' }),
    defineField({ name: 'telefono', title: 'Telefono', type: 'string' }),
    defineField({ name: 'indirizzo', title: 'Indirizzo', type: 'string' }),
  ],
  preview: { select: { title: 'name', media: 'heroImage' } },
});
