import { createClient } from '@sanity/client';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env.local') });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

async function testUpload() {
  try {
    const buffer = Buffer.from('test', 'utf8');
    const asset = await client.assets.upload('image', buffer, { filename: 'test.txt' });
    console.log('Upload successful:', asset._id);
  } catch (err: any) {
    console.error('Upload failed:', err.message || err);
  }
}

testUpload();
