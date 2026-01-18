import { RngInfo } from '@/vitruveo/components/rng/rng-info';
import { RngExample } from '@/vitruveo/components/rng/rng-example';

export const metadata = {
  title: 'RNG - Protocol Smart Contracts - Vitruveo',
  description: 'Random number generation with protocol-level entropy.',
};

export default function RngPage() {
  return (
    <div className="container py-4">
      <RngInfo />
      <RngExample />
    </div>
  );
}
