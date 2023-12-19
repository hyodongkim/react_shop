import { Outlet } from 'react-router-dom';
import Header from '../sections/Header';
import Footer from '../sections/Footer';

export default function Layout() {
  return (
    <div className="mw">
      <Header />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}
