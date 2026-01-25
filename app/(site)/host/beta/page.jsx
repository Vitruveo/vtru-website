import { BetaExample } from '@/vitruveo/components/host';

export const metadata = {
  title: 'Webhook Notification - HOST Example - Vitruveo',
  description: 'Send real-time notifications to external services when contract events occur.',
};

export default function BetaPage() {
  return (
    <div className="container py-4">
      <BetaExample />
    </div>
  );
}
