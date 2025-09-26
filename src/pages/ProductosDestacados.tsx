import { useState, useRef, useEffect } from 'react';
import { Heart, Share2, Eye, Car, Wrench, DollarSign, ChevronLeft, ChevronRight } from 'lucide-react';
import '../ProductosDestacados.css';
import imgcharger from '../assets/vehi/char/1.jpg'
import imgterrain from '../assets/vehi/terr/1.jpg'
import imgnissan from '../assets/vehi/niss/1.jpg'
import imgsentra from '../assets/vehi/sent/1.png'

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
    detalles_rel: Detalle[];
  }

  // Datos en duro - reemplaza la llamada a la API
  const datos: Auto[] = [
    {
      "id_auto": 1,
      "anio": 2011,
      "descripcion": "Dodge Charger RT, 5 pasajeros, proveniente del estado de Chihuahua, Chih. Méx.",
      "precio": 110000,
      "moneda": "MNX",
      "imagen": imgcharger,
      "status": "Reparado",
      "categoria": "Proyecto",
      "detalles": "Detalle en pintura de frente y suspención.",
      "marca": {
        "id_marca_vehiculo": 1,
        "nombre": "Dodge"
      },
      "modelo": {
        "id_modelo_vehiculo": 1,
        "nombre": "Charger RT"
      },
      "detalles_rel": [
        {
          "nombre_detalle": "Kilometraje",
          "valor_detalle": "90,000 km",
          "id_detalle": 1
        },

        {
          "nombre_detalle": "Color",
          "valor_detalle": "Negro",
          "id_detalle": 2
        },
        {
          "nombre_detalle": "Combustible",
          "valor_detalle": "Gasolina",
          "id_detalle": 3
        },
                {
          "nombre_detalle": "Transmisión",
          "valor_detalle": "Automática de 8 Velocidades",
          "id_detalle": 4
        },
        {
          "nombre_detalle": "Motor",
          "valor_detalle": "V8 HEMI de 5.7 L.",
          "id_detalle": 5
        },
        {
          "nombre_detalle": "Tracción",
          "valor_detalle": "Trasera",
          "id_detalle": 6
        },
        {
          "nombre_detalle": "Interior",
          "valor_detalle": "Negro en piel.",
          "id_detalle": 7
        },
        {
          "nombre_detalle": "Aditamento",
          "valor_detalle": "Quemacocos",
          "id_detalle": 8
        },
        {
          "nombre_detalle": "Rines",
          "valor_detalle": "Deportivos",
          "id_detalle": 9
        },
        {
          "nombre_detalle": "Documentos",
          "valor_detalle": "Expediente, Título, Pedimento y Facturas Subasta Segura.",
          "id_detalle": 10
        }
      ]
    },
        {
      "id_auto": 2,
      "anio": 2012,
       "descripcion": "GMC Terrain SLT, 5 Pasajeros, proveniente del estado de Qro. Méx.",
      "precio": 170000,
      "moneda": "MNX",
      "imagen": imgterrain,
      "status": "Reparado",
      "categoria": "Proyecto",
      "detalles": "Detalle en pintura del lado de salpicaderas",
      "marca": {
        "id_marca_vehiculo": 1,
        "nombre": "GMC"
      },
      "modelo": {
        "id_modelo_vehiculo": 1,
        "nombre": "Terrain SLT"
      },
      "detalles_rel": [
        {
          "nombre_detalle": "Kilometraje",
          "valor_detalle": "97,500 km",
          "id_detalle": 1
        },
        {
          "nombre_detalle": "Transmisión",
          "valor_detalle": "Automática",
          "id_detalle": 2
        },
        {
          "nombre_detalle": "Color",
          "valor_detalle": "Blanco Olimpico",
          "id_detalle": 3
        },
        {
          "nombre_detalle": "Combustible",
          "valor_detalle": "Gasolina Premium",
          "id_detalle": 4
        },
        {
          "nombre_detalle": "Motor",
          "valor_detalle": "V6 3.0L",
          "id_detalle": 5
        },
        
        {
          "nombre_detalle": "Aditamento",
          "valor_detalle": "Quemacocos",
          "id_detalle": 6
        },
        
        {
          "nombre_detalle": "Interior",
          "valor_detalle": "Cafe y Negro en piel",
          "id_detalle": 7
        },
        {
          "nombre_detalle": "Placas",
          "valor_detalle": "PBL-44-64",
          "id_detalle": 8
        }
      ]
    },
        {
      "id_auto": 3,
      "anio": 2012,
      "descripcion": "GMC Terrain SLT, 5 Pasajeros, proveniente del estado de Qro. Méx.",
      "precio": 170000,
      "moneda": "MNX",
      "imagen": imgnissan,
      "status": "Reparado",
      "categoria": "Proyecto",
      "detalles": "Detalle en pintura del lado de salpicaderas",
      "marca": {
        "id_marca_vehiculo": 1,
        "nombre": "GMC"
      },
      "modelo": {
        "id_modelo_vehiculo": 1,
        "nombre": "Terrain SLT"
      },
      "detalles_rel": [
        {
          "nombre_detalle": "Kilometraje",
          "valor_detalle": "97,500 km",
          "id_detalle": 1
        },
        {
          "nombre_detalle": "Transmisión",
          "valor_detalle": "CVT",
          "id_detalle": 2
        },
        {
          "nombre_detalle": "Color",
          "valor_detalle": "Gris Oxford",
          "id_detalle": 3
        },
        {
          "nombre_detalle": "Combustible",
          "valor_detalle": "Gasolina",
          "id_detalle": 4
        },
        {
          "nombre_detalle": "Motor",
          "valor_detalle": "1.6L",
          "id_detalle": 5
        },
        {
          "nombre_detalle": "Placas",
          "valor_detalle": "ABC-123-CDMX",
          "id_detalle": 6
        }
      ]
    },
        {
      "id_auto": 4,
      "anio": 2012,
      "descripcion": "Camioneta, 5 Pasajeros, proveniente del estado de Qro.",
      "precio": 170000,
      "moneda": "MNX",
      "imagen": imgsentra,
      "status": "Reparado",
      "categoria": "Proyecto",
      "detalles": "Detalle en pintura del lado de salpicaderas",
      "marca": {
        "id_marca_vehiculo": 1,
        "nombre": "GMC"
      },
      "modelo": {
        "id_modelo_vehiculo": 1,
        "nombre": "Terrain SLT"
      },
      "detalles_rel": [
        {
          "nombre_detalle": "Kilometraje",
          "valor_detalle": "500 km",
          "id_detalle": 1
        },
        {
          "nombre_detalle": "Transmisión",
          "valor_detalle": "CVT",
          "id_detalle": 2
        },
        {
          "nombre_detalle": "Color",
          "valor_detalle": "Gris Oxford",
          "id_detalle": 3
        },
        {
          "nombre_detalle": "Combustible",
          "valor_detalle": "Gasolina",
          "id_detalle": 4
        },
        {
          "nombre_detalle": "Motor",
          "valor_detalle": "1.6L",
          "id_detalle": 5
        },
        {
          "nombre_detalle": "Placas",
          "valor_detalle": "ABC-123-CDMX",
          "id_detalle": 6
        }
      ]
    }
    // ... el resto de los objetos igual que arriba
  ];

  // Elimina el useEffect que hace la llamada a la API
  // useEffect(() => {
  //   api.get<Auto[]>(`/datos_negocio/autos/?skip=0&limit=10`)
  //     .then((res) => setDatos(res.data))
  //     .catch((err) => console.error("Error al cargar datos:", err));
  // }, []);

  console.log("*autos", datos);

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
            {datos.length === 0 ? (
              <p>No hay productos disponibles.</p>   
            ) : (
              datos
                .filter(product => activeTab === 'destacados' || product.status === activeTab)
                .map((product) => (
                  <div key={product.id_auto} className="producto-card">
                    <div className="producto-image">
                      {/* <div className="producto-emoji">{product.imagen}</div> */}
                      {product.imagen ? (
                            <img 
                              src={product.imagen} 
                              alt={`${product.marca.nombre} ${product.modelo.nombre}`}
                              className="producto-imagen"
                            />
                          ) : (
                            <div className="producto-placeholder">
                              <Car size={40} />
                              <span>Sin imagen</span>
                            </div>
                          )}
                      <div 
                        className="producto-status"
                        style={{ backgroundColor: getStatusColor(product.status || '') }}
                      >
                        {getStatusIcon(product.status || '')}
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
                          <span key={detalle.id_detalle} className="feature-tag">
                            {detalle.nombre_detalle + ': ' + detalle.valor_detalle}
                          </span>
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

        {/* Modal de detalles */}
        {selectedProduct && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content producto-modal" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>
                ✖
              </button>
              <br />
              
              <div className="modal-image">
                
                  {selectedProduct.imagen ? (
                    <img 
                      src={selectedProduct.imagen} 
                      alt={`${selectedProduct.marca.nombre} ${selectedProduct.modelo.nombre}`}
                      className="producto-imagen"
                    />
                    ) : (
                      <div className="producto-placeholder">
                        <Car size={40} />
                        <span>Sin imagen</span>
                        </div>
                          )}
              </div>
              

              <h2>
                {selectedProduct.marca.nombre} {selectedProduct.modelo.nombre} {selectedProduct.anio}
              </h2>

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

              <p><strong>Descripción:</strong> {selectedProduct.descripcion}</p>

              <p>
                <strong>Detalles:</strong>
                <span className="producto-features">
                  {selectedProduct.detalles_rel && selectedProduct.detalles_rel.length > 0 
                    ? selectedProduct.detalles_rel.slice(0, 12).map((detalle) => (
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