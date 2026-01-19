import { CompoundInterestHeader } from '@/vitruveo/components/compound-interest/compound-interest-header';
import { CompoundInterestExample } from '@/vitruveo/components/compound-interest/compound-interest-example';
import { CompoundInterestInfo } from '@/vitruveo/components/compound-interest/compound-interest-info';

export const metadata = {
  title: 'Compound Interest - Protocol Smart Contracts - Vitruveo',
  description: 'High-precision compound interest calculation for DeFi.',
};

export default function CompoundInterestPage() {
  return (
    <div className="container py-4">
      <CompoundInterestHeader />
      <CompoundInterestExample />
      <CompoundInterestInfo />
    </div>
  );
}
