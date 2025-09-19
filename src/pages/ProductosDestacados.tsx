import { useState, useRef, useEffect } from 'react';
import { Heart, Share2, Eye, Car, Wrench, DollarSign, ChevronLeft, ChevronRight } from 'lucide-react';
import '../ProductosDestacados.css';
import api from '../api/cliente';

function ProductosDestacados() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('destacados');
  const carouselRef = useRef<HTMLDivElement>(null);
  const [showNavButtons, setShowNavButtons] = useState(false);

interface Detalle{
  id_detalle: number;
  nombre_detalle: string;
  valor_detalle: string;
}

interface Marca {
  id_marca_vehiculo: number;
  nombre: string;
}

interface Modelo {
  id_modelo_vehiculo: number;
  nombre: string;
}

interface Auto {
  id_auto: number;
  anio: number;
  descripcion?: string;
  precio: number;
  moneda?: string;
  imagen?: string;
  status?: string;
  categoria?: string;
  detalles?: string;
  marca: Marca;
  modelo: Modelo;
  detalles_rel:Detalle[];
}

const [datos, setDatos] = useState<Auto[] | null>(null);

useEffect(() => {
  api.get<Auto[]>(`/datos_negocio/autos/?skip=0&limit=10`)
    .then((res) => setDatos(res.data))
    .catch((err) => console.error("Error al cargar datos:", err));
}, []);

  console.log("*autos",datos)



const featuredProducts = [
    {
      id: 1,
      title: 'Toyota Corolla 2022',
      description: 'Auto seminuevo en perfecto estado, low mileage',
      price: '$450,000 MXN',
      image: '🚗',
      status: 'Reparado',
      category: 'Seminuevo',
      features: ['Bajo kilometraje', 'Garantía 1 año', 'Servicio completo'],
      details: 'Toyota Corolla 2022 con solo 25,000 km. Perfecto estado mecánico y estético.'
    },
    {
      id: 2,
      title: 'Honda Civic 2021',
      description: 'Chocado trasero, ideal para reparación',
      price: '$180,000 MXN',
      image: '🚙',
      status: 'Chocado',
      category: 'Proyecto',
      features: ['Daño trasero', 'Motor intacto', 'Buen precio'],
      details: 'Honda Civic 2021 con daño trasero. Motor y transmisión en perfecto estado.'
    },
    {
      id: 3,
      title: 'Nissan Sentra 2023',
      description: 'Auto de subasta, lista para llevar',
      price: '$380,000 MXN',
      image: '🚘',
      status: 'Subasta',
      category: 'Oportunidad',
      features: ['Precio de subasta', 'Documentación en orden', 'Revisado'],
      details: 'Nissan Sentra 2023 de subasta. Vehículo completo y funcional.'
    },
    {
      id: 4,
      title: 'Volkswagen Jetta 2020',
      description: 'Chocado frontal, piezas disponibles',
      price: '$150,000 MXN',
      image: '🚕',
      status: 'Chocado',
      category: 'Refacciones',
      features: ['Daño frontal', 'Interior intacto', 'Buenas piezas'],
      details: 'Volkswagen Jetta 2020 con daño frontal. Ideal para refacciones o reparación.'
    },
    {
      id: 5,
      title: 'Mazda 3 2022',
      description: 'Auto reparado profesionalmente',
      price: '$420,000 MXN',
      image: '🏎️',
      status: 'Reparado',
      category: 'Certificado',
      features: ['Reparación certificada', 'Garantía', 'Como nuevo'],
      details: 'Mazda 3 2022 reparado profesionalmente. Garantía de 6 meses.'
    },
    {
      id: 6,
      title: 'Ford Mustang 2021',
      description: 'Proyecto deportivo, chocado lateral',
      price: '$280,000 MXN',
      image: '🐎',
      status: 'Chocado',
      category: 'Deportivo',
      features: ['Motor 5.0L', 'Daño lateral', 'Proyecto único'],
      details: 'Ford Mustang 2021 con daño lateral. Motor 5.0L V8 en perfecto estado.'
    }
  ]; 

  // Efecto para verificar si hay overflow (necesidad de botones de navegación)
  useEffect(() => {
    const checkOverflow = () => {
      if (carouselRef.current) {
        const hasOverflow = carouselRef.current.scrollWidth > carouselRef.current.clientWidth;
        setShowNavButtons(hasOverflow);
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    
    return () => window.removeEventListener('resize', checkOverflow);
  }, [activeTab]);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const openModal = (product: any) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Reparado': return <Wrench size={16} />;
      case 'Chocado': return <Car size={16} />;
      default: return <DollarSign size={16} />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Reparado': return '#10b981';
      case 'Chocado': return '#ef4444';
      default: return '#6b7280';
    }
  };

  return (
    <section id="productos" className="productos-section">
      <div className="productos-container">
        <h2>Vehículos</h2>
        <p className="productos-subtitle">
          Autos de subasta para reparar o ya reparados.
        </p>

        {/* Filtros por categoría */}
        <div className="categorias-filtro">
          <button 
            className={`filtro-btn ${activeTab === 'destacados' ? 'active' : ''}`}
            onClick={() => setActiveTab('destacados')}
          >
            <Car size={18} /> Todos
          </button>
          <button 
            className={`filtro-btn ${activeTab === 'chocados' ? 'active' : ''}`}
            onClick={() => setActiveTab('chocados')}
          >
            <Car size={18} /> Chocados
          </button>
          <button 
            className={`filtro-btn ${activeTab === 'reparados' ? 'active' : ''}`}
            onClick={() => setActiveTab('reparados')}
          >
            <Wrench size={18} /> Reparados
          </button>
        </div>

        <div className="carousel-container">
          {showNavButtons && (
            <button className="carousel-btn carousel-btn-left" onClick={scrollLeft}>
              &#8249;
              <ChevronLeft size={24} />
            </button>
          )}
          

        <div className="productos-carousel" ref={carouselRef}>
            {(!datos) ? (
                <p>Cargando productos...</p>   
              ) : datos.length === 0 ? (
                <p>No hay productos disponibles.</p>   
              ) : (
                datos
              .filter(product => activeTab === 'destacados' || product.status === activeTab)
              .map((product) => (
              <div key={product.id_auto} className="producto-card">
                <div className="producto-image">
                  <div className="producto-emoji">{product.categoria}</div>
                   <div 
                    className="producto-status"
                    style={{ backgroundColor: getStatusColor(product.status) }}
                  >
                    {getStatusIcon(product.status)}
                    <span>{product.status}</span>
                  </div> 
                  <div className="producto-actions">
                    <button className="action-btn">
                      <Heart size={18} />
                    </button>
                    <button className="action-btn">
                      <Share2 size={18} />
                    </button>
                  </div>
                </div>

                <div className="producto-content">
                  <h3>{product.marca.nombre} {product.modelo.nombre} {product.anio}</h3>
                  <p className="producto-desc">{product.descripcion}</p>
                  
                  <div className="producto-features">
                    {product.detalles_rel.slice(0, 2).map((detalle) => (
                      <span key={detalle.id_detalle} className="feature-tag">{detalle.nombre_detalle + ': ' + detalle.valor_detalle}</span>
                    ))}
                  </div>

                  <div className="producto-footer">
                    <span className="producto-price">
                      {"$"}{product.precio.toLocaleString('es-MX')} {product.moneda}
                    </span>
                    <button 
                      className="ver-detalles-btn"
                      onClick={() => openModal(product)}
                    >
                      <Eye size={22} />
                      Detalles
                    </button>
                  </div>
                </div>
              </div>
            ))
           )} 
          </div> 
          
          {showNavButtons && (
            <button className="carousel-btn carousel-btn-right" onClick={scrollRight}>
              &#8250;
              <ChevronRight size={24} />
            </button>
          )}
        
        </div>

        {/* Modal de detalles (igual que antes) */}
        {selectedProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content producto-modal" onClick={(e) => e.stopPropagation()}>
            {/* Botón de cierre */}
            <button className="modal-close" onClick={closeModal}>
              ✖
            </button>
            <br />
            {/* Imagen / Emoji */}
            <div className="modal-image">
              {/* <span className="producto-emoji">{selectedProduct.image}</span> */}
              <p>el ferras</p>
            </div>

            {/* Encabezado */}
            <h2>
              {selectedProduct.marca.nombre} {selectedProduct.modelo.nombre} {selectedProduct.anio}
            </h2>

            {/* Tabla responsiva para estatus, categoría y precio */}
            <div className="producto-info-table">
              <div className="info-row">
                <div className="info-cell">
                  <strong>Estatus:</strong>
                  <span>{selectedProduct.status}</span>
                </div>
                <div className="info-cell">
                  <strong>Categoría:</strong>
                  <span>{selectedProduct.categoria}</span>
                </div>
                <div className="info-cell">
                  <strong>Precio:</strong>
                  <span className="producto-price">
                    {'$ '+selectedProduct.precio.toLocaleString('es-MX')} {selectedProduct.moneda}
                  </span>
                </div>
              </div>
            </div>

            {/* Descripción */}
            <p><strong>Descripción:</strong> {selectedProduct.descripcion}</p>

            {/* Detalles */}
            <p>
              <strong>Detalles:</strong>
              <span className="producto-features">
                {selectedProduct.detalles_rel && selectedProduct.detalles_rel.length > 0 
                  ? selectedProduct.detalles_rel.slice(0, 6).map((detalle) => (
                      <span key={detalle.id_detalle} className="feature-tag">
                        {detalle.nombre_detalle + ': ' + detalle.valor_detalle}
                      </span>
                    ))
                  : <span className="no-details">Sin registros cargados</span>
                }
              </span>
            </p>
          </div>
        </div>
      )}
      </div>
      
    </section>
  );
}

export default ProductosDestacados;