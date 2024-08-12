import { useState } from "react";
import "./App.css";
import Header from "./components/Home/Header";
import { createContext } from "react";
import Display from "./components/Home/Display";

export const AppContext = createContext();

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <AppContext.Provider value={{ toggle, setToggle }}>
      <div className="App">
        <Header />
        <div>
          <Display />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
