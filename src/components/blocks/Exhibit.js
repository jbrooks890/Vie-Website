import "../../styles/blocks/Exhibit.css";

export default function Exhibit({
  feature,
  body,
  width = "frame",
  axis = "horizontal",
  align = "center",
  priority = "even",
  id,
  className,
}) {
  return (
    <div
      id={id ?? ""}
      className={`exhibit-block flex ${
        axis === "vertical" ? "col" : ""
      }  ${width}-width middle ${className ?? ""} ${
        priority === "even" ? "even" : "priority"
      }`}
      data-priority-element={priority !== "even" ? priority : undefined}
    >
      <div
        className={`exhibit-feature ${
          priority === "feature" ? "priority" : ""
        }`}
      >
        {feature}
      </div>
      <div
        className={`exhibit-body flex col ${
          priority === "body" ? "priority" : ""
        }`}
      >
        {body}
      </div>
    </div>
  );
}
