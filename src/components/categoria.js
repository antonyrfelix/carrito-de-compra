const Categoria = (props) => {
  return (
    <div className="categorias-list-item">
      <img src={props.imagen} className="img-categorias" alt={props.texto} />
      <div className="categoria-title">
        <p>{props.texto}</p>
      </div>
    </div>
  );
};
export default Categoria;
