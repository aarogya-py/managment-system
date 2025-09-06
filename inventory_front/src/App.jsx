import { Router, Routes,BrowserRouter, Route } from "react-router-dom";
import './App.css'
import Login from "./login"
import Signup from "./signup";
import Home from "./home";
// import Purchase_Stock from './purchase_stock'
// import Sales_record from './sales_record'
// import Sales_Graph from './slaes_graph'
import Logbook from './logbook'
// import Summary from './summary'

function App() {
  return(
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login />}/>
    <Route path="/signup" element={<Signup />}/>
    <Route path="/home" element={<Home />}/>
    <Route path="/logbook" element={<Logbook />}/>
      {/* <Route path="/Purchase_stock" element={<Purchase_Stock />}></Route>
      <Route path="/Sales_record" element={<Sales_record />}></Route>
      <Route path="/Sales_graph" element={<Sales_Graph />}></Route>
      <Route path="/Summary" element={<Summary />}></Route> */}
  </Routes> 
  </BrowserRouter> 
  )
}
export default App
