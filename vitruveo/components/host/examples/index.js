// HOST Example definitions - self-contained within vitruveo folder
// Each example has a slug, name, title, and description

export const HOST_EXAMPLES = [
  {
    slug: 'alpha',
    name: 'Alpha',
    title: 'AI Agent Trigger',
    description: 'Trigger an AI agent from a smart contract to process and respond to on-chain events.',
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
