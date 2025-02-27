import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Product = () => {
  return (
    <div>
      <Navbar />
      <Link to="/product/male">Male</Link>
      <Link to="/product/female">Female</Link>
      <Outlet />
    </div>
  );
};

export default Product;
