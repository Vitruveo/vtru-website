import { HostHeader } from '@/vitruveo/components/host/host-header';
import { HostExample } from '@/vitruveo/components/host/host-example';
import { HostInfo } from '@/vitruveo/components/host/host-info';

export const metadata = {
  title: 'HTTP Outbound Service Trigger - Protocol Smart Contracts - Vitruveo',
  description: 'Smart contracts that invoke AI agents and trigger agentic workflows during transaction execution.',
};

export default function HostPage() {
  return (
    <div className="container py-4">
      <HostHeader />
      <HostExample />
      <HostInfo />
    </div>
  );
}
