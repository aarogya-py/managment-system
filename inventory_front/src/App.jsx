import { Router, Routes,BrowserRouter, Route } from "react-router-dom";
import './App.css'

function App() {
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/Purchase_stock" element={<Purchase_Stock />}></Route>
    <Route path="/Sales_record" element={<Sales_record />}></Route>
    <Route path="/Sales_graph" element={<Sales_Graph />}></Route>
    <Route path="/Logbook" element={<Logbook />}></Route>
    <Route path="/Summary" element={<Summary />}></Route>
  </Routes>
  </BrowserRouter>
  
}

export default App
