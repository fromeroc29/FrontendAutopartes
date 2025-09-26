import { MapPin, Phone, MessageCircle, Calendar, CalendarOff, Facebook, Instagram } from 'lucide-react';
import '../Ubicacion.css';

const LocationMap = () => {
  // Datos del negocio
  const businessLocations = [
    {
      name: "Autopartes Tres Hermanos",
      address: "Melchor Ocampo 39-F Col, Mariano Escobedo, 54946 Buenavista, Estado de México",
      phone: "+52 55 7696 9710",
      phone2: "+52 55 7862 6524",
      phone3: "+52 55 7346 8047",
      businessHours: [
        { days: "Lunes a Viernes", hours: "9:00 AM - 6:00 PM" },
        { days: "Sábados", hours: "9:00 AM - 5:00 PM" },
        { days: "Domingos", hours: "9:00 AM - 12:00 PM" }
      ],
      socialMedia: {
        facebook: "https://www.facebook.com/autopartes3hnos/",
        instagram: "https://www.instagram.com/alteck_frc/",
      }
    },
    {
      name: "Autopartes del Norte",
      address: "Avenida José López Portillo 37, Mariano Escobedo, 54946 Buenavista, Estado de México",
      phone: "+52 55 7696 9710",
      phone2: "+52 55 7862 6524",
      phone3: "+52 55 7346 8047",
      businessHours: [
        { days: "Lunes a Viernes", hours: "9:00 AM - 6:00 PM" },
        { days: "Sábados", hours: "9:00 AM - 5:00 PM" },
        { days: "Domingos", hours: "9:00 AM - 12:00 PM" }
      ],
      socialMedia: {
        facebook: "https://www.facebook.com/AlteckMac/",
        instagram: "https://instagram.com/autopartestreshermanos",
      }
    }
  ];

  return (
    <section className="location-section" id="ubicacion">
      <div className="location-container">
        <div className="location-header">
          <h2>
            <MapPin size={32} className="icon-spacing" />
            Datos de contacto
          </h2>
          <strong>
            <p className="location-subtitle">
              Visítanos en nuestras instalaciones, estamos para servirte.
            </p>
          </strong>
        </div>

        <div className="locations-grid">
          {businessLocations.map((location, index) => (
            <div key={index} className="location-card">
              <div className="location-card-header">
                <h3>{location.name}</h3>
              </div>
              
              <div className="location-info">
                <div className="info-item">
                  <div className="info-icon">
                    <MapPin size={20} />
                  </div>
                  <div className="info-content">
                    <b><p>{location.address}</p></b>
                  </div>
                </div>
                <br />
                <div className="info-item">
                  <div className="info-icon">
                    <Phone size={20} />
                  </div>
                  <div className="info-content">
                     <h4>Telefonos de contacto</h4>
                    <div className="phone-numbers">
                    <a 
                      href={`https://wa.me/${location.phone.replace(/\s/g, '')}?text=${encodeURIComponent("Hola, estoy interesado en algo de tus productos...")}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="whatsapp-link"
                    >
                      <MessageCircle size={18} />
                      {location.phone}
                    </a>
                      <a 
                      href={`https://wa.me/${location.phone2.replace(/\s/g, '')}?text=${encodeURIComponent("Hola, estoy interesado en algo de tus productos...")}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="whatsapp-link"
                      >
                        <MessageCircle size={18} />
                        {location.phone2}
                      </a>
                      <a 
                        href={`https://wa.me/${location.phone3.replace(/\s/g, '')}?text=${encodeURIComponent("Hola, estoy interesado en algo de tus productos...")}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="whatsapp-link"
                      >
                        <MessageCircle size={18} />
                        {location.phone3}
                      </a>
                    </div>
                  </div>
                </div>
              <br />
                {/* Horario de atención */}
                <div className="info-item">
                  <div className="info-icon">
                    <Calendar size={20} />
                  </div>
                  <div className="info-content">
                    <h4>Horario de atención</h4>
                    <div className="schedule">
                      {location.businessHours.map((schedule, idx) => (
                        <div key={idx} className="schedule-item">
                          {schedule.days === "Lunes a Viernes" && <Calendar size={16} />}
                          {schedule.days === "Sábados" && <Calendar size={16} />}
                          {schedule.days === "Domingos" && <CalendarOff size={16} />}
                          <span>
                            <strong>{schedule.days}:</strong> {schedule.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <br />
                {/* Redes Sociales */}
                <div className="info-item">
                  <div className="info-icon">
                    <Facebook size={20} />
                  </div>
                  <div className="info-content">
                    <h4>Redes Sociales</h4>
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
                      <a 
                        href={location.socialMedia.instagram} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-link instagram"
                      >
                        <Instagram size={18} />
                        Instagram
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationMap;