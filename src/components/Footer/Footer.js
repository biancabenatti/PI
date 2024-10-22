import React from 'react';
import './Footer.css';
import Logo from '../../assets/Logo.png';

const Footer = () => {
    return (
        <footer class="footer">
            <div class="footer-content">
                <img src={Logo} alt="Logo" class="footer-logo" />
                <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                <p>© 2024 Farj-Br. Todos os direitos reservados.</p>
            </div>
        </footer>

    )
}

export default Footer;