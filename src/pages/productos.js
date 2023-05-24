import Lista from "../components/lista";
import Producto from "../components/producto";

const ProductosPage = () => {
  const listaDeProductos = [
    {
      id: 1,
      imagen: "img/img-product1.jpg",
      titulo: "Zapatillas nike de baloncesto",
      description: "Las mejores zapatillas para jugar baloncesto",
      textoBoton: "Añadir al carrito",
      precio: 200,
    },
    {
      id: 2,
      imagen: "img/img-product2.jpg",
      titulo: "Zapatillas Vans urbanas",
      description: "Las mejores zapatillas para skaters",
      textoBoton: "Añadir al carrito",
      precio: 180,
    },
    {
      id: 3,
      imagen: "img/img-product3.jpg",
      titulo: "Zapatillas adidas",
      description: "Zapatillas comodas para todo tipo de personas",
      textoBoton: "Añadir al carrito",
      precio: 300,
    },
    {
      id: 4,
      imagen: "img/img-product4.jpg",
      titulo: "Zapatillas adidas urbanas",
      description: "Las mejores zapatillas para jugar baloncesto",
      textoBoton: "Añadir al carrito",
      precio: 150,
    },
    {
      id: 5,
      imagen: "img/img-product5.jpg",
      titulo: "Zapatillas nike de baloncesto",
      description: "Las mejores zapatillas para jugar baloncesto",
      textoBoton: "Añadir al carrito",
      precio: 200,
    },
    {
      id: 6,
      imagen: "img/img-product6.jpg",
      titulo: "Zapatillas Vans urbanas",
      description: "Las mejores zapatillas para skaters",
      textoBoton: "Añadir al carrito",
      precio: 180,
    },
    {
      id: 7,
      imagen: "img/img-product7.jpg",
      titulo: "Zapatillas adidas",
      description: "Zapatillas comodas para todo tipo de personas",
      textoBoton: "Añadir al carrito",
      precio: 300,
    },
    {
      id: 8,
      imagen: "img/img-product8.jpg",
      titulo: "Zapatillas adidas urbanas",
      description: "Las mejores zapatillas para jugar baloncesto",
      textoBoton: "Añadir al carrito",
      precio: 150,
    },
    {
      id: 9,
      imagen: "img/img-product9.jpg",
      titulo: "Zapatillas Vans urbanas",
      description: "Las mejores zapatillas para skaters",
      textoBoton: "Añadir al carrito",
      precio: 180,
    },
    {
      id: 10,
      imagen: "img/img-product10.jpg",
      titulo: "Zapatillas adidas",
      description: "Zapatillas comodas para todo tipo de personas",
      textoBoton: "Añadir al carrito",
      precio: 300,
    },
    {
      id: 11,
      imagen: "img/img-product11.jpg",
      titulo: "Zapatillas adidas urbanas",
      description: "Las mejores zapatillas para jugar baloncesto",
      textoBoton: "Añadir al carrito",
      precio: 150,
    },
    {
      id: 12,
      imagen: "img/img-product12.jpg",
      titulo: "Zapatillas adidas urbanas",
      description: "Las mejores zapatillas para jugar baloncesto",
      textoBoton: "Añadir al carrito",
      precio: 150,
    },
    {
      id: 13,
      imagen: "img/img-product13.jpg",
      titulo: "Zapatillas adidas",
      description: "Zapatillas comodas para todo tipo de personas",
      textoBoton: "Añadir al carrito",
      precio: 300,
    },
    {
      id: 14,
      imagen: "img/img-product14.jpg",
      titulo: "Zapatillas adidas urbanas",
      description: "Las mejores zapatillas para jugar baloncesto",
      textoBoton: "Añadir al carrito",
      precio: 150,
    },
    {
      id: 15,
      imagen: "img/img-product15.jpg",
      titulo: "Zapatillas adidas urbanas",
      description: "Las mejores zapatillas para jugar baloncesto",
      textoBoton: "Añadir al carrito",
      precio: 150,
    },
    {
      id: 16,
      imagen: "img/img-product16.jpg",
      titulo: "Zapatillas adidas urbanas",
      description: "Las mejores zapatillas para jugar baloncesto",
      textoBoton: "Añadir al carrito",
      precio: 150,
    },
  ];
  // const productosAgregados = [];
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
    <div className="productos">
      <h1>Productos</h1>
      <div className="productos-lista">
        {listaDeProductos.map((producto) => {
          return (
            <div className="productos-lista-item" key={producto.id}>
              <Producto
                titulo={producto.titulo}
                imagen={producto.imagen}
                description={producto.description}
                precio={producto.precio}
                clickAlBoton={() => agregarProducto(producto)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ProductosPage;
