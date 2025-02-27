import { Route, Routes } from "react-router-dom";
import "./App.css";
import Hero from "./pages/Hero.jsx";

import Landingpage from "./pages/Landingpage";
import Contact from "./pages/Contact.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Usenavigatehook from "./components/Usenavigatehook.jsx";
import Product from "./pages/Product.jsx";
import Female from "./components/Female.jsx";
import Male from "./components/Male.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/nav" element={<Usenavigatehook />} />
        <Route path="/product" element={<Product />}>
          {/* make female as root  */}
          <Route index element={<Female />} />
          <Route path="female" element={<Female />} />
          <Route path="male" element={<Male />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

// component => app.jsx
// atomic structure , botton, input lable ==>component =>page => app.jsx

// Routes ,Route

// define the pages to route according to the links

// react-router-dom
// import { BrowserRouter  } from "react-router-dom";
// routes route lai import garxau
