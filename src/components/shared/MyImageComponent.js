import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const MyImageComponent = ({ src, alt, width, height, className }) => (
  <LazyLoadImage
    src={src}
    alt={alt}
    width={width}
    height={height}
    className={className}
    effect="blur"
  />
);

export default MyImageComponent;
