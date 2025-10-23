import '../Ofertas.css';
import { useState, useEffect } from 'react';
import tableros from '../assets/imagesBussines/Instrumentos.png';
import asientos from '../assets/imagesBussines/Asientos.png'
import faroscalaveras from '../assets/imagesBussines/FarosRetrovisores.png'
import salpicadera from '../assets/imagesBussines/Salpicaderas1.png'
import computadora from '../assets/imagesBussines/Computadoras2.png'
import parrillas from '../assets/imagesBussines/parrillas.png'
import defensas from '../assets/imagesBussines/Defensas1.png'
import inyectores from '../assets/imagesBussines/SensoresInyectores.png'

// Datos de las ofertas en un arreglo
const ofertasData = [
  {
    id: 1,
    descuento: "5% OFF",
    categoria: "Tableros de instrumentos",
    titulo: "Tableros de Instrumentos",
    descripcion: "Para diversos modelos de automoviles y camionetas SUV o PicKup.",
    precioAnterior: 1200.00,
    precioNuevo: 840.00,
    imagen: tableros
  },
  {
    id: 2,
    descuento: "5% OFF",
    categoria: "Asientos",
    titulo: "Asientos para autos y camionetas.",
    descripcion: "Para autos y camionetas para adaptar.",
    precioAnterior: 800.00,
    precioNuevo: 600.00,
    imagen: asientos
  },
  {
    id: 3,
    descuento: "5% OFF",
    categoria: "Faros, Calaveras y Retrovisores",
    titulo: "Variedad de Faros, Calaveras y Retrovisores",
    descripcion: "Faros, Calaveras y Retrovisores de autos y camionetas de modelos 80's, 90's y actuales.",
    precioAnterior: 2500.00,
    precioNuevo: 1500.00,
    imagen: faroscalaveras
  },
  {
    id: 4,
    descuento: "5% OFF",
    categoria: "Salpicaderas",
    titulo: "Salpicaderas para camionetas SUV o PickUp",
    descripcion: "Diversidad de Salpicaderas de los añs 80´s, 90´s y actuales.",
    precioAnterior: 350.00,
    precioNuevo: 297.50,
    imagen: salpicadera
  },
  {
    id: 5,
    descuento: "5% OFF",
    categoria: "Computadoras y Cajas de Fusibles",
    titulo: "Cómputadoras y Cajas de Fusibles",
    descripcion: "Variedad de modulos, Cómputadoras, Arneses de autos y camionetas.",
    precioAnterior: 3800.00,
    precioNuevo: 3040.00,
    imagen: computadora
  },
  {
    id: 6,
    descuento: "OFERTA EXCLUSIVA",
    categoria: "Variedad de parrillas",
    titulo: "Parrillas, Fascias, Cuartos",
    descripcion: "Variedad de parrillas y emblemas de diversos modelos.",
    precioAnterior: 4200.00,
    precioNuevo: 3360.00,
    imagen: parrillas
  },
   {
    id: 7,
    descuento: "OFERTA EXCLUSIVA",
    categoria: "Defensas Traseras",
    titulo: "Defensas traseras",
    descripcion: "Variedad de Defensas Traseras para camionetas.",
    precioAnterior: 4200.00,
    precioNuevo: 3360.00,
    imagen: defensas
  },
   {
    id: 8,
    descuento: "OFERTA EXCLUSIVA",
    categoria: "Sensores e Inyectores",
    titulo: "Sensores e Inyectores.",
    descripcion: "Variedad de sensores e inyectores usados de motores de choque",
    precioAnterior: 4200.00,
    precioNuevo: 3360.00,
    imagen: inyectores
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
        <h2>Nuestros Productos</h2>
        <p className="ofertas-subtitle">Pregunta por nuestras promociones...</p>
        
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
{/*                   <div className="oferta-pricing">
                    <span className="old-price">${oferta.precioAnterior.toFixed(2)}</span>
                    <span className="new-price">${oferta.precioNuevo.toFixed(2)}</span>
                  </div> */}
                  {/* <button className="oferta-btn">Agregar al Carrito</button> */}
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