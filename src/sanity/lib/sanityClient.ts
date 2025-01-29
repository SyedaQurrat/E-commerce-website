import { createClient } from 'next-sanity';

export const sanityClient = createClient({
  projectId: '9074oi3u', // Replace with your project ID
  dataset: 'production', // Replace with your dataset name
  apiVersion: '2023-01-01', // API version
  useCdn: true, // Use CDN for faster loading in production
});
