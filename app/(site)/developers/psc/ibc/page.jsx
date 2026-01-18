import { IbcInfo } from '@/vitruveo/components/ibc/ibc-info';
import { IbcExample } from '@/vitruveo/components/ibc/ibc-example';

export const metadata = {
  title: 'IBC - Protocol Smart Contracts - Vitruveo',
  description: 'Cosmos IBC light client for cross-chain state verification.',
};

export default function IbcPage() {
  return (
    <div className="container py-4">
      <IbcInfo />
      <IbcExample />
    </div>
  );
}
