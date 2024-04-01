import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/MenuCategory.scss"; // Importar el archivo de estilos Sass

export const MenuCategory = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggleClick = () => {
    setIsActive(!isActive);
  };
  const handleClick = () => {
    setIsActive(false);
  };
  
  return (
    <>
      <button className="MenuCategory-Button" onClick={handleToggleClick}>X</button>
      <div className={`MenuCategory ${isActive ? "isVisible" : ""}`}>
        <h2 className="MenuCategory-Title">Categorias</h2>
        <Link className="MenuCategory-Link" onClick={handleClick} to="/category/agrimensura">
          Agrimensura
        </Link>

        <Link className="MenuCategory-Link" onClick={handleClick} to="/category/almacen">
          Almacén
        </Link>

        <Link className="MenuCategory-Link" onClick={handleClick} to="/category/gestorpersonal">
          Personal / Empresa
        </Link>

        <Link className="MenuCategory-Link" onClick={handleClick} to="/category/inmobiliaria">
        Inmobiliaria
        </Link>

        <Link className="MenuCategory-Link" onClick={handleClick} to="/category/multimedia">
        Multimedia
        </Link>
      </div>
    </>
  );
};
