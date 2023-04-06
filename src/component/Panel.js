import "bootstrap/dist/css/bootstrap.min.css";
export function Panel(props) {
  const { personaje } = props;
  return (
    <>
      <div class="card mb-3" style={{ "max-width": 540 }}>
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={personaje.image}
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{personaje.name}</h5>
              <p class="card-text">{personaje.status}.</p>
              <p class="card-text">{personaje.gender}.</p>
              <p class="card-text">{personaje.species}.</p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
