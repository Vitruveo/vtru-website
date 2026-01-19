import { HostInfo } from '@/vitruveo/components/host/host-info';

export const metadata = {
  title: 'HOST Protocol - Vitruveo',
  description: 'HTTP Outbound Service Trigger. Smart contracts that invoke AI agents and trigger agentic workflows during transaction execution.',
};

export default function HostPage() {
  return (
    <div className="container py-4">
      <HostInfo />
    </div>
  );
}
