import Aside from '@/components/common/Aside';
import Footer from '@/components/common/Footer';
import { Outlet } from 'react-router';

export default function HomeLayout() {
  return (
    <>
      <div className="container">
        <Aside />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
}
