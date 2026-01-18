import { BatchBalanceNativeInfo } from '@/vitruveo/components/batch-balance-native/batch-balance-native-info';
import { BatchBalanceNativeExample } from '@/vitruveo/components/batch-balance-native/batch-balance-native-example';

export const metadata = {
  title: 'BatchBalanceNative - Protocol Smart Contracts - Vitruveo',
  description: 'Query native VTRU plus ERC20 balances in one call.',
};

export default function BatchBalanceNativePage() {
  return (
    <div className="container py-4">
      <BatchBalanceNativeInfo />
      <BatchBalanceNativeExample />
    </div>
  );
}
