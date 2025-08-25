import DatosNegocioPage from "./pages/DatosNegocio";
import ProductosDestacados from "./pages/ProductosDestacados";
import MarcasAutopartes from "./pages/MarcasAutopartes";
import Categorias from "./pages/Categorias";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Conocenos from "./pages/Conocenos";
import Ofertas from "./pages/Ofertas";
import LocationMap from "./pages/Ubicacion";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Contenido principal con margen superior para el header fijo */}
      <main className="flex-grow container mx-auto px-4 mt-28 md:mt-32 pb-16 space-y-16">
        <DatosNegocioPage />
        <ProductosDestacados />
        <MarcasAutopartes />
        <Categorias />
        <Conocenos />
        <Ofertas />
        <LocationMap />
      </main>

      <Footer />
    </div>
  );
}

export default App;