import { HostRequestGenerator } from '@/vitruveo/components/host';

export const metadata = {
  title: 'HOST Request Generator - Vitruveo',
  description: 'Generate and encrypt HOST requests to trigger AI agents and webhooks from smart contracts.',
};

export default function RequestGeneratorPage() {
  return (
    <section className="section-dark py-5">
      <div className="container" style={{ maxWidth: '900px' }}>
        <div className="text-center mb-5">
          <h1 className="text-white mb-3">HOST Request Generator</h1>
          <p className="text-muted-light">
            Securely generate and encrypt HOST requests for triggering webhooks and AI agents.
          </p>
        </div>
        <HostRequestGenerator />
      </div>
    </section>
  );
}
