// import { createClient } from 'next-sanity'

// import { apiVersion, dataset, projectId } from '../env'

// export const client = createClient({
//   projectId,
//   dataset,
//   apiVersion,
//   useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
// })
// import sanityClient from '@sanity/client';

// export const client = sanityClient({
//   projectId: '<9074oi3u>',
//   dataset: 'production',
//   apiVersion: '2023-01-01',
//   useCdn: true,
// });


// import sanityClient from '@sanity/client';

// export const client = sanityClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
//   apiVersion: '2023-01-01',
//   useCdn: true, // Use CDN for faster response (only for public data)
//   token: process.env.SANITY_API_TOKEN, // Token for authenticated requests
// });


// // LAST STEP
// import { createClient } from '@sanity/client';

// export const sanityClient = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
//   useCdn: true, // Recommended for fast read queries
//   apiVersion: '2023-01-01', // Choose an appropriate API version
// });

// export const writeClient = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
//   token: process.env.SANITY_API_TOKEN!,
//   apiVersion: '2023-01-01',
// });




import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: true, 
  apiVersion: '2023-01-01', 
});

export default client;
