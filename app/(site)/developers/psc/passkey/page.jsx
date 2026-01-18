import { PasskeyInfo } from '@/vitruveo/components/passkey/passkey-info';
import { PasskeyExample } from '@/vitruveo/components/passkey/passkey-example';

export const metadata = {
  title: 'Passkey - Protocol Smart Contracts - Vitruveo',
  description: 'WebAuthn / P-256 signature verification for passwordless authentication.',
};

export default function PasskeyPage() {
  return (
    <div className="container py-4">
      <PasskeyInfo />
      <PasskeyExample />
    </div>
  );
}
