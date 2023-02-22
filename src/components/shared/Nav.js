import "../../styles/Nav.css";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const mainNav = {
    Home: "/",
    Rules: "/rules",
    FAQ: "/faq",
    About: "/about",
    Login: "/login",
  };

  const renderNav = obj => {
    return Object.entries(obj).map(([display, content], i) => {
      return (
        <NavLink key={i} to={content}>
          {display}
        </NavLink>
      );
    });
  };

  return <nav className="flex middle">{renderNav(mainNav)}</nav>;
}
