import 'bootstrap/dist/css/bootstrap.min.css';
import './site.css';
import { SiteLayout } from '@/components/site/site-layout';

export default function Layout({ children }) {
  return <SiteLayout>{children}</SiteLayout>;
}
