import { AlphaExample } from '@/vitruveo/components/host';

export const metadata = {
  title: 'AI Agent Trigger - HOST Example - Vitruveo',
  description: 'Trigger an AI agent from a smart contract to process and respond to on-chain events.',
};

export default function AlphaPage() {
  return (
    <div className="container py-4">
      <AlphaExample />
    </div>
  );
}
