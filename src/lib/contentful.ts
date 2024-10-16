// import contentful from 'contentful'

// export const contentfulClient = contentful.createClient({
//   space: import.meta.env.CONTENTFUL_SPACE_ID,
//   accessToken: import.meta.env.DEV
//     ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
//     : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
//   host: import.meta.env.DEV ? 'preview.contentful.com' : 'cdn.contentful.com',
// })

// // contentful.ts (continuation)
// export const fetchProjects = async () => {
//   const entries = await contentfulClient.getEntries({
//     content_type: 'projects', // Replace 'project' with your actual content type ID if it's different
//   });

//   return entries.items.map((item) => ({
//     heading: item.fields.title,
//     subheading: item.fields.description,
//     imagePath: item.fields.image.fields.file.url, 
//     href: item.fields.url,
//     altText: item.fields.title, // If you want to add an alt text for accessibility
//   }));
// };
