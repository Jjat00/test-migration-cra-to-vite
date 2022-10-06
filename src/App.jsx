import { useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";

function App() {
  const [counter, setCounter] = useState(0);

  const [data, error] = useFetch("/api/v1/objects");

  if (error) return <p>Errot get objects</p>;

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Counter: <span>{counter}</span>
        </p>
        <div>
          <button onClick={() => setCounter(counter + 1)}>+</button>
          <button onClick={() => setCounter(counter - 1)}>-</button>
        </div>
        <h1>Locations</h1>
        <div className="container-locations">
          {data &&
            data.map((item) => (
              <div key={item.id}>
                <p>ID: {item.id}</p>
                <p>latitude: {item.location.latitude}</p>
                <p>longitude: {item.location.longitude}</p>
              </div>
            ))}
        </div>
      </header>
    </div>
  );
}

export default App;
