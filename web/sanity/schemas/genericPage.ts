import { defineField, defineType } from 'sanity';

export const genericPageSchema = defineType({
  name: 'genericPage',
  title: 'Generic Page',
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
      name: 'body',
      title: 'Body Text',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'hubCards',
      title: 'Hub Cards',
      description: 'Optional links for hub pages like Menu or Cantina',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'kicker', title: 'Kicker', type: 'string' },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
            { name: 'ctaLabel', title: 'CTA Label', type: 'string' },
            { name: 'ctaHref', title: 'CTA Link', type: 'string' },
            { name: 'tone', title: 'Tone', type: 'string', options: { list: ['light', 'dark', 'soft'] } },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'slug.current', media: 'heroImage' },
  },
});
