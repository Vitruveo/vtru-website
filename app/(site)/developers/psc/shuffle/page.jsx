import { ShuffleInfo } from '@/vitruveo/components/shuffle/shuffle-info';
import { ShuffleExample } from '@/vitruveo/components/shuffle/shuffle-example';

export const metadata = {
  title: 'Shuffle - Protocol Smart Contracts - Vitruveo',
  description: 'Cryptographic 52-card deck shuffle using Fisher-Yates algorithm.',
};

export default function ShufflePage() {
  return (
    <div className="container py-4">
      <ShuffleInfo />
      <ShuffleExample />
    </div>
  );
}
