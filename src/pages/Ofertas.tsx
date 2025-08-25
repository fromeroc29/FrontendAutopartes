import '../Ofertas.css';

function Ofertas() {
  return (
    <section id="ofertas" className="ofertas-section">
      <div className="ofertas-container">
        <h2>Ofertas Especiales</h2>
        <p className="ofertas-subtitle">Aprovecha nuestras promociones exclusivas por tiempo limitado</p>
        
        <div className="ofertas-grid">
          <div className="oferta-card">
            <div className="oferta-badge">30% OFF</div>
            <div className="oferta-image">
              <span>Frenos de Disco</span>
            </div>
            <div className="oferta-content">
              <h3>Kit de Frenos Completo</h3>
              <p className="oferta-desc">Discos, pastillas y pinzas para la mayoría de modelos</p>
              <div className="oferta-pricing">
                <span className="old-price">$1,200.00</span>
                <span className="new-price">$840.00</span>
              </div>
              <button className="oferta-btn">Agregar al Carrito</button>
            </div>
          </div>

          <div className="oferta-card">
            <div className="oferta-badge">25% OFF</div>
            <div className="oferta-image">
              <span>Filtros</span>
            </div>
            <div className="oferta-content">
              <h3>Paquete de Filtros</h3>
              <p className="oferta-desc">Aceite, aire, combustible y habitáculo</p>
              <div className="oferta-pricing">
                <span className="old-price">$800.00</span>
                <span className="new-price">$600.00</span>
              </div>
              <button className="oferta-btn">Agregar al Carrito</button>
            </div>
          </div>

          <div className="oferta-card">
            <div className="oferta-badge">40% OFF</div>
            <div className="oferta-image">
              <span>Baterías</span>
            </div>
            <div className="oferta-content">
              <h3>Batería Premium</h3>
              <p className="oferta-desc">Batería de 60 meses de garantía</p>
              <div className="oferta-pricing">
                <span className="old-price">$2,500.00</span>
                <span className="new-price">$1,500.00</span>
              </div>
              <button className="oferta-btn">Agregar al Carrito</button>
            </div>
          </div>

          <div className="oferta-card">
            <div className="oferta-badge">15% OFF</div>
            <div className="oferta-image">
              <span>Aceites</span>
            </div>
            <div className="oferta-content">
              <h3>Aceite Sintético</h3>
              <p className="oferta-desc">Aceite 100% sintético 5W-30</p>
              <div className="oferta-pricing">
                <span className="old-price">$350.00</span>
                <span className="new-price">$297.50</span>
              </div>
              <button className="oferta-btn">Agregar al Carrito</button>
            </div>
          </div>

          <div className="oferta-card">
            <div className="oferta-badge">20% OFF</div>
            <div className="oferta-image">
              <span>Amortiguadores</span>
            </div>
            <div className="oferta-content">
              <h3>Juego de Amortiguadores</h3>
              <p className="oferta-desc">Amortiguadores delanteros y traseros</p>
              <div className="oferta-pricing">
                <span className="old-price">$3,800.00</span>
                <span className="new-price">$3,040.00</span>
              </div>
              <button className="oferta-btn">Agregar al Carrito</button>
            </div>
          </div>

          <div className="oferta-card">
            <div className="oferta-badge">OFERTA EXCLUSIVA</div>
            <div className="oferta-image">
              <span>Kit de Herramientas</span>
            </div>
            <div className="oferta-content">
              <h3>Kit Mecánico Profesional</h3>
              <p className="oferta-desc">124 piezas con estuche de almacenamiento</p>
              <div className="oferta-pricing">
                <span className="old-price">$4,200.00</span>
                <span className="new-price">$3,360.00</span>
              </div>
              <button className="oferta-btn">Agregar al Carrito</button>
            </div>
          </div>
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