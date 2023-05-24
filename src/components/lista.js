const Lista = (props) => {
  //   const { titulo, description, imagen } = props; Destructuracion de objetos
  return (
    <div className="cards-list-item">
      <div className="cards-list-item-image">
        <img src={props.imagen} className="imagenes-cards" alt="" />
      </div>
      <div className="cards-list-item-info">
        <h5 className="titulo-productos">{props.titulo}</h5>
        <p className="parrafo-productos">{props.description}</p>
        <p className="precio-productos">S/{props.precio}</p>
        {!props.ocultarBoton && (
          <button className="boton-cards" onClick={props.clickAlBoton}>
            Añadir al carrito
          </button>
        )}
      </div>
    </div>
  );
};
export default Lista;
