import { React, useEffect ,useState} from "react";
import { Panel } from "./component/Panel";
import axios from "axios";
import './App.css'
function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const apiFetch = async () => {
      const { status, data } = await axios.get(
        "https://rickandmortyapi.com/api/character"
      );
      if (status === 200) {
        setData(data.results);
      }
    };
    if(data==null)
    apiFetch();
  });
  return <>{data && data.map((pj) => <Panel personaje={pj} />)}</>;
}

export default App;
