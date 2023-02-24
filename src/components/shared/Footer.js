import "../../styles/Footer.css";
import Icons from "./Icons";

export default function Footer() {
  return (
    <footer className="theme glass-bg">
      <span className="copyright">
        &copy;{new Date().getFullYear()} Julian Brooks. All Rights Reserved.
      </span>
      <Icons />
    </footer>
  );
}
