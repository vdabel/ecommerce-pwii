import { useEffect, useState } from "react";
import type { Product } from "../types/Product";
import './About.css'

const About = () => {
  const [listaProductos, setListaProductos] = useState<Product[]>([]);

  useEffect(() => {
    leerServicio();
  }, []);

  const leerServicio = () => {
    fetch('https://abel159.alwaysdata.net/product.php')
      .then(response => response.json())
      .then(data => setListaProductos(data))
  }

  const dibujarTabla = () => {
    return (
      <table className="tabla-servicio">
        <thead>
          <tr>
            <th>NOMBRE</th>
            <th>DESCRIPCIÓN</th>
            <th>PRECIO</th>
            <th>STOCK</th>
          </tr>
        </thead>
        <tbody>
          {listaProductos.map(product =>
            <tr key={product.idproducto}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  return (
    <section className="max-w-7xl m-auto py-15">
      <div className="flex justify-center items-center">
        {dibujarTabla()}
      </div>
    </section>
  );
}

export default About