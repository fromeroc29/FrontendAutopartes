import { useState, useEffect } from 'react';
import n1 from '../assets/imagesNegocio/n1.jpg';
import n2 from '../assets/imagesNegocio/n2.jpg';
import n3 from '../assets/imagesNegocio/n3.jpg';
import torucho from '../assets/icons/torucho.png';
import aguilucho from '../assets/icons/aguilucho.png';
import '../Conocenos.css';

function Conocenos() {
  interface DatosNegocio {
    id_negocio: number;
    nombre_negocio: string;
    propietario?: string;
    telefono?: string;
    correo_electronico?: string;
    direccion?: string;
    ciudad?: string;
    estado?: string;
    pais?: string;
    codigo_postal?: string;
    sitio_web?: string;
    redes_sociales?: string;
    descripcion?: string;
    vision?: string;
    mision?: string;
    valores?: string;
    visible: boolean;
    usuario_creacion?: string;
    usuario_modificacion?: string;
    fecha_creacion: string;
    fecha_modificacion?: string | null;
  }

  // Datos en duro - reemplaza la llamada a la API
  const datos: DatosNegocio[] = [
    {
      "nombre_negocio": "Autopartes Tres Hermanos",
      "propietario": "Sr. Heraclio Rodriguez Rico",
      "telefono": "55 76 96 97 10",
      "correo_electronico": "heraclio.chilpan@gmail.com",
      "direccion": "Melchor Ocampo 39-F Col, Mariano Escobedo, 54946 Buenavista, Estado de México",
      "ciudad": "México",
      "estado": "México",
      "pais": "México",
      "codigo_postal": "54946",
      "sitio_web": "https://www.autoparteselcamino.com",
      "redes_sociales": "Facebook: autoparteselcamino; Instagram: @autoparteselcamino",
      "descripcion": "Nos especializamos en la venta de autopartes nuevas y usadas de la más alta calidad. Contamos con motores, transmisiones y refacciones para distintas marcas y modelos, siempre con precios competitivos y el respaldo de un servicio confiable.",
      "vision": "Convertirnos en el proveedor número uno de autopartes de calidad, donde cada cliente encuentre exactamente lo que necesita con el respaldo de nuestro expertise y compromiso",
      "mision": "Proveer autopartes nuevas y usadas de la más alta calidad, ofreciendo precios competitivos y un servicio confiable que garantice la satisfacción de nuestros clientes. Nos especializamos en motores, transmisiones y refacciones para diversas marcas y modelos, asegurando que cada vehículo reciba lo mejor.",
      "valores": "✅ CALIDAD\nGarantizamos autopartes que cumplen con los más altos estándares de durabilidad y rendimiento.\n\n💪 COMPROMISO\nNos dedicamos a superar las expectativas de nuestros clientes y contribuir al éxito de sus vehículos.\n\n⚡ SERVICIO\nBrindamos atención personalizada, asesoría experta y soluciones rápidas y efectivas.",
      "visible": true,
      "usuario_creacion": "admin",
      "usuario_modificacion": null,
      "id_negocio": 1,
      "fecha_creacion": "2025-08-09T13:23:54.532713",
      "fecha_modificacion": null
    }
  ];

  const [primerDato, setPrimerDato] = useState<DatosNegocio | null>(null);

  useEffect(() => {
    // Simulamos la carga de datos pero con los datos en duro
    if (datos && datos.length > 0) {
      setPrimerDato(datos[0]);
    }
  }, []);

  console.log("Array completo:", datos);
  console.log("Primer elemento:", primerDato);

  const formatValores = (valores: string) => {
    return valores.split('\n\n').map((item, index) => {
      const lines = item.split('\n');
      return (
        <li key={index} style={{ marginBottom: '1rem' }}>
          <strong>{lines[0]}</strong>
          {lines.length > 1 && <p style={{ margin: '0.5rem 0 0 0' }}>{lines[1]}</p>}
        </li>
      );
    });
  };

  const imagenes = [n1, n2, n3];

  return (
    <section id="conocenos" className="conocenos-section">
      <div className="conocenos-container">
        <h2>Conócenos</h2>
        <div className="conocenos-content">
          <div className="conocenos-text">

            <h3>Nuestra Visión</h3>
            <p>{primerDato?.vision || 'Proveer autopartes de calidad con servicio excepcional...'}</p>

            <h3>Nuestra Misión</h3>
            <p>{primerDato?.mision || 'Ser líderes en el mercado de autopartes...'}</p>

            <h3>Nuestros Valores</h3>
            <ul>
              {primerDato?.valores ? (
                formatValores(primerDato.valores)
              ) : (
                <>
                  <li>Calidad en todos nuestros productos</li>
                  <li>Honestidad en nuestro trato con clientes</li>
                  <li>Compromiso con el servicio post-venta</li>
                  <li>Innovación constante en nuestro catálogo</li>
                </>
              )}
            </ul>
          </div>

          <div className="conocenos-image">
            <div className="placeholder-image">
              <img src={n2} alt={`Imagen de ${primerDato?.nombre_negocio || 'nuestra tienda'}`} />
            </div>
            <br />
            <div className="placeholder-image">
              <img src={n3} alt={`Imagen de ${primerDato?.nombre_negocio || 'nuestra tienda'}`} />
            </div>
            <br />
            <div className="placeholder-image">
              <img src={n1} alt={`Imagen de ${primerDato?.nombre_negocio || 'nuestra tienda'}`} />
            </div>
          </div>
        </div>

        <div className="team-section">
          <h3>Nuestro Equipo</h3>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-photo">
                <img src={torucho} alt="Fundador y Propietario" />
              </div>
              <h4><b>{primerDato?.propietario?.split(' ')[0] || 'Juan'} {primerDato?.propietario?.split(' ')[1] || 'Pérez'}</b></h4>
              <p><b>Autopartes Tres Hermanos (Ventas)</b></p>
              <p><b>Telefono:  55 7696 9710</b></p>
              <p><b>Telefono:  55</b></p>
            </div>
            <div className="team-member">
              <div className="member-photo">
                <img src={aguilucho} alt="Directora de Ventas" />
              </div>
              <h4><b>Sr. Fredy</b></h4>
              <p><b>Autopartes del Norte (Ventas)</b></p>
              <p><b>Teléfono: 55 7862 6524</b></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Conocenos;