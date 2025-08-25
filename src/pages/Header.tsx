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
          {/* Logo a la izquierda */}
          <div className="header-logo">
            <button
              className="mobile-menu-btn"
              onClick={toggleMenu}
              aria-label="Abrir menú"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>


            <div className="logo-container">
              {/* Imagen del toro - asegúrate de tener la ruta correcta */}
              <img
                src={toroLogo}
                alt="Logo Toro"
                className="toro-logo"
              /> 
              <h1>
                Autopartes<span className="brand-accent"> Tres Hermanos</span>
              </h1>
            </div>
          </div>

          {/* Barra de búsqueda en el centro */}
          <div className="header-search">
            <form onSubmit={handleSearch} className="search-form">
              <div className="search-box">
                <input
                  type="text"
                  placeholder="Buscar autopartes, marcas..."
                  className="search-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="submit"
                  className="search-btn"
                  aria-label="Buscar"
                >
                  <Search size={18} />
                </button>
              </div>
            </form>
          </div>

          {/* Iconos a la derecha */}
          <div className="header-actions">
            <a href="#contacto" className="action-item">
              <Phone size={22} />
              <span>Contacto</span>
            </a>

            <a href="#cuenta" className="action-item">
              <User size={22} />
              <span>Cuenta</span>
            </a>

            <button className="cart-btn">
              <ShoppingCart size={22} />
              <span>Carrito</span>
              <span className="cart-count">3</span>
            </button>
          <img
            src={aguilaLogo}
            alt="Logo Aguila"
            className="aguila-logo"
          />
          </div>


        </div>
      </div>

      {/* Menú de navegación inferior */}
      <nav className="header-nav" style={{ padding: '10px 0', backgroundColor: '#e7ddddff' }}>
        <div className="nav-container">
          <a href="#productos" className="nav-link">Productos Destacados</a>
          <a href="#marcas" className="nav-link">Marcas</a>
          <a href="#categorias" className="nav-link">Categorías</a>
          <a href="#ofertas" className="nav-link">Ofertas</a>
          <a href="#conocenos" className="nav-link">Conócenos</a>
          <a href="#ubicacion" className="nav-link">Como llegar</a>

        </div>
      </nav>

      {/* Menú móvil */}
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
            <a href="#productos" className="mobile-nav-item">Productos Destacados</a>
            <a href="#marcas" className="mobile-nav-item">Marcas</a>
            <a href="#categorias" className="mobile-nav-item">Categorías</a>
            <a href="#ofertas" className="mobile-nav-item">Ofertas</a>
            <a href="#conocenos" className="mobile-nav-item">Conócenos</a>
            <a href="#ubicacion" className="mobile-nav-item">Como llegar</a>
            <a href="#contacto" className="mobile-nav-item">
              <Phone size={16} /> Contacto
            </a>
          </div>
        </div>
      )}
    </header>
  );
}