
import { useState } from 'react';
import { Search, X, ChevronLeft, ChevronRight } from 'lucide-react';
import '../MarcasAutopartes.css';

function MarcasAutopartes() {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const brandsPerPage = 4;

  const brands = [
    { 
      id: 'bosch', 
      name: 'Bosch', 
      logo: '⚡', 
      description: 'Tecnología alemana de alto rendimiento', 
      category: 'Sistemas eléctricos y frenos'
    },
    { 
      id: 'delphi', 
      name: 'Delphi', 
      logo: '🔧', 
      description: 'Calidad OEM para todo tipo de vehículos', 
      category: 'Sistemas de combustible y encendido'
    },
    { 
      id: 'monroe', 
      name: 'Monroe', 
      logo: '🔄', 
      description: 'Expertos en suspensión y amortiguación', 
      category: 'Suspensión y amortiguadores'
    },
    { 
      id: 'mobil', 
      name: 'Mobil', 
      logo: '🛢️', 
      description: 'Lubricantes y aceites de máxima calidad', 
      category: 'Lubricantes y fluidos'
    },
    { 
      id: 'denso', 
      name: 'Denso', 
      logo: '🔌', 
      description: 'Componentes eléctricos y sistemas de climatización', 
      category: 'Sistemas eléctricos y aire acondicionado'
    },
    { 
      id: 'trw', 
      name: 'TRW', 
      logo: '🛑', 
      description: 'Seguridad en sistemas de frenos y dirección', 
      category: 'Sistemas de frenos y dirección'
    },
    { 
      id: 'valeo', 
      name: 'Valeo', 
      logo: '💡', 
      description: 'Iluminación y sistemas de visibilidad', 
      category: 'Sistemas de iluminación y climatización'
    },
    { 
      id: 'mahle', 
      name: 'Mahle', 
      logo: '⚙️', 
      description: 'Filtros y componentes del motor', 
      category: 'Filtros y componentes motrices'
    },
    { 
      id: 'continental', 
      name: 'Continental', 
      logo: '🌐', 
      description: 'Tecnología automotriz integral', 
      category: 'Sistemas de control y neumáticos'
    },
    { 
      id: 'ngk', 
      name: 'NGK', 
      logo: '🔥', 
      description: 'Bujías y sensores de alta performance', 
      category: 'Encendido y sensores'
    },
    { 
      id: 'gates', 
      name: 'Gates', 
      logo: '⛓️', 
      description: 'Correas y componentes de transmisión', 
      category: 'Transmisión y correas'
    },
    { 
      id: 'philips', 
      name: 'Philips', 
      logo: '💡', 
      description: 'Iluminación automotriz avanzada', 
      category: 'Sistemas de iluminación'
    }
  ];

  // Calcular marcas para la página actual
  const indexOfLastBrand = currentPage * brandsPerPage;
  const indexOfFirstBrand = indexOfLastBrand - brandsPerPage;
  const currentBrands = brands.slice(indexOfFirstBrand, indexOfLastBrand);
  const totalPages = Math.ceil(brands.length / brandsPerPage);

  const openModal = (brand: string) => {
    setSelectedBrand(brand);
    setSearchTerm('');
  };

  const closeModal = () => {
    setSelectedBrand(null);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Buscando productos de', selectedBrand, ':', searchTerm);
    closeModal();
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    
    <section id="marcas" className="marcas-section">
      <div className="marcas-container">
        <p>pruebas</p>
        <h2>Marcas de Autopartes</h2>
        <p className="marcas-subtitle">
          Las mejores marcas internacionales con garantía de calidad
        </p>

        <div className="marcas-grid">
          {currentBrands.map((brand) => (
            <div
              key={brand.id}
              className="marca-card"
              onClick={() => openModal(brand.name)}
            >
              <div className="marca-logo">{brand.logo}</div>
              <h3>{brand.name}</h3>
              <p className="marca-description">{brand.description}</p>
              <span className="marca-category">{brand.category}</span>
              <button className="marca-btn">Ver productos</button>
            </div>
          ))}
        </div>

        {/* Paginación */}
        <div className="pagination-container">
          <button 
            onClick={prevPage} 
            disabled={currentPage === 1}
            className="pagination-btn pagination-prev"
          >
            <ChevronLeft size={20} />
            Anterior
          </button>
          
          <div className="pagination-numbers">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => goToPage(pageNumber)}
                className={`pagination-number ${currentPage === pageNumber ? 'active' : ''}`}
              >
                {pageNumber}
              </button>
            ))}
          </div>
          
          <button 
            onClick={nextPage} 
            disabled={currentPage === totalPages}
            className="pagination-btn pagination-next"
          >
            Siguiente
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Modal de búsqueda */}
        {selectedBrand && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3>Productos de {selectedBrand}</h3>
                <button className="modal-close" onClick={closeModal}>
                  <X size={24} />
                </button>
              </div>

              <div className="modal-body">
                <form onSubmit={handleSearch} className="modal-form">
                  <div className="search-input-group">
                    <Search size={20} className="search-icon" />
                    <input
                      type="text"
                      placeholder={`Buscar productos ${selectedBrand}...`}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="modal-search-input"
                      autoFocus
                    />
                  </div>
                  
                  <div className="modal-actions">
                    <button type="button" onClick={closeModal} className="btn-secondary">
                      Cancelar
                    </button>
                    <button type="submit" className="btn-primary">
                      Buscar
                    </button>
                  </div>
                </form>

                <div className="quick-suggestions">
                  <h4>Productos populares de {selectedBrand}:</h4>
                  <div className="suggestions-grid">
                    {getBrandSuggestions(selectedBrand).map((suggestion, index) => (
                      <button
                        key={index}
                        className="suggestion-chip"
                        onClick={() => setSearchTerm(suggestion)}
                      >
                        {suggestion}
                      </button>
                    ))}
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

// Función para obtener sugerencias basadas en la marca
function getBrandSuggestions(brand: string): string[] {
  const suggestions: { [key: string]: string[] } = {
    'Bosch': ['Bujías Bosch', 'Alternadores', 'Sensores', 'Frenos ABS', 'Baterías'],
    'Delphi': ['Inyectores', 'Bombas de combustible', 'Sensores', 'Sistemas de encendido'],
    'Monroe': ['Amortiguadores', 'Suspensión completa', 'Brazos de control', 'Kit de suspensión'],
    'Mobil': ['Aceite sintético', 'Aceite motor', 'Lubricantes', 'Grasas especiales'],
    'Denso': ['Compresor A/C', 'Radiadores', 'Sensores temperatura', 'Bobinas de encendido'],
    'TRW': ['Pastillas de freno', 'Discos de freno', 'Rótulas', 'Terminales dirección'],
    'Valeo': ['Faros delanteros', 'Embragues', 'Alternadores', 'Sensores de estacionamiento'],
    'Mahle': ['Filtros de aceite', 'Filtros de aire', 'Filtros de combustible', 'Filtros habitáculo'],
    'Continental': ['Neumáticos', 'Sensores presión', 'Correas distribución', 'Sistemas seguridad'],
    'NGK': ['Bujías estándar', 'Bujías iridio', 'Cables bujía', 'Sensores oxígeno'],
    'Gates': ['Correas distribución', 'Correas auxiliares', 'Tensores', 'Kit de correas'],
    'Philips': ['Lámparas LED', 'Faros xenón', 'Luces antiniebla', 'Kit de iluminación']
  };

  return suggestions[brand] || ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4'];
}

export default MarcasAutopartes;