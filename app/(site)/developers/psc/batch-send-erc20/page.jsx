import { BatchSendErc20Info } from '@/vitruveo/components/batch-send-erc20/batch-send-erc20-info';

export const metadata = {
  title: 'Batch Send ERC20 - Protocol Smart Contracts - Vitruveo',
  description: 'Send ERC20 tokens to multiple recipients in one transaction.',
};

export default function BatchSendErc20Page() {
  return (
    <div className="container py-4">
      <BatchSendErc20Info />
    </div>
  );
}
