import "bootstrap/dist/css/bootstrap.min.css";
export function Panel(props) {
  const { personaje } = props;
  return (
    <>
      <article className="personaje">
        <div class="card mb-3" style={{ "max-width": 500 }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src={personaje.image}
                class="img-fluid rounded-start"
                alt="imagen del personaje"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{personaje.name}</h5>
                <p class="card-text">{personaje.status}</p>
                <p class="card-text">{personaje.gender}</p>
                <p class="card-text">{personaje.species}</p>
                {/* <button type="button" class="btn btn-primary btn-sm">Informacion</button> */}
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
