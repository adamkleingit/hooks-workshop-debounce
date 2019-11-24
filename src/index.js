import React, { useEffect, useState, useMemo, useRef } from "react";
import ReactDOM from "react-dom";
import { debounce } from "lodash";

const useSaved = (fn) => {
  const saved = useRef();
  useEffect(function updateSaved() {
    saved.current = fn();
  });
  return saved;
}

function App() {
  const [name, setName] = useState("");
  const savedName = useSaved(() => name);
  const debouncedFetch = useMemo(
    () => debounce(() => {
      console.log(`send ${savedName.current} to the server`);
    }, 500),
    []
  );

  useEffect(debouncedFetch, [name]);

  return (
    <div className="App">
      <input value={name} onChange={e => setName(e.target.value)} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
