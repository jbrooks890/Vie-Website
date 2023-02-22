import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function MainLayout({ children }) {
  return (
    <div id="siteWrapper" className="flex col theme checker-bg">
      <Header />
      <main>{<Outlet />}</main>
    </div>
  );
}
