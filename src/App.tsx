
import ProductosDestacados from "./pages/ProductosDestacados";
import MarcasAutopartes from "./pages/MarcasAutopartes";

import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Conocenos from "./pages/Conocenos";
import Ofertas from "./pages/Ofertas";
import LocationMap from "./pages/Ubicacion";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <br />
      <br />
      <Header />

      {/* Contenido principal con margen superior para el header fijo */}
      <main className="flex-grow container mx-auto px-4 mt-28 md:mt-32 pb-16 space-y-16">
        {/*   <DatosNegocioPage /> */}
        <br /><br /><br />
        <Conocenos />
        <Ofertas />
        <ProductosDestacados />
        {/*<MarcasAutopartes />*/}
        {/* <Categorias /> */}


        <LocationMap />
      </main>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;