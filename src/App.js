import "./styles.css";
import "bootswatch/dist/superhero/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <form className="card card-body">
        <div className="form-group input-group">
          <div className="input-group-text bg-light">
            <i className="material-icons">add</i>
          </div>
          <input
            className="form-control"
            name="url"
            placeholder="www.website.com"
            type="text"
          />
        </div>
      </form>
    </div>
  );
}
