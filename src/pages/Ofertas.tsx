import '../Ofertas.css';
import { useState, useEffect } from 'react';

// Datos de las ofertas en un arreglo
const ofertasData = [
  {
    id: 1,
    descuento: "30% OFF",
    categoria: "Frenos de Disco",
    titulo: "Kit de Frenos Completo",
    descripcion: "Discos, pastillas y pinzas para la mayoría de modelos",
    precioAnterior: 1200.00,
    precioNuevo: 840.00,
    imagen: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    descuento: "25% OFF",
    categoria: "Filtros",
    titulo: "Paquete de Filtros",
    descripcion: "Aceite, aire, combustible y habitáculo",
    precioAnterior: 800.00,
    precioNuevo: 600.00,
    imagen: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    descuento: "40% OFF",
    categoria: "Baterías",
    titulo: "Batería Premium",
    descripcion: "Batería de 60 meses de garantía",
    precioAnterior: 2500.00,
    precioNuevo: 1500.00,
    imagen: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    descuento: "15% OFF",
    categoria: "Aceites",
    titulo: "Aceite Sintético",
    descripcion: "Aceite 100% sintético 5W-30",
    precioAnterior: 350.00,
    precioNuevo: 297.50,
    imagen: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    descuento: "20% OFF",
    categoria: "Amortiguadores",
    titulo: "Juego de Amortiguadores",
    descripcion: "Amortiguadores delanteros y traseros",
    precioAnterior: 3800.00,
    precioNuevo: 3040.00,
    imagen: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    descuento: "OFERTA EXCLUSIVA",
    categoria: "Kit de Herramientas",
    titulo: "Kit Mecánico Profesional",
    descripcion: "124 piezas con estuche de almacenamiento",
    precioAnterior: 4200.00,
    precioNuevo: 3360.00,
    imagen: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  }
];

function Ofertas() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  const updateItemsToShow = () => {
    if (window.innerWidth < 768) {
      setItemsToShow(1);
    } else if (window.innerWidth < 1024) {
      setItemsToShow(2);
    } else {
      setItemsToShow(3);
    }
  };

  useEffect(() => {
    updateItemsToShow();
    window.addEventListener('resize', updateItemsToShow);
    
    return () => {
      window.removeEventListener('resize', updateItemsToShow);
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsToShow >= ofertasData.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? ofertasData.length - itemsToShow : prevIndex - 1
    );
  };

  const visibleOfertas = ofertasData.slice(currentIndex, currentIndex + itemsToShow);
  if (visibleOfertas.length < itemsToShow) {
    visibleOfertas.push(...ofertasData.slice(0, itemsToShow - visibleOfertas.length));
  }

  return (
    <section id="ofertas" className="ofertas-section">
      <div className="ofertas-container">
        <h2>Ofertas Especiales</h2>
        <p className="ofertas-subtitle">Aprovecha nuestras promociones exclusivas por tiempo limitado</p>
        
        <div className="ofertas-carousel-container">
          <button className="carousel-btn carousel-btn-prev" onClick={prevSlide}>
            &#8249;
          </button>
          
          <div className="ofertas-carousel">
            {visibleOfertas.map((oferta) => (
              <div key={oferta.id} className="oferta-card">
                <div className="oferta-badge">{oferta.descuento}</div>
                <div className="oferta-image-container">
                  <img 
                    src={oferta.imagen} 
                    alt={oferta.categoria}
                    className="oferta-image"
                  />
                  <div className="oferta-image-overlay">
                    <span>{oferta.categoria}</span>
                  </div>
                </div>
                <div className="oferta-content">
                  <h3>{oferta.titulo}</h3>
                  <p className="oferta-desc">{oferta.descripcion}</p>
                  <div className="oferta-pricing">
                    <span className="old-price">${oferta.precioAnterior.toFixed(2)}</span>
                    <span className="new-price">${oferta.precioNuevo.toFixed(2)}</span>
                  </div>
                  <button className="oferta-btn">Agregar al Carrito</button>
                </div>
              </div>
            ))}
          </div>
          
          <button className="carousel-btn carousel-btn-next" onClick={nextSlide}>
            &#8250;
          </button>
        </div>

        <div className="carousel-dots">
          {Array.from({ length: Math.ceil(ofertasData.length / itemsToShow) }).map((_, index) => (
            <button
              key={index}
              className={`dot ${index === Math.floor(currentIndex / itemsToShow) ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index * itemsToShow)}
            />
          ))}
        </div>

        <div className="ofertas-info">
          <h3>¿Cómo funcionan nuestras ofertas?</h3>
          <div className="info-grid">
            <div className="info-item">
              <div className="info-icon">⏰</div>
              <h4>Tiempo Limitado</h4>
              <p>Todas nuestras ofertas tienen fecha de caducidad</p>
            </div>
            <div className="info-item">
              <div className="info-icon">🚚</div>
              <h4>Envío Gratis</h4>
              <p>En compras mayores a $1,500.00</p>
            </div>
            <div className="info-item">
              <div className="info-icon">↩️</div>
              <h4>Devoluciones</h4>
              <p>30 días para cambiar o devolver productos</p>
            </div>
            <div className="info-item">
              <div className="info-icon">🛡️</div>
              <h4>Garantía</h4>
              <p>Todos los productos incluyen garantía</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ofertas;