import "../../styles/BlockTitle.css";

export default function BlockTitle({ title, subtitle }) {
  return (
    <div className="block-title flex col">
      {title && <h2>{title}</h2>}
      {subtitle && <h3>{subtitle}</h3>}
    </div>
  );
}
