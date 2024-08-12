import { useState } from "react";
import "./App.css";
import Header from "./components/Home/Header";
import { createContext } from "react";
import DisplayHeader from "./components/Home/DisplayHeader";
import DisplayInvoices from "./components/Home/DisplayInvoices";

export const AppContext = createContext();

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <AppContext.Provider value={{ toggle, setToggle }}>
      <div className="App">
        <Header />
        <div className="bg-slate-100 min-h-screen">
          <DisplayHeader />
          <DisplayInvoices />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
