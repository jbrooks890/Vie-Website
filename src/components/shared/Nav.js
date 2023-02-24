import "../../styles/Nav.css";
import { NavLink } from "react-router-dom";
import useNav from "../../hooks/useNav";

export default function Nav() {
  const { mainNav } = useNav();

  const renderNav = obj => {
    return Object.entries(obj).map(([display, content], i) => {
      return (
        <NavLink key={i} to={content}>
          {display}
        </NavLink>
      );
    });
  };

  return <nav className="flex middle theme">{renderNav(mainNav)}</nav>;
}
