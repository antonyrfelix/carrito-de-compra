import Carrusel from "../components/carrusel";
import Categorias from "../components/categorias";
import Footer from "../components/footer";
import Populares from "../components/populares";

const HomePage = () => {
  const imagenes = [
    {
      imagen: "img/ropa-slider.jpg",
      alt: "imagen del banner",
    },
    {
      imagen: "img/zapatillas-slider.jpg",
      alt: "imagen del banner",
    },
    {
      imagen: "img/accesorios-slider.jpg",
      alt: "imagen del banner",
    },
  ];
  const categoriasLista = [
    {
      imagen: "img/ropa.jpg",
      texto: "Todo en ropa",
      url: "/ropa",
    },
    {
      imagen: "img/zapatilla.jpg",
      texto: "Todo en Calzado",
      url: "/calzado",
    },
    {
      imagen: "img/accesorios.jpg",
      texto: "Todo en accesorios",
      url: "/accesorios",
    },
    {
      imagen: "img/tecnologia.jpg",
      texto: "Todo en tecnologia",
      url: "/tecnologia",
    },
  ];
  const cards = [
    {
      id: 1,
      imagen: "img/zapatilla-card1.jpg",
      titulo: "Zapatillas nike de baloncesto",
      description: "Las mejores zapatillas para jugar baloncesto",
      textoBoton: "Añadir al carrito",
      precio: 200,
    },
    {
      id: 2,
      imagen: "img/zapatilla-card2.jpg",
      titulo: "Zapatillas Vans urbanas",
      description: "Las mejores zapatillas para skaters",
      textoBoton: "Añadir al carrito",
      precio: 180,
    },
    {
      id: 3,
      imagen: "img/zapatilla-card3.jpg",
      titulo: "Zapatillas adidas",
      description: "Zapatillas comodas para todo tipo de personas",
      textoBoton: "Añadir al carrito",
      precio: 300,
    },
    {
      id: 4,
      imagen: "img/zapatilla-card4.jpg",
      titulo: "Zapatillas adidas urbanas",
      description: "Las mejores zapatillas para jugar baloncesto",
      textoBoton: "Añadir al carrito",
      precio: 150,
    },
  ];
  return (
    <div className="container">
      <div className="main-container"></div>
      <Carrusel imagenesCarrusel={imagenes} />
      <Categorias lista={categoriasLista} />
      <Populares productos={cards} />
      <Footer />
    </div>
  );
};
export default HomePage;
