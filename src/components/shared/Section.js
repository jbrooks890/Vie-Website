import "../../styles/Section.css";
import "../../styles/Blocks.css";

export default function Section({
  children,
  name,
  id = name?.toLowerCase().replaceAll(" ", "-").trim(),
  className,
  type = "regular",
  layout = "cascade",
  banner,
  theme,
}) {
  const typeHandler = () => {
    switch (type) {
      case "regular":
        break;
      case "landing":
        break;
      case "wide":
        break;
    }
  };

  // const classList = new Set(
  //   [
  //     className?.split(" "),
  //     banner ? "with-banner" : "no-banner",
  //     theme ? "theme" : "no-theme",
  //     type,
  //     type === "landing" ? "flex center".split(" ") : "",
  //   ].filter(Boolean)
  // );

  // console.log({ classList });

  return (
    <section
      id={`${id}-section ${id ?? ""}`}
      className={`${className ?? ""}  ${banner ? "with-banner" : "no-banner"} ${
        theme ? `theme ${theme}` : "no-theme"
      } ${type} ${type === "landing" ? "center" : ""}`}
      data-section-name={name}
      data-section-type={type}
      data-banner-src={banner ?? undefined}
      style={banner ? { backgroundImage: `url(${banner})` } : undefined}
    >
      {children}
    </section>
  );
}
