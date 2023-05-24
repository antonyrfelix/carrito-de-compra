import Categoria from "./categoria";

const Categorias = (props) => {
  return (
    <section id="categorias">
      <h2 className="title">Categorias</h2>
      <div className="categorias-list">
        {props.lista.map((categoria) => {
          return (
            <Categoria
              imagen={categoria.imagen}
              texto={categoria.texto}
              url={categoria.url}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Categorias;
