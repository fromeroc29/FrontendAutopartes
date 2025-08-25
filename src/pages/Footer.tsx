import { Facebook, Instagram, Mail, Phone, MapPin,Calendar,CalendarOff, MessageCircle } from 'lucide-react';

import '../Footer.css';

function Footer() {

const contactInfo = {
  phone: "+525576969710",
  email: "autoparteshrr@hotmail.com",
  address: "Melchor Ocampo 39-F Col. Mariano Escobedo, 54946 Buenavista, Tultitlan Edo. Méx.",
  businessHours: [
    {
      days: "Lunes a Viernes",
      hours: "8:00 AM - 6:00 PM",
      icon: "Calendar" // Icono para días laborales
    },
    {
      days: "Sábados",
      hours: "9:00 AM - 2:00 PM",
      icon: "Calendar" // Mismo icono o uno diferente
    },
    {
      days: "Domingos",
      hours: "Cerrado",
      icon: "CalendarOff" // Icono para cerrado
    }
  ],
  socialMedia: {
    facebook: "https://www.facebook.com/autopartes3hnos/",
    instagram: "https://instagram.com/autopartestreshermanos",
    whatsapp: "+525576969710"
  }
};

console.log("*******",contactInfo)

  return (
    <footer className="footer-allaudio">
      <div className="footer-container">
        {/* Sección superior del footer */}
        <div className="footer-top">
          <div className="footer-section">
            <h3>Autopartes Tres Hermanos</h3>
            <p>Tu proveedor confiable de autopartes y repuestos de calidad para todo tipo de vehículos.</p>
            {/* <div className="social-links">
              <a href="#" aria-label="Facebook">
                <Facebook size={25} />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter size={25} />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram size={25} />
              </a>
            </div> */}
            <div className="social-links">
              <a href={contactInfo.socialMedia.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <Facebook size={25} />
              </a>
              <a href={`https://wa.me/${contactInfo.socialMedia.whatsapp}`} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={25} /> {/* Icono de WhatsApp */}
              </a>
              <a href={contactInfo.socialMedia.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <Instagram size={25} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Enlaces rápidos</h4>
            <ul>
              <li><a href="#productos">Productos</a></li>
              <li><a href="#marcas">Marcas</a></li>
              <li><a href="#categorias">Categorías</a></li>
              <li><a href="#ofertas">Ofertas</a></li>
              <li><a href="#conocenos">Conocenos</a></li>
              <li><a href="#ubicacion">Como llegar</a></li>
            </ul>
          </div>

{/*           <div className="footer-section">
            <h4>Contacto</h4>
            <div className="contact-info">
              <div className="contact-item">
                <Phone size={20} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <Mail size={20} />
                <span>info@autopartestreshermanos.com</span>
              </div>
              <div className="contact-item">
                <MapPin size={20} />
                <span>Av. Principal #123, Ciudad</span>
              </div>
            </div>
          </div> */}

          <div className="footer-section">
            <h4>Contacto</h4>
            <div className="contact-info">
              <div className="contact-item">
                <Phone size={20} />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="contact-item">
                <Mail size={20} />
                <span>{contactInfo.email}</span>
              </div>
              <div className="contact-item">
                <MapPin size={20} />
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </div>

{/*           <div className="footer-section">
            <h4>Horario de atención</h4>
            <div className="schedule">
              <p>Lunes a Viernes: 8:00 AM - 6:00 PM</p>
              <p>Sábados: 9:00 AM - 2:00 PM</p>
              <p>Domingos: Cerrado</p>
            </div>
          </div>
 */}

          <div className="footer-section">
            <h4>Horario de atención</h4>
            <div className="schedule">
              {contactInfo.businessHours.map((schedule, index) => (
                <div key={index} className="schedule-item">
                  {schedule.days === "Lunes a Viernes" && <Calendar size={20} />}
                  {schedule.days === "Sábados" && <Calendar size={20} />}
                  {schedule.days === "Domingos" && <CalendarOff size={20} />}
                  <span>
                    <strong>{schedule.days}:</strong> {schedule.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Línea separadora */}
        <div className="footer-divider"></div>

        {/* Sección inferior del footer */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>© 2025 Autopartes Tres Hermanos. Todos los derechos reservados.</p>
            <div className="legal-links">
              <a href="#privacidad">Política de privacidad</a>
              <a href="#terminos">Términos de servicio</a>
              <a href="#garantias">Garantías</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
