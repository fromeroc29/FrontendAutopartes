
import { useState } from 'react';
import { Search, X } from 'lucide-react';
import '../Categorias.css';

function Categorias() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'motores', name: 'Motores', icon: '⚙️', description: 'Motores completos, bloques, culatas y componentes' },
    { id: 'transmisiones', name: 'Transmisiones', icon: '🔧', description: 'Cajas de cambios, embragues, diferenciales' },
    { id: 'frenos', name: 'Sistema de Frenos', icon: '🛑', description: 'Discos, pastillas, pinzas y líquidos' },
    { id: 'suspension', name: 'Suspensión', icon: '🔄', description: 'Amortiguadores, resortes, brazos de control' },
    { id: 'electrico', name: 'Sistema Eléctrico', icon: '⚡', description: 'Baterías, alternadores, bujías y cables' },
    { id: 'frenos', name: 'Frenos', icon: '🛑', description: 'Pastillas, discos, tambores y líquido de frenos' },
    { id: 'direccion', name: 'Dirección', icon: '🧭', description: 'Cremalleras, bombas de dirección y terminales' },
    { id: 'enfriamiento', name: 'Sistema de Enfriamiento', icon: '❄️', description: 'Radiadores, bombas de agua y termostatos' },
    { id: 'escape', name: 'Sistema de Escape', icon: '💨', description: 'Mofles, catalizadores y tubos de escape' },
    { id: 'interior', name: 'Interior', icon: '💺', description: 'Asientos, tableros y accesorios interiores' },
    { id: 'exterior', name: 'Exterior', icon: '🚗', description: 'Puertas, capós, parachoques y espejos' },
    { id: 'iluminacion', name: 'Iluminación', icon: '💡', description: 'Faros, calaveras, direccionales y luces LED' }
  ];

  const openModal = (category: string) => {
    setSelectedCategory(category);
    setSearchTerm('');
  };

  const closeModal = () => {
    setSelectedCategory(null);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Buscando en', selectedCategory, ':', searchTerm);
    // Aquí iría la lógica de búsqueda real
    closeModal();
  };

  return (
    <section id="categorias" className="categorias-section">
      <div className="categorias-container">
        <h2>Categorías de Productos</h2>
        <p className="categorias-subtitle">
          Explora nuestro catálogo completo de autopartes y accesorios
        </p>

        <div className="categorias-grid">
          {categories.map((category) => (
            <div
              key={category.id}
              className="categoria-card"
              onClick={() => openModal(category.name)}
            >
              <div className="categoria-icon">{category.icon}</div>
              <h3>{category.name}</h3>
              <p>{category.description}</p>
              <button className="categoria-btn">Ver productos</button>
            </div>
          ))}
        </div>

        {/* Modal de búsqueda */}
        {selectedCategory && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3>Buscar en {selectedCategory}</h3>
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
                      placeholder={`Buscar productos en ${selectedCategory}...`}
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
                  <h4>Sugerencias rápidas:</h4>
                  <div className="suggestions-grid">
                    {getQuickSuggestions(selectedCategory).map((suggestion, index) => (
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

// Función para obtener sugerencias basadas en la categoría
function getQuickSuggestions(category: string): string[] {
  const suggestions: { [key: string]: string[] } = {
    'Motores': ['Motor completo', 'Culata', 'Bloque motor', 'Cigüeñal', 'Árbol de levas'],
    'Transmisiones': ['Caja de cambios', 'Embrague', 'Diferencial', 'Palanca de cambios', 'Aceite transmisión'],
    'Sistema de Frenos': ['Pastillas freno', 'Discos freno', 'Líquido frenos', 'Pinza freno', 'Tambor freno'],
    'Suspensión': ['Amortiguadores', 'Muelles', 'Brazos control', 'Rótulas', 'Barra estabilizadora'],
    'Sistema Eléctrico': ['Batería', 'Alternador', 'Motor arranque', 'Bujías', 'Cables bujía'],
    'Iluminación': ['Faros delanteros', 'Luces traseras', 'LED', 'Xenón', 'Bombillos'],
    'Dirección': ['Cremallera dirección', 'Bomba dirección', 'Terminales', 'Aceite dirección'],
    'Sistema de Enfriamiento': ['Radiador', 'Ventilador', 'Bomba agua', 'Termostato', 'Líquido refrigerante'],
    'Sistema de Escape': ['Mofle', 'Catalizador', 'Tubo escape', 'Sensor oxígeno', 'Abrazadera'],
    'Interior': ['Asientos', 'Volante', 'Alfombras', 'Panel instrumentos', 'Radio'],
    'Exterior': ['Puertas', 'Capó', 'Paragolpes', 'Espejos', 'Manijas']
  };

  return suggestions[category] || ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4'];
}

export default Categorias;