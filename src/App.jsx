import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { MenuCategory } from "./components/MenuCategory.jsx";

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
        <Route path="/categoria1" element={<Categoria1 />} />
        <Route path="/categoria2" element={<Categoria2 />} />
        <Route path="/categoria3" element={<Categoria3 />} />
        <Route path="/categoria4" element={<Categoria4 />} />
        <Route path="/categoria5" element={<Categoria5 />} />
        <Route path="/categoria6" element={<Categoria6 />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};
