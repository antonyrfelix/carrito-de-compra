import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Carrusel = (props) => {
  const settings = {
    dots: true,
    autoplaySpeed: 3000,
    autoplay: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: false,
    variableHeight: true,
    cssEase: "linear",
    arrows: false,
  };
  return (
    <div>
      <Slider {...settings}>
        {props.imagenesCarrusel.map((carrusel) => {
          return (
            <div className="carousel-item">
              <img
                src={carrusel.imagen}
                className="slider-img"
                alt={carrusel.alt}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
export default Carrusel;
