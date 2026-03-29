import { defineField, defineType } from 'sanity';

export const venuePageSchema = defineType({
  name: 'venuePage',
  title: 'Venue Page',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
    defineField({ name: 'lead', title: 'Lead Text', type: 'text' }),
    defineField({ name: 'heroImage', title: 'Hero Image', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'chapters',
      title: 'Chapters',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'kicker', title: 'Kicker', type: 'string' },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'paragraphs', title: 'Paragraphs', type: 'array', of: [{ type: 'string' }] },
            { name: 'highlights', title: 'Highlights', type: 'array', of: [{ type: 'string' }] },
            { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
            { name: 'reverse', title: 'Reverse Layout', type: 'boolean', initialValue: false },
            {
              name: 'tone',
              title: 'Tone',
              type: 'string',
              options: { list: ['default', 'dark', 'soft'] },
              initialValue: 'default',
            },
            {
              name: 'cta',
              title: 'Call to Action',
              type: 'object',
              fields: [
                { name: 'label', type: 'string', title: 'Label' },
                { name: 'href', type: 'string', title: 'URL' },
              ],
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'slug.current', media: 'heroImage' },
  },
});
