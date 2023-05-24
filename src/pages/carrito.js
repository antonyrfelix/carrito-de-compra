import { useEffect, useState } from "react";
import Producto from "../components/producto";

const Carrito = () => {
  let carritoDeCompraSessionStorage = JSON.parse(
    sessionStorage.getItem("carritoDeCompra")
  );
  const [productosDelCarrito, setProductosDelCarrito] = useState(
    carritoDeCompraSessionStorage || []
  );
  return (
    <div className="carrito-de-compra">
      <>
        {productosDelCarrito.length === 0 ? (
          <h2>No hay productos agregados al carrito</h2>
        ) : (
          <div className="productos-lista">
            {productosDelCarrito.map((producto, index) => {
              return (
                <div className="productos-lista-item">
                  <Producto
                    key={index}
                    titulo={producto.titulo}
                    imagen={producto.imagen}
                    description={producto.description}
                    precio={producto.precio}
                    ocultarBoton={false}
                    clickAlBoton={() => {
                      alert("Tiene que registrarse para poder comprar");
                    }}
                  />
                </div>
              );
            })}
          </div>
        )}
      </>
    </div>
  );
};

export default Carrito;
