import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">Your Logo</div>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/leistungen">Leistungen</Link>
                <Link to="/team">Team</Link>
                <Link to="/kontakt">Kontakt</Link>
                <Link to="/referenzen">Referenzen</Link>
            </nav>
        </div>
    );
};

export default Header;