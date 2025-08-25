import { MapPin, Navigation, Phone } from 'lucide-react';
import { useState } from 'react';
import '../Ubicacion.css'; // Importamos el CSS por separado

const LocationMap = () => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  
  // Coordenadas del negocio
  const businessLocation = {
    lat: 19.61014108323004419,
    lng: -99.18218438828562,
    address: "Melchor Ocampo 39-F Col, Mariano Escobedo, 54946 Buenavista, Méx.",
    name: "Autopartes Tres Hermanos"
  };

  // URL de Google Maps
  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${businessLocation.lat},${businessLocation.lng}`;

  return (
    <section className="location-section" id="ubicacion">
      <div className="location-container">
        <div className="location-header">
          <h2>
            <MapPin size={32} className="icon-spacing" />
            Nuestra Ubicación
          </h2>
          <p className="location-subtitle">
            Visítanos en nuestro local, estamos para servirte
          </p>
        </div>

        <div className="location-content">
          <div className="map-container">
            {!isMapLoaded && (
              <div className="map-loading">
                <p>Cargando mapa...</p>
              </div>
            )}
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.234567890123!2d${businessLocation.lng}!3d${businessLocation.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDM4JzI0LjciTiA5OcKwMTEnNDcuNyJX!5e0!3m2!1ses!2smx!4v1234567890!5m2!1ses!2smx`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              onLoad={() => setIsMapLoaded(true)}
              title="Ubicación de Autopartes Tres Hermanos"
            ></iframe>
          </div>

          <div className="location-info-card">
            <h3>Información de Contacto</h3>
            
            <div className="info-item">
              <div className="info-icon">
                <MapPin size={24} />
              </div>
              <div className="info-content">
                <h4>Dirección</h4>
                <p>{businessLocation.address}</p>
              </div>
            </div>

{/*             <div className="info-item">
              <div className="info-icon">
                <Clock size={24} />
              </div>
              <div className="info-content">
                <h4>Horario de Atención</h4>
                <p>Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                <p>Sábados: 9:00 AM - 2:00 PM</p>
                <p>Domingos: Cerrado</p>
              </div>
            </div> */}

            <div className="info-item">
              <div className="info-icon">
                <Phone size={24} />
              </div>
              <div className="info-content">
                <h4>Teléfono</h4>
                <p>+52 55 7696 9710</p>
              </div>
            </div>

            <div className="action-buttons">
              <a 
                href={mapsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="nav-btn"
              >
                <Navigation size={18} />
                Cómo llegar
              </a>
              
              <a 
                href={`https://wa.me/+525576969710`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="whatsapp-btn"
              >
                <Phone size={18} />
                Llamar ahora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
