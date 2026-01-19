import { RngHeader } from '@/vitruveo/components/rng/rng-header';
import { RngExample } from '@/vitruveo/components/rng/rng-example';
import { RngInfo } from '@/vitruveo/components/rng/rng-info';

export const metadata = {
  title: 'Random Number Generator - Protocol Smart Contracts - Vitruveo',
  description: 'Random number generation with protocol-level entropy.',
};

export default function RngPage() {
  return (
    <div className="container py-4">
      <RngHeader />
      <RngExample />
      <RngInfo />
    </div>
  );
}
