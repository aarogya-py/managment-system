import { Router, Routes,BrowserRouter, Route } from "react-router-dom";
import './App.css'
import Login from "./login"
import Signup from "./signup";
import Home from "./home";
import Purchase_stock from './purchase_stock'
import Sales_Record from './sales_record'
// import Sales_Graph from './slaes_graph'
import Logbook from './logbook'
// import Summary from './summary'
import Billing from "./billing";

function App() {
  return(
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login />}/>
    <Route path="/signup" element={<Signup />}/>
    <Route path="/home" element={<Home />}/>
    <Route path="/logbook" element={<Logbook />}/>
    <Route path="/purchase_stock" element={<Purchase_stock />}/>
    <Route path="/sales_record" element={<Sales_Record />}/>
    <Route path="/billing" element={<Billing />}/>
      {/* <Route path="/Sales_graph" element={<Sales_Graph />}></Route>
      <Route path="/Summary" element={<Summary />}></Route> */}
  </Routes> 
  </BrowserRouter> 
  )
}
export default App
