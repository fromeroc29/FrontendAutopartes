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

/* const telefono = contactInfo.socialMedia.whatsapp; */
/* const mensaje = "Hola, me interesa alguno de tus productos..."; */
/* const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`; */

console.log("*******",contactInfo)

  return (
    <footer className="footer-allaudio">
      <div className="footer-container">
        {/* Sección superior del footer */}
        <div className="footer-top">
          <div className="footer-section">
            <h3>Autopartes del Norte y Tres Hermanos</h3>
            <ul>
              <p>Compra y venta de refacciones <span><b>(nuevas y usadas)</b></span><br /> para autos y camionetas.</p>
           </ul>
           <ul>
            <p>Compra de <b>autos chocados</b> para desarmar.</p>
           </ul>
           <ul>
            <p>Compra de metales <b>industriales chatarra.</b></p>
           </ul>
          </div>

<div className="footer-section">
  <h4>Navegación</h4>
  <ul className="two-columns">
    <li><a href="#conocenos">Conócenos</a></li>
    <li><a href="#ofertas">Nuestros Productos</a></li>
    <li><a href="#productos">Vehiculos</a></li>
    {/*<li><a href="#marcas">Marcas</a></li>*/}
    <li><a href="#ubicacion">Información de contacto</a></li>
  </ul>
</div>
        </div>

        {/* Línea separadora */}
        <div className="footer-divider"></div>

        {/* Sección inferior del footer */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>© 2025 Autopartes del Norte y Tres Hermanos. Todos los derechos reservados.</p>
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
