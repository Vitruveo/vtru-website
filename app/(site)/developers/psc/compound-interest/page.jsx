import { CompoundInterestInfo } from '@/vitruveo/components/compound-interest/compound-interest-info';
import { CompoundInterestExample } from '@/vitruveo/components/compound-interest/compound-interest-example';

export const metadata = {
  title: 'CompoundInterest - Protocol Smart Contracts - Vitruveo',
  description: 'High-precision compound interest calculation for DeFi.',
};

export default function CompoundInterestPage() {
  return (
    <div className="container py-4">
      <CompoundInterestInfo />
      <CompoundInterestExample />
    </div>
  );
}
