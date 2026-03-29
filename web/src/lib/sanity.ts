
import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production';

// projectId valido: solo a-z, 0-9 e trattini
const isConfigured = /^[a-z0-9-]+$/.test(projectId);

export const client = isConfigured
  ? createClient({
    projectId,
    dataset,
    apiVersion: '2024-01-01',
    useCdn: true,
  })
  : null;

const builder = isConfigured && client ? createImageUrlBuilder(client) : null;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!builder) return { url: () => '' } as any;
  return builder.image(source);
}
