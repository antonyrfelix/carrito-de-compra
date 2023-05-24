import Producto from "./producto";
const Populares = (props) => {
  const agregarProducto = (productoQueReciboComoParametro) => {
    let carritoDeCompraSession = JSON.parse(
      sessionStorage.getItem("carritoDeCompra")
    );
    if (!carritoDeCompraSession) {
      sessionStorage.setItem(
        "carritoDeCompra",
        JSON.stringify([productoQueReciboComoParametro])
      );
    } else {
      carritoDeCompraSession.push(productoQueReciboComoParametro);
      sessionStorage.setItem(
        "carritoDeCompra",
        JSON.stringify(carritoDeCompraSession)
      );
    }
  };
  return (
    <>
      <div className="populares">
        <h2 className="title">Productos Populares</h2>
        <button className="botones-productos-populares">Zapatillas</button>
        <button className="botones-productos-populares">Moda</button>
        <button className="botones-productos-populares">Accesorios</button>
        <button className="botones-productos-populares">Tecnologia</button>
      </div>
      <div className="padre-cards">
        <div className="cards-list">
          {props.productos.map((card) => {
            return (
              <Producto
                key={card.id}
                titulo={card.titulo}
                imagen={card.imagen}
                description={card.description}
                precio={card.precio}
                clickAlBoton={() => agregarProducto(card)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Populares;
