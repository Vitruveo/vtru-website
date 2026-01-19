import { TrendHeader } from '@/vitruveo/components/trend/trend-header';
import { TrendExample } from '@/vitruveo/components/trend/trend-example';
import { TrendInfo } from '@/vitruveo/components/trend/trend-info';

export const metadata = {
  title: 'Trend - Protocol Smart Contracts - Vitruveo',
  description: 'OLS regression and volatility analysis at the protocol level.',
};

export default function TrendPage() {
  return (
    <div className="container py-4">
      <TrendHeader />
      <TrendExample />
      <TrendInfo />
    </div>
  );
}
