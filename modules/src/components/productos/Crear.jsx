import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

// Definimos la esrtuctura del componente

export const Crear = ({ setListadoState }) => {
  const [productState, setProductState] = useState({
    title: "",
    description: "",
    valor: "",
    image: null,
  });

  // Estado para la imagen
  const [fileName, setFileName] = useState("");

  // Funcion para cargar imagen 
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFileName(selectedFile ? selectedFile.name : "");
  };

  const { title, description, image, valor } = productState;

  // Funcion para extraer valores del fomulario de productos
  const getFormValues = (e) => {
    e.preventDefault();
    let target = e.target;
    let title = target.title.value;
    let description = target.description.value;
    let valor = target.valor.value;
    let image = target.imagen.files[0];

    // Creamos el objeto del producto a guardar

    let producto = {
      id: new Date().getTime(),
      title,
      description,
      valor,
      image: URL.createObjectURL(image),
    };

    // Actulizacion del estado del producto

    setProductState({
      title: title,
      description: description,
      valor: valor,
      image: image,
    });


    // actulizar el estado del listado principal

    setListadoState((prevListado) => {
      if (!prevListado) {
        prevListado = [];
      }
      return [...prevListado, producto];
    });

    // Se guarda el producto en el almacenamiento local
    localStorage.setItem("productos", JSON.stringify(producto));
  };

  // Retonamos el componente a renderizar
  return (
    <div className="add">
      <h3 className="text-titles">Añadir nuevos productos </h3>
      <strong>
        {title && description && `Producto añadido: ${description}`}
      </strong>
      <Form onSubmit={getFormValues}>
        <Form.Control
          type="text"
          id="title"
          placeholder="Marca del producto"
          name="titulo"
          minLength={1}
          maxLength={20}
        />
        <Form.Control
          type="number"
          id="valor"
          name="valor"
          placeholder="Precio del producto"
          className="mt-2"
          maxLength={30}
          minLength={1}
        />
        <label htmlFor="file-upload" className="custom-file-upload">
          <span className="container-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-1 h-1 uploap">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
              />
            </svg>
            Añadir imagen del producto
          </span>
        </label>
        <input
          id="file-upload"
          type="file"
          style={{ display: "none" }}
          onChange={handleFileChange}
          name="imagen"
        />
        <Form.Control
          as="textarea"
          name="description"
          id="description"
          cols="30"
          rows="10"
          className="textarea-crear"
          placeholder="Descripcion "
        />
        <span className="container-btn">
          <Button
            className="btn btn-custom mt-3"
            varian="primary"
            type="submit">
            Añadir
          </Button>
        </span>
      </Form>
    </div>
  );
};
