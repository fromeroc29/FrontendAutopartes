import { useState, useRef, useEffect } from 'react';
import n1 from '../assets/imagesNegocio/n1.jpg';
import n2 from '../assets/imagesNegocio/n2.jpg';
import n3 from '../assets/imagesNegocio/n3.jpg';
import toroLogo from '../assets/icons/toro.png';
import aguilaLogo from '../assets/icons/aguila.png';

import api from '../api/cliente';
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

const [datos, setDatos] = useState<DatosNegocio[] | null>(null);
const [primerDato, setPrimerDato] = useState<DatosNegocio | null>(null);

useEffect(() => {
  api.get<DatosNegocio[]>(`/datos_negocio/?skip=0&limit=10`)
    .then((res) => {
      setDatos(res.data);
      if (res.data && res.data.length > 0) {
        setPrimerDato(res.data[0]);
      }
    })
    .catch((err) => console.error("Error al cargar datos:", err));
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
        <img src={toroLogo} alt="Fundador y Propietario" />
      </div>
      <h4>{primerDato?.propietario?.split(' ')[0] || 'Juan'} {primerDato?.propietario?.split(' ')[1] || 'Pérez'}</h4>
      <p>Fundador y Ventas</p>
      <p>Telefono:  55 7696 9710</p>
    </div>
    <div className="team-member">
      <div className="member-photo">
        <img src={aguilaLogo} alt="Directora de Ventas" />
      </div>
      <h4>Sr. Fredy</h4>
      <p>Fundador y Ventas</p>
      <p>Telefono:  55 7862 6524</p>
    </div>
  </div>
</div>
    </div>
  </section>
);
}

export default Conocenos;