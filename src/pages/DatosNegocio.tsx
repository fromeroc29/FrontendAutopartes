import { useEffect, useState } from "react";
import api from "../api/cliente";

interface DatosNegocio {
  id: number;
  nombre_negocio: string;
  propietario: string;
  direccion: string;
  ciudad: string;
  correo_electronico: string;
  codigo_postal: string;
  redes_sociales: string;
  sitio_web: string;
  // agrega más campos según tu API
}

export default function DatosNegocioPage() {
  
 const [datos, setDatos] = useState<DatosNegocio | null>(null);

useEffect(() => {
    const id = 1;
    api.get<DatosNegocio>(`/datos_negocio/${id}`)
      .then((res) => setDatos(res.data))
      .catch((err) => console.error("Error al cargar datos:", err));
  }, []);

  console.log("datos:",datos)

return (
<div className="datos-negocio">
  <h1>Contáctanos</h1>
  {datos ? (
    <table className="datos-table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Propietario</th>
          <th>Correo</th>
          <th>Dirección</th>
          <th>Ciudad</th>
          <th>C.P.</th>
          <th>Sitio Web</th>
          <th>Redes Sociales</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{datos.nombre_negocio}</td>
          <td>{datos.propietario}</td>
          <td>{datos.correo_electronico}</td>
          <td>{datos.direccion}</td>
          <td>{datos.ciudad}</td>
          <td>{datos.codigo_postal}</td>
          <td>{datos.sitio_web}</td>
          <td>{datos.redes_sociales}</td>
        </tr>
      </tbody>
    </table>
  ) : (
    <p style={{ color: "red", textAlign: "center" }}>
      ⚠️ No hay información cargada
    </p>
  )}
</div>

);

}
