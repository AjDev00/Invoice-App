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
import ViewInvoiceDetails from "./components/View/ViewInvoiceDetails";
import ViewDraftDetails from "./components/View/ViewDraftDetails";
import EditInvoice from "./components/Pages/EditInvoice";
import EditDraft from "./components/Pages/EditDraft";

export const AppContext = createContext();

function App() {
  const [toggle, setToggle] = useState(false); //toggle light and dark mode.

  const [invoices, setInvoices] = useState([]); //general invoice param.

  const [drafts, setDrafts] = useState([]); //general draft param.

  //toggle paid and pending status.
  const [invoiceStatuses, setInvoiceStatuses] = useState({});

  function handleStatus(invoiceId) {
    setInvoiceStatuses((prevStatuses) => ({
      ...prevStatuses, //remember the previous status.
      [invoiceId]: !prevStatuses[invoiceId], // Toggle the status.
    }));
  }

  return (
    <AppContext.Provider
      value={{
        toggle,
        setToggle,
        invoiceStatuses,
        handleStatus,
        setInvoices,
        invoices,
        drafts,
        setDrafts,
      }}
    >
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <div>
                <Header />
                <div className="bg-slate-100 min-h-screen">
                  <DisplayHeader />
                  {/* <DisplayInvoices /> */}
                </div>
              </div>
            </Route>
            <Route path="/create-invoice">
              <CreateInvoice />
            </Route>
            <Route path="/invoice-details/:id">
              <div className="bg-slate-100 min-h-screen">
                <ViewInvoiceDetails />
              </div>
            </Route>
            <Route path="/draft-details/:id">
              <div className="bg-slate-100 min-h-screen">
                <ViewDraftDetails />
              </div>
            </Route>
            <Route path="/edit-invoice/:id">
              <EditInvoice />
            </Route>
            <Route path="/edit-draft/:id">
              <EditDraft />
            </Route>
          </Switch>
        </Router>
      </div>
      <ToastContainer />
    </AppContext.Provider>
  );
}

export default App;
