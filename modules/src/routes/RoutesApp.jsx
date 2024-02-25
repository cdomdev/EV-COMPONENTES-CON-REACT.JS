import { Login } from "../components/Login/Login";
import { Route, Routes } from "react-router-dom";
import { PageAddProducts } from "../components/productos/PageAddProducts";

// Definimos rutas con react-router-dom
export const RoutesApp = () => {
  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/productos" element={<PageAddProducts />} />
      </Routes>
    </>
  );
};
