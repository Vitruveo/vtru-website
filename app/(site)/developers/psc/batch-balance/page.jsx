import { BatchBalanceInfo } from '@/vitruveo/components/batch-balance/batch-balance-info';

export const metadata = {
  title: 'Batch Balance - Protocol Smart Contracts - Vitruveo',
  description: 'Query multiple ERC20 balances in a single call.',
};

export default function BatchBalancePage() {
  return (
    <div className="container py-4">
      <BatchBalanceInfo />
    </div>
  );
}
