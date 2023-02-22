import "../../styles/Section.css";

export default function Section({
  children,
  id,
  name = id,
  className,
  type = "regular",
  layout = "cascade",
  banner,
  theme,
}) {
  return (
    <section
      id={`${name.toLowerCase().replaceAll(" ", "-").trim()}-section ${
        id ?? ""
      }`}
      className={`${className ?? ""} ${
        banner ? ("banner", banner) : "no-banner"
      } ${theme ? ("theme", theme) : "no-theme"}`}
    >
      {children}
    </section>
  );
}
