import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { debounce } from "lodash";

function App() {
  const [name, setName] = useState("");

  const debouncedFetch = debounce(() => {
    console.log(`send ${name} to the server`);
  }, 500);

  useEffect(debouncedFetch, [name]);

  return (
    <div className="App">
      <input value={name} onChange={e => setName(e.target.value)} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
