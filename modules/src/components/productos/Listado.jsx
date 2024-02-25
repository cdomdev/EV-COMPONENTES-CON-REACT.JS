import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export const Listado = ({ listadoState, setListadoState }) => {
  // Obtener los productos guardados en local
  useEffect(() => {
    const storedProductos = localStorage.getItem("productos");
    if (storedProductos) {
      const productos = JSON.parse(storedProductos);
      if (Array.isArray(productos)) {
        setListadoState(productos);
      }
    }
  }, []);


  const borrarProducto = (id) => {
    // Filtrar los productos almacenados en el estado para eliminar el producto con el ID especificado
    const nuevoListadoProductos = listadoState.filter(
      (producto) => producto.id !== id
    );

    // Actualizar el estado del listado eliminando el producto
    setListadoState(nuevoListadoProductos);

    // Actualizar los datos en el localStorage eliminando el producto por su ID
    const productosString = JSON.stringify(nuevoListadoProductos);
    localStorage.setItem("productos", productosString);
  };

  return (
    <>
      {listadoState.length !== 0 ? (
        listadoState.map((producto) => {
          return (
            <div key={producto.id} className="productos-cards">
              {producto.image && (
                <img
                  className="img-productos"
                  src={producto.image}
                  alt="Preview"
                />
              )}
              <span className="title-cards">{producto.title}</span> <br />
              <span className="valor-cards">$: {producto.valor}</span>
              <p className="descripcion">{producto.description}</p>
              <div className="content-btn-card">
                <Button
                  className="btn-custom"
                  variant="primary"
                  onClick={() => borrarProducto(producto.id)}>
                  Borrar
                </Button>
              </div>
            </div>
          );
        })
      ) : (
        <h2 className="text-empty">No hay productos para mostrar</h2>
      )}
    </>
  );
};
