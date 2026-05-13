import { Outlet } from "react-router";
import { useState } from 'react';
import './Layout.css';

//Components
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import MembershipForm from '../MembershipForm/MembershipForm.jsx';

function Layout() {
    const [showMembershipForm, setShowMembershipForm] = useState(false);

    return (
        <>
            <Header
                onMembershipClick={() => setShowMembershipForm(true)} />
            {showMembershipForm && (
                <MembershipForm onClose={() => setShowMembershipForm(false)} />
            )}

            <main>
                <Outlet />
            </main>

            <Footer />
        </>
    )
}

export default Layout;