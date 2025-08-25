/* import { useEffect, useState } from "react";
import api from "../api/cliente";

interface DatosNegocio {
  id: number;
  nombre_negocio: string;
  propietario: string;
  direccion: string;
  ciudad: string;
  correo_electronico: string;
  codigo_postal: string;
  redes_sociales: string;
  sitio_web: string;

}

export default function DatosNegocioPage() {
  
 const [datos, setDatos] = useState<DatosNegocio | null>(null);

useEffect(() => {
    const id = 1;
    api.get<DatosNegocio>(`/datos_negocio/${id}`)
      .then((res) => setDatos(res.data))
      .catch((err) => console.error("Error al cargar datos:", err));
  }, []);

  console.log("datos:",datos)

 return (
<div>
  <h1>Productos destacados</h1> */
    {/*}
    {datos ? (
    <div>
      <p><strong>Nombre:</strong> {datos.nombre_negocio}</p>
      <p><strong>Propietario:</strong> {datos.propietario}</p>
      <p><strong>Correo:</strong> {datos.correo_electronico}</p>
      <p><strong>Dirección:</strong> {datos.direccion}</p>
      <p><strong>Ciudad:</strong> {datos.ciudad}</p>
      <p><strong>C.P.:</strong> {datos.codigo_postal}</p>
      <p><strong>Sitio Web:</strong> {datos.sitio_web}</p>
      <p><strong>Redes Sociales:</strong> {datos.redes_sociales}</p>
    </div>
  ) : (
    <p style={{ color: "red" }}>⚠️ No hay información cargada</p>
  )}
    */}
/* </div>
);
} */

import { useState } from 'react';
import { Heart, Share2, Eye, Car, Wrench, DollarSign, Gavel } from 'lucide-react';
import '../ProductosDestacados.css';

function ProductosDestacados() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('destacados');

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
      case 'Subasta': return <Gavel size={16} />; // Cambiado a Gavel
      default: return <DollarSign size={16} />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Reparado': return '#10b981';
      case 'Chocado': return '#ef4444';
      case 'Subasta': return '#f59e0b';
      default: return '#6b7280';
    }
  };

  return (
    <section id="productos" className="productos-section">
      <div className="productos-container">
        <h2>Vehículos</h2>
        <p className="productos-subtitle">
          Encuentra autos chocados para reparar y vehículos reparados.
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
{/*           <button 
            className={`filtro-btn ${activeTab === 'subasta' ? 'active' : ''}`}
            onClick={() => setActiveTab('subasta')}
          >
            <Gavel size={18} /> Subasta 
          </button> */}
        </div>

        <div className="productos-grid">
          {featuredProducts
            .filter(product => activeTab === 'destacados' || product.status === activeTab)
            .map((product) => (
            <div key={product.id} className="producto-card">
              <div className="producto-image">
                <div className="producto-emoji">{product.image}</div>
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
                <h3>{product.title}</h3>
                <p className="producto-desc">{product.description}</p>
                
                <div className="producto-features">
                  {product.features.slice(0, 2).map((feature, index) => (
                    <span key={index} className="feature-tag">{feature}</span>
                  ))}
                </div>

                <div className="producto-footer">
                  <span className="producto-price">{product.price}</span>
                  <button 
                    className="ver-detalles-btn"
                    onClick={() => openModal(product)}
                  >
                    <Eye size={16} />
                    Ver detalles
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal de detalles */}
        {selectedProduct && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content producto-modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3>{selectedProduct.title}</h3>
                <button className="modal-close" onClick={closeModal}>
                  × {/* Reemplazado el ícono X */}
                </button>
              </div>

              <div className="modal-body">
                <div className="producto-modal-content">
                  <div className="modal-image">
                    <div className="modal-emoji">{selectedProduct.image}</div>
                    <div 
                      className="modal-status"
                      style={{ backgroundColor: getStatusColor(selectedProduct.status) }}
                    >
                      {getStatusIcon(selectedProduct.status)}
                      <span>{selectedProduct.status}</span>
                    </div>
                  </div>

                  <div className="modal-details">
                    <div className="detail-group">
                      <h4>Descripción</h4>
                      <p>{selectedProduct.details}</p>
                    </div>

                    <div className="detail-group">
                      <h4>Características</h4>
                      <div className="features-list">
                        {selectedProduct.features.map((feature: string, index: number) => (
                          <span key={index} className="feature-item">
                            ✓ {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="detail-group">
                      <h4>Precio</h4>
                      <div className="price-section">
                        <span className="final-price">{selectedProduct.price}</span>
                        <span className="price-note">Precio negociable</span>
                      </div>
                    </div>

                    <div className="modal-actions">
                      <button className="btn-secondary">
                        <Share2 size={18} />
                        Compartir
                      </button>
                      <button className="btn-primary">
                        <DollarSign size={18} />
                        Solicitar información
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProductosDestacados;
