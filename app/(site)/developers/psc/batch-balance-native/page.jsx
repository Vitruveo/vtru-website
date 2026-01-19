import { BatchBalanceNativeInfo } from '@/vitruveo/components/batch-balance-native/batch-balance-native-info';

export const metadata = {
  title: 'Batch Balance Native - Protocol Smart Contracts - Vitruveo',
  description: 'Query native VTRU plus ERC20 balances in one call.',
};

export default function BatchBalanceNativePage() {
  return (
    <div className="container py-4">
      <BatchBalanceNativeInfo />
    </div>
  );
}
