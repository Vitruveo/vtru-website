import { HostInfo } from '@/vitruveo/components/host/host-info';
import { HostExample } from '@/vitruveo/components/host/host-example';

export const metadata = {
  title: 'HOST - Protocol Smart Contracts - Vitruveo',
  description: 'HTTP Outbound Service Trigger. Smart contracts that trigger external webhooks.',
};

export default function HostPage() {
  return (
    <div className="container py-4">
      <HostInfo />
      <HostExample />
    </div>
  );
}
