import Banner from "../frags/Banner";
import Section from "./Section";

export default function Page({
  children,
  id,
  name = id,
  className,
  type = "index",
  banner,
  theme,
}) {
  // console.log({ children });
  return (
    <div
      id={`${name.toLowerCase().replaceAll(" ", "-").trim()}-page ${id ?? ""}`}
      className={`page ${type} ${banner ? "with-banner" : "no-banner"} ${
        theme ? ("theme", theme) : "no-theme"
      } ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
