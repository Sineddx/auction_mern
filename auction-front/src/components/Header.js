import { useState } from "react";
import Modal from "./Modal";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/components/Header";

const Header = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const { user, logout, search, handleChange, refresh, clearFilter } =
    useAppContext();

  const toggleMenu = (e) => {
    if (show) {
      setTimeout(() => {
        setShow(false);
      }, 300);
      return;
    }
    setShow(true);
    if (e) {
      e.stopPropagation();
    }
  };
  const handleSearch = (e) => {
    handleChange({ name: e.target.name, value: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleChange({ name: "refresh", value: !refresh });
    if (!search) {
      navigate("/search?page=1");
    } else {
      navigate(`/search?page=1&search=${search}`);
    }
  };
  const handleChangePage = () => {
    clearFilter();
  };
  return (
    <Wrapper className="wrapper">
      <div className="custom">
        <NavLink to="/" onClick={handleChangePage}>
          <Logo logoClass="service-logo" />
        </NavLink>

        <div className="searchbar">
          <form className="search-form" onSubmit={handleSubmit}>
            <input
              onSubmit={handleSubmit}
              name="search"
              className="inputfield"
              placeholder="Czego szukasz?"
              value={search}
              onChange={handleSearch}
            />
          </form>
        </div>
        <div className="user-panel">
          <div className="account" onClick={toggleMenu}>
            <p>{user ? user.name : "MOJE KONTO"}</p>
          </div>
          <div className="icon-one" onClick={toggleMenu}>
            <div className="hamburger hamburger-one"></div>
          </div>
        </div>
        {show && <Modal show={show} close={toggleMenu} />}
      </div>
    </Wrapper>
  );
};

export default Header;
