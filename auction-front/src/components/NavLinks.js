import { NavLink } from "react-router-dom";
import links from "../utils/links";
import { useAppContext } from "../context/appContext";
const NavLinks = ({ toggleMenu }) => {
  const { user } = useAppContext();
  return (
    <div className="modal-body">
      {}
      {user
        ? links
            .filter((link) => link.restricted === false)
            .map((link) => {
              const { text, path, id, icon } = link;
              return (
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  key={id}
                  onClick={toggleMenu}
                >
                  <span className="icon">{icon}</span>
                  {text}
                </NavLink>
              );
            })
        : links.map((link) => {
            const { text, path, id, icon } = link;
            return (
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                key={id}
                onClick={toggleMenu}
              >
                <span className="icon">{icon}</span>
                {text}
              </NavLink>
            );
          })}
    </div>
  );
};
export default NavLinks;
