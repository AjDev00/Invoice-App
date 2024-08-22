import { useState } from "react";
import "./App.css";
import Header from "./components/Home/Header";
import { createContext } from "react";
import DisplayHeader from "./components/Home/DisplayHeader";
import DisplayInvoices from "./components/Home/DisplayInvoices";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import CreateInvoice from "./components/Pages/CreateInvoice";
import { ToastContainer } from "react-toastify";

export const AppContext = createContext();

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <AppContext.Provider value={{ toggle, setToggle }}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <div>
                <Header />
                <div className="bg-slate-100">
                  <DisplayHeader />
                  {/* <DisplayInvoices /> */}
                </div>
              </div>
            </Route>
            <Route path="/create-invoice">
              <CreateInvoice />
            </Route>
          </Switch>
        </Router>
      </div>
      <ToastContainer />
    </AppContext.Provider>
  );
}

export default App;
