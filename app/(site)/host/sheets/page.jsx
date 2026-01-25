import { SheetsExample } from '@/vitruveo/components/host';

export const metadata = {
  title: 'Smart Contract Updates Google Sheets - HOST - Vitruveo',
  description: 'A smart contract writes data directly to a Google Sheet via HOST.',
};

export default function SheetsPage() {
  return (
    <div className="container py-4" style={{ marginTop: '60px' }}>
      <SheetsExample />
    </div>
  );
}
