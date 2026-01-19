import { IbcHeader } from '@/vitruveo/components/ibc/ibc-header';
import { IbcExample } from '@/vitruveo/components/ibc/ibc-example';
import { IbcInfo } from '@/vitruveo/components/ibc/ibc-info';

export const metadata = {
  title: 'Inter-Blockchain Communication - Protocol Smart Contracts - Vitruveo',
  description: 'Cosmos IBC light client for cross-chain state verification.',
};

export default function IbcPage() {
  return (
    <div className="container py-4">
      <IbcHeader />
      <IbcExample />
      <IbcInfo />
    </div>
  );
}
