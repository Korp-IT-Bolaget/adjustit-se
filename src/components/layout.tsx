import SiteHeader from '@/components/ui/site-header';
import { Outlet } from 'react-router-dom';
import SiteFooter from './ui/site-footer';

export default function Layout() {
  return (
    <div className="flex flex-col overflow-hidden text-strong">
      <SiteHeader />
      <main className="flex flex-col flex-1 min-h-screen">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}