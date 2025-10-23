import { MapPin, Phone, MessageCircle, Calendar, CalendarOff, Facebook, Instagram, Clock, Share2 } from 'lucide-react';
import '../Ubicacion.css';

const LocationMap = () => {
  // Datos del negocio
  const businessLocations = [
    {
      name: "Autopartes Tres Hermanos",
      type: "Sucursal",
      address: "Melchor Ocampo 39-F Col, Mariano Escobedo, 54946 Buenavista, Estado de México",
      phone: "+52 55 7696 9710",
      phone2: "+52 55 7862 6524",
      businessHours: [
        { days: "Lunes a Viernes", hours: "9:00 AM - 6:00 PM" },
        { days: "Sábados", hours: "9:00 AM - 5:00 PM" },
        { days: "Domingos", hours: "9:00 AM - 12:00 PM" }
      ],
      socialMedia: {
        facebook: "https://www.facebook.com/autopartes3hnos/",
      }
    },
    {
      name: "Autopartes del Norte",
      type: "Sucursal  Principal",
      address: "Avenida José López Portillo 37, Mariano Escobedo, 54946 Buenavista, Estado de México",
      phone: "+52 55 7696 9710",
      phone2: "+52 55 7862 6524",
      businessHours: [
        { days: "Lunes a Viernes", hours: "9:00 AM - 6:00 PM" },
        { days: "Sábados", hours: "9:00 AM - 5:00 PM" },
        { days: "Domingos", hours: "9:00 AM - 12:00 PM" }
      ],
      socialMedia: {
        facebook: "https://www.facebook.com/autopartes3hnos/",
      }
    }
  ];

  return (
    <section className="location-section" id="ubicacion">
      <div className="location-container">
        <div className="location-header">
          <h2>
            <MapPin size={32} className="icon-spacing" />
            Datos de Contacto
          </h2>
          <p className="location-subtitle">
            Visítanos en nuestras instalaciones, estamos para servirte.
          </p>
        </div>

        <div className="locations-grid">
          {businessLocations.map((location, index) => (
            <div key={index} className="location-card">
              <div className="location-card-header">
                <div className="location-badge">{location.type || "Sucursal"}</div>
                <h3>{location.name}</h3>
              </div>
              
              <div className="location-info">
                {/* Dirección */}
                <div className="info-item">
                  <div className="info-icon">
                    <MapPin size={20} />
                  </div>
                  <div className="info-content">
                    <h4>Dirección</h4>
                    <p>{location.address}</p>
                  </div>
                </div>
                
                {/* Teléfonos */}
                <div className="info-item">
                  <div className="info-icon">
                    <Phone size={20} />
                  </div>
                  <div className="info-content">
                    <h4>Teléfonos de Contacto</h4>
                    <div className="phone-numbers">
                      <div className="phone-group">
                        <a 
                          href={`https://wa.me/${location.phone.replace(/\s/g, '')}?text=${encodeURIComponent("Hola, visité su página web y estoy interesado(a) en: ")}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="whatsapp-link primary"
                        >
                          <MessageCircle size={18} />
                          {location.phone}
                          <span className="link-badge">WhatsApp</span>
                        </a>
                      </div>
                      {location.phone2 && (
                        <div className="phone-group">
                          <a 
                            href={`https://wa.me/${location.phone2.replace(/\s/g, '')}?text=${encodeURIComponent("Hola, visité su página web y estoy interesado(a) en: ")}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="whatsapp-link secondary"
                          >
                            <MessageCircle size={18} />
                            {location.phone2}
                            <span className="link-badge">WhatsApp</span>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
               
                {/* Horario de atención */}
                <div className="info-item">
                  <div className="info-icon">
                    <Clock size={20} />
                  </div>
                  <div className="info-content">
                    <h4>Horario de Atención</h4>
                    <div className="schedule">
                      {location.businessHours.map((schedule, idx) => (
                        <div key={idx} className="schedule-item">
                          <div className="schedule-icon">
                            {schedule.days.includes("Domingo") ? (
                              <CalendarOff size={16} />
                            ) : (
                              <Calendar size={16} />
                            )}
                          </div>
                          <div className="schedule-details">
                            <span className="schedule-days">{schedule.days}</span>
                            <span className="schedule-hours">{schedule.hours}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Redes Sociales */}
                <div className="info-item">
                  <div className="info-icon">
                    <Share2 size={20} />
                  </div>
                  <div className="info-content">
                    <h4>Síguenos en Redes</h4>
                    <div className="social-media">
                      <a 
                        href={location.socialMedia.facebook} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-link facebook"
                      >
                        <Facebook size={18} />
                        Facebook
                      </a>
                      {/* Opcional: Si agregas Instagram en el futuro */}
                      {/* location.socialMedia.instagram && (
                        <a 
                          href={location.socialMedia.instagram} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="social-link instagram"
                        >
                          <Instagram size={18} />
                          Instagram
                        </a>
                      ) */}
                    </div>
                  </div>
                </div>
              </div>

              {/* Botón de acción principal */}
              <div className="location-actions">
                <a 
                  href={`https://wa.me/${location.phone.replace(/\s/g, '')}?text=${encodeURIComponent("Hola, visité su página web y me gustaría obtener más información sobre sus autopartes: ")}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="whatsapp-btn"
                >
                  <MessageCircle size={20} />
                  Contactar por WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationMap;