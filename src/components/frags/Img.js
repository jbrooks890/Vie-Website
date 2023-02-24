import "../../styles/blocks/Img.css";
import useModal from "../../hooks/useModal";

export default function Img({
  src,
  altText,
  caption,
  size,
  style = {},
  lightbox = true,
  id,
  className,
  shadow = false,
  cover = false,
  ...props
}) {
  const { toggle, isShowing, modal } = useModal();
  const output = (
    <img
      id={id}
      className={`${lightbox ? "lightbox" : "no-lightbox"} ${
        shadow ? "shadow" : "no-shadow"
      } ${cover ? "cover" : "contain"} ${className ?? ""}`}
      src={src}
      alt={altText}
      style={{ ...style }}
      onClick={lightbox ? toggle : undefined}
      {...props}
    />
  );

  return (
    <>
      {output}
      {lightbox && isShowing && modal(output)}
    </>
  );
}
