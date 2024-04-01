import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/MenuCategory.scss"; // Importar el archivo de estilos Sass

export const MenuCategory = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <button className="MenuCategory-Button" onClick={handleClick}>X</button>
      <div className={`MenuCategory ${isActive ? "isVisible" : ""}`}>
        <h2 className="MenuCategory-Title">Categorias</h2>
        <Link className="MenuCategory-Link" to="/categoria1">
          Categoria 1
        </Link>

        <Link className="MenuCategory-Link" to="/categoria2">
          Categoria 2
        </Link>

        <Link className="MenuCategory-Link" to="/categoria3">
          Categoria 3
        </Link>

        <Link className="MenuCategory-Link" to="/categoria4">
          Categoria 4
        </Link>

        <Link className="MenuCategory-Link" to="/categoria5">
          Categoria 5
        </Link>
      </div>
    </>
  );
};
