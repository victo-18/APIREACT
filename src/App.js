//import logo from './logo.svg';
import { React } from "react";
import "./App.css";
import { useFetch } from "./component/useFetch";
function App() {
  const { data } = useFetch("https://rickandmortyapi.com/api/character");
  console.log(data);
  return (
    <div className="card">
      {/* <ul>
        {data?.map((user) => (
          // <li {key={user.id}>{user.name}}<li>
          <li key={user.id}>{user.name}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;
