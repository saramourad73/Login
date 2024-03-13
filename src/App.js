import { Route, Routes } from "react-router-dom";

import Login from "./component/Login";
import Home from "./component/Home";
import SingleProduct from "./component/SingleProduct";
import Product from "./component/Product";
import Cart from "./component/Cart";



function App() {
  return (
 <>
 

 <Routes>
<Route path="/Login" element={<Login/>}/>
<Route path="/Home" element={<Home/>}/>
<Route path="/Product/:id" element={<SingleProduct/>}/>
<Route path="/Product" element={<Product/>}/>
<Route path="/Cart" element={<Cart/>}/>

 </Routes>
 
 </>
  );
}

export default App;
