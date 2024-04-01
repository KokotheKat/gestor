import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { MenuCategory } from "./components/MenuCategory.jsx";
import CategoryAgrimensura from "./components/categorias/CategoryAgrimensura.jsx";
import CategoryAlmacen from "./components/categorias/CategoryAlmacen.jsx";
import CategoryGestorPersonal from "./components/categorias/CategoryGestorPersonal.jsx";
import CategoryInmobiliaria from "./components/categorias/CategoryInmobiliaria.jsx";
import CategoryMultimedia from "./components/categorias/CategoryMultimedia.jsx";


const Categoria1 = () => <div>Contenido Categoría 1</div>;
const Categoria2 = () => <div>Contenido Categoría 2</div>;
const Categoria3 = () => <div>Contenido Categoría 3</div>;
const Categoria4 = () => <div>Contenido Categoría 4</div>;
const Categoria5 = () => <div>Contenido Categoría 5</div>;
const Categoria6 = () => <div>Contenido Categoría 6</div>;

export const App = () => {
  return (
    <Router>
      <MenuCategory />
      <Routes>
        <Route path="/" element={<Categoria1 />} />
        <Route path="/category/agrimensura" element={<CategoryAgrimensura />} />
        <Route path="/category/almacen" element={<CategoryAlmacen />} />
        <Route path="/category/gestorpersonal" element={<CategoryGestorPersonal />} />
        <Route path="/category/inmobiliaria" element={<CategoryInmobiliaria />} />
        <Route path="/category/multimedia" element={<CategoryMultimedia />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};
