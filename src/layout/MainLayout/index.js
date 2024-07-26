import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ScrollTop from '../../components/third-party/ScrollTop';

const MainLayout = () => (
    <>
        <Navbar />
        <ScrollTop>
            <Outlet />
        </ScrollTop>
        <Footer />
    </>
);

export default MainLayout;