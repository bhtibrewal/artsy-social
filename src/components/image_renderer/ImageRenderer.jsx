import { useState, useRef } from "react";
import "./image_renderer.css";
import { useIntersectionObserver } from "../../custom_hooks";

const thumbnail =
  "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image-300x225.png";

export const ImageRenderer = ({ alt, src }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();
  useIntersectionObserver(imgRef, () => {
    setIsInView(true);
  });

  const handleOnLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className="image-container" ref={imgRef}>
      {isInView && (
        <>
          <img
            className={`post-image thumb  ${isLoaded && "isLoaded"}`}
            alt={alt}
            src={thumbnail}
          />
          <img
            className={`post-image ${isLoaded && "isLoaded"}`}
            alt={alt}
            src={src}
            onLoad={handleOnLoad}
          />
        </>
      )}
    </div>
  );
};
