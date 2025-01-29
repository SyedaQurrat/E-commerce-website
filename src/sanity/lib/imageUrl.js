import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Sanity client setup
const sanityClient = createClient({
  projectId: '9074oi3u', 
  dataset: 'production',     
  apiVersion: '2023-01-01',    
  useCdn: true,
});

// Image URL Builder
const builder = imageUrlBuilder(sanityClient);

export function urlFor(source) {
  return builder.image(source);
}
