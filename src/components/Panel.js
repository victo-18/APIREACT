import "bootstrap/dist/css/bootstrap.min.css";
//import {}
export function Panel(props) {
  const { personaje } = props;
  return (
    // <div className="card">
    //   <div className="contenedor__avatar">
    //
    //   </div>

    //   <div className="body">
    //     <h1>{personaje.name}</h1>
    //     <ul>
    //       <li>{personaje.status}</li>
    //       <li>{personaje.gender}</li>
    //       <li>{personaje.species}</li>
    //     </ul>
    //   </div>
    // </div>
    <div className="border">
      <div className="contenedor">
        <div className="contenedor__avatar">
          <img src={personaje.image} className="avatar" alt="..." />
        </div>
      </div>
      <div className="contenedor__info">
        <h1>{personaje.name}</h1>
        <ul>
          <li>{personaje.status}</li>
          <li>{personaje.gender}</li>
          <li>{personaje.species}</li>
        </ul>
      </div>
    </div>
  );
}
