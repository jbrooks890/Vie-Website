export default function Img({ src, altText, size, styles = {} }) {
  return <img src={src} alt={altText} style={{ ...styles }} />;
}
