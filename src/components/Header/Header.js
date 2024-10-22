import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import './Header.css';
import Logo from '../../assets/Logo.png';

const Header = () => {
  return (
    <div id="home">
      <header className="header">
        <img src={Logo} alt="Logo da Empresa" className="logo-image" />
        <nav className="nav">
          <ul className="nav-list">
            <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
            <li><Link to="tips" smooth={true} duration={500}>Dicas</Link></li>
            <li><Link to="how-it-work-section" smooth={true} duration={500}>Como Funciona</Link></li>
            <li><Link to="about-us-section" smooth={true} duration={500}>Sobre Nós</Link></li>
            <li><Link to="faq-section" smooth={true} duration={500}>FAQ</Link></li>
            <li><RouterLink to="/login" className="login-button">Login</RouterLink></li>
            <li><RouterLink to="/register" className="register-button">Cadastre-se</RouterLink></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;

