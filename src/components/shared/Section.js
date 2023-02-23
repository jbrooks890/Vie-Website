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
      className={`${className ?? ""} ${banner ? "with-banner" : "no-banner"} ${
        theme ? ("theme", theme) : "no-theme"
      }`}
      data-banner-src={banner ?? undefined}
      style={banner ? { backgroundImage: `url(${banner})` } : undefined}
    >
      {children}
    </section>
  );
}
