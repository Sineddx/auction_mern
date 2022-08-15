import { Outlet, Link } from "react-router-dom";
import { Header, Footer } from "../components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SharedLayout = () => {
  return (
    <main className="main">
      <ToastContainer autoClose={3000} />
      <Header />
      <Outlet />
    </main>
  );
};

export default SharedLayout;
