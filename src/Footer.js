import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <p>Impressum: Your Impressum Information</p>
                <p>&copy; {new Date().getFullYear()} Your Company Name</p>
            </div>
        </footer>
    );
};

export default Footer;