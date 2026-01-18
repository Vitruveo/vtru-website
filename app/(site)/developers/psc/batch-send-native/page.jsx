import { BatchSendNativeInfo } from '@/vitruveo/components/batch-send-native/batch-send-native-info';
import { BatchSendNativeExample } from '@/vitruveo/components/batch-send-native/batch-send-native-example';

export const metadata = {
  title: 'BatchSendNative - Protocol Smart Contracts - Vitruveo',
  description: 'Send VTRU to multiple recipients in one transaction.',
};

export default function BatchSendNativePage() {
  return (
    <div className="container py-4">
      <BatchSendNativeInfo />
      <BatchSendNativeExample />
    </div>
  );
}
