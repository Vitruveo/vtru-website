// HOST Example definitions - self-contained within vitruveo folder
// Each example has a slug, name, title, and description

export const HOST_EXAMPLES = [
  {
    slug: 'sheets',
    name: 'Sheets',
    title: 'Smart Contract Updates Google Sheets',
    description: 'A smart contract writes data directly to a Google Sheet via HOST.',
  },
  {
    slug: 'beta',
    name: 'Beta',
    title: 'Webhook Notification',
    description: 'Send real-time notifications to external services when contract events occur.',
  },
];

export function getExampleBySlug(slug) {
  return HOST_EXAMPLES.find(ex => ex.slug === slug);
}

export function getExampleSlugs() {
  return HOST_EXAMPLES.map(ex => ex.slug);
}
