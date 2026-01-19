import { BatchSendNativeInfo } from '@/vitruveo/components/batch-send-native/batch-send-native-info';

export const metadata = {
  title: 'Batch Send Native - Protocol Smart Contracts - Vitruveo',
  description: 'Send VTRU to multiple recipients in one transaction.',
};

export default function BatchSendNativePage() {
  return (
    <div className="container py-4">
      <BatchSendNativeInfo />
    </div>
  );
}
