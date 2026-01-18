import { TrendInfo } from '@/vitruveo/components/trend/trend-info';
import { TrendExample } from '@/vitruveo/components/trend/trend-example';

export const metadata = {
  title: 'Trend - Protocol Smart Contracts - Vitruveo',
  description: 'OLS regression and volatility analysis at the protocol level.',
};

export default function TrendPage() {
  return (
    <div className="container py-4">
      <TrendInfo />
      <TrendExample />
    </div>
  );
}
