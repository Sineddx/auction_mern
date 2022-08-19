import { Outlet} from "react-router-dom";
import { Header} from "../components";
import { ToastContainer} from "react-toastify";
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
