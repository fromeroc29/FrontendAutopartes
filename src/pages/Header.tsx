import { useState } from 'react';
import { ShoppingCart, Phone, Search, User, Menu, X } from 'lucide-react';
import '../Header.css';
import toroLogo from '../assets/icons/toro.png';
import aguilaLogo from '../assets/icons/aguila.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Buscando:', searchQuery);
  };

  return (
    <header className="header-allaudio">
      <div className="header-top-container">
        <div className="header-content">
          {/* Botón de menú móvil */}
          <button
            className="mobile-menu-btn"
            onClick={toggleMenu}
            aria-label="Abrir menú"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Contenedor del logo centrado */}
<div className="logo-container">
  <img
    src={aguilaLogo}
    alt="Logo Aguila"
    className="aguila-logo"
  />
  <div className="logo-text">
    <h1>Autopartes del <span className="red-text">Norte</span></h1>
    <span>y</span>
    <h1>Autopartes <span className="red-text">Tres</span> Hermanos</h1>
  </div>
  <img
    src={toroLogo}
    alt="Logo Toro"
    className="toro-logo"
  /> 
</div>

          {/* Espacio vacío para balancear el botón de menú */}
          <div className="header-spacer"></div>
        </div>
      </div>

      {/* Menú de navegación inferior - VISIBLE EN WEB */}
      <nav className="header-nav">
        <div className="nav-container">
          <a href="#productos" className="nav-link">Vehiculos</a>
          <a href="#marcas" className="nav-link">Marcas</a>
          <a href="#conocenos" className="nav-link">Conócenos</a>
          <a href="#ofertas" className="nav-link">Ofertas</a>
          <a href="#ubicacion" className="nav-link">Información de contacto</a>
        </div>
      </nav>

      {/* Menú móvil - SOLO VISIBLE EN MÓVIL */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-search">
            <form onSubmit={handleSearch}>
              <div className="search-box">
                <input
                  type="text"
                  placeholder="Buscar autopartes..."
                  className="search-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-btn">
                  <Search size={18} />
                </button>
              </div>
            </form>
          </div>

          <div className="mobile-nav">
            <a href="#productos" className="mobile-nav-item">Vehiculos</a>
            <a href="#marcas" className="mobile-nav-item">Marcas</a>
            <a href="#conocenos" className="mobile-nav-item">Conócenos</a>
            <a href="#ofertas" className="mobile-nav-item">Ofertas</a>
            <a href="#ubicacion" className="mobile-nav-item">Información de contacto</a>
            {/* <a href="#contacto" className="mobile-nav-item">
              <Phone size={16} /> Contacto
            </a> */}
          </div>
        </div>
      )}
    </header>
  );
}