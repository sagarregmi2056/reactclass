import { Route, Routes } from "react-router-dom";
import "./App.css";
import Hero from "./pages/Hero.jsx";

import Landingpage from "./pages/Landingpage";
import Contact from "./pages/Contact.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
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
