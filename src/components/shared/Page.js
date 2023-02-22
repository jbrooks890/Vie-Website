export default function Page({
  children,
  id,
  name = id,
  className,
  type,
  media,
}) {
  return (
    <div
      id={`${name.toLowerCase().replaceAll(" ", "-").trim()}-page ${id ?? ""}`}
      className={className ?? ""}
    >
      {children}
    </div>
  );
}
