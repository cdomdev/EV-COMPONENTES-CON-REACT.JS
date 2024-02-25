// importamos de paquetes a utilizar
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// Definimos la esrtuctura del componente

export function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [message, setMesage] = useState("");
  const navigate = useNavigate();

  // Función para manejar cambios en los campos del formulario
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  // Envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("userOnline", JSON.stringify(formData));
    if (formData.email.length === 0) {
      setMesage("¡Agregue cualquier dato para continuar!");
      setTimeout(() => {
        setMesage("");
      }, 2000);
    } else {
      navigate("/productos");
    }
  };

  // Cuerpo del componente a retornar
  return (
    <div className="fomr-login">
      <h1>Login</h1>
      <span style={{ textAlign: "center", color: "red", height: "20px" }}>
        {message}
      </span>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 form-body mt-3" controlId="formBasicEmail">
          <Form.Label> Usuario</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese su usuario"
            className="inp"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3 form-body" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="*********"
            className="inp"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3 " controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Check me out"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Iniciar sesion
        </Button>
      </Form>
    </div>
  );
}
