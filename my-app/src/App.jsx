import { useState } from "react";
import "./App.css";

import extensions from "./api/extensions.json";

import FilterBtn from "./components/FilterBtn";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  console.log(extensions);
  return (
    <>
      <header className="main-header">
        <img src="/assets/logo.svg" alt="" />
      </header>

      <main className="main-wrapper">
        <h1 className="main-title">Extensions List</h1>
        <div className="filters-wrapper">
          <FilterBtn content="All" index="1" />
          <FilterBtn content="Active" index="2" />
          <FilterBtn content="Inactive" index="3" />
        </div>
        <div className="extensions-wrapper">
          {extensions.forEach((extension) => {
            // <Card logo={extension.name} />;
            <p>{extension.name}</p>;
          })}
        </div>
      </main>
    </>
  );
}

export default App;
