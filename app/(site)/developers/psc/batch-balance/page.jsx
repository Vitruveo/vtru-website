import { BatchBalanceInfo } from '@/vitruveo/components/batch-balance/batch-balance-info';
import { BatchBalanceExample } from '@/vitruveo/components/batch-balance/batch-balance-example';

export const metadata = {
  title: 'BatchBalance - Protocol Smart Contracts - Vitruveo',
  description: 'Query multiple ERC20 balances in a single call.',
};

export default function BatchBalancePage() {
  return (
    <div className="container py-4">
      <BatchBalanceInfo />
      <BatchBalanceExample />
    </div>
  );
}
