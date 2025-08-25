import '../Conocenos.css';

function Conocenos() {
  return (
    <section id="conocenos" className="conocenos-section">
      <div className="conocenos-container">
        <h2>Conócenos</h2>
        <div className="conocenos-content">
          <div className="conocenos-text">
            <h3>Nuestra Historia</h3>
            <p>
              Autopartes Tres Hermanos nació en 1995 con la visión de tres hermanos apasionados 
              por el mundo automotriz. Desde nuestros humildes comienzos en un pequeño local, 
              hemos crecido hasta convertirnos en líderes del sector de autopartes en la región.
            </p>
            
            <h3>Nuestra Misión</h3>
            <p>
              Proporcionar autopartes de la más alta calidad a precios competitivos, 
              ofreciendo un servicio excepcional y asesoramiento experto a todos nuestros clientes.
            </p>
            
            <h3>Nuestros Valores</h3>
            <ul>
              <li>Calidad en todos nuestros productos</li>
              <li>Honestidad en nuestro trato con clientes</li>
              <li>Compromiso con el servicio post-venta</li>
              <li>Innovación constante en nuestro catálogo</li>
            </ul>
          </div>
          
          <div className="conocenos-image">
            <div className="placeholder-image">
              <span>Imagen de nuestra tienda</span>
            </div>
          </div>
        </div>
        
        <div className="team-section">
          <h3>Nuestro Equipo</h3>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-photo"></div>
              <h4>Juan Pérez</h4>
              <p>CEO y Fundador</p>
            </div>
            <div className="team-member">
              <div className="member-photo"></div>
              <h4>María Pérez</h4>
              <p>Directora de Ventas</p>
            </div>
            <div className="team-member">
              <div className="member-photo"></div>
              <h4>Carlos Pérez</h4>
              <p>Jefe de Almacén</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Conocenos;