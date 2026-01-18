import { BatchSendErc20Info } from '@/vitruveo/components/batch-send-erc20/batch-send-erc20-info';
import { BatchSendErc20Example } from '@/vitruveo/components/batch-send-erc20/batch-send-erc20-example';

export const metadata = {
  title: 'BatchSendERC20 - Protocol Smart Contracts - Vitruveo',
  description: 'Send ERC20 tokens to multiple recipients in one transaction.',
};

export default function BatchSendErc20Page() {
  return (
    <div className="container py-4">
      <BatchSendErc20Info />
      <BatchSendErc20Example />
    </div>
  );
}
