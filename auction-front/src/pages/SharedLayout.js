import { Outlet, Link } from "react-router-dom";
import { Header, Footer } from "../components";

const SharedLayout = () => {
  return (
    <main className="main">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default SharedLayout;
