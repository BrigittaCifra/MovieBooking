import { Outlet } from "react-router";
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';

function Layout() {

    return (
        <>
            <Header />

            <main>
                <Outlet />
            </main>

            <Footer />
        </>
    )
}

export default Layout;