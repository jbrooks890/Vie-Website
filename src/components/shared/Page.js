import Banner from "../frags/Banner";
import Section from "./Section";

export default function Page({
  children,
  name,
  id = name.toLowerCase().replaceAll(" ", "-").trim(),
  className,
  type = "index",
  banner,
  theme,
}) {
  // const sections = children
  //   ?.filter(child => child.type.name === "Section")
  //   .map(component => component.props.name ?? component.props.id);

  console.log({ children });
  // const text = require(`../../assets/text/${name}/cards.md`);

  return (
    <div
      id={`${id}-page ${id ?? ""}`}
      className={`page ${type} ${banner ? "with-banner" : "no-banner"} ${
        theme ? ("theme", theme) : "no-theme"
      } ${className ?? ""}`}
      data-page-name={name}
    >
      {children}
    </div>
  );
}
