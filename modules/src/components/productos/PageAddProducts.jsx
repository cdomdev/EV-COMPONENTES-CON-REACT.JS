import React, { useState, useEffect } from "react";
import { Crear } from "./Crear";
import { Listado } from "./Listado";
// Definimos el compornetes padre en el contexto de paginas
export const PageAddProducts = () => {
  // definimos el estado que sera pasado como prop a los componenmtes hijos
  const [listadoState, setListadoState] = useState([]);
  const [data, setData] = useState([]);

  // Extraemons los datos del local
  useEffect(() => {
    const userDta = localStorage.getItem("userOnline");
    if (userDta) {
      const data = JSON.parse(userDta);
      setData(data);
    }
  }, []);

  // Retornamos el componentes a renderizar
  return (
    <section className="layout-home">
      <div className="header">
        <h1>Hola! </h1>
        <h2>{data.email}</h2>
      </div>
      <aside className="sidebar">
        <Crear setListadoState={setListadoState} />
      </aside>
      <article className="body">
        <Listado
          listadoState={listadoState}
          setListadoState={setListadoState}
        />
      </article>
    </section>
  );
};
