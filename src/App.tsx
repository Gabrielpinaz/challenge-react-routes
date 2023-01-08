import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import About from "./Routes/Home/About";
import HomeBody from "./Routes/Home/HomeBody";
import NotFound from "./Routes/Home/NotFound";
import Product from "./Routes/Home/Product";
import Books from "./Routes/Home/Product/Books";
import Computers from "./Routes/Home/Product/Computers";
import Electronics from "./Routes/Home/Product/Electronics";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<HomeBody />} />
          <Route path="products" element={<Product />}>
            <Route path="computers" element={<Computers />} />
            <Route path="electronics" element={<Electronics />} />
            <Route path="books" element={<Books />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
