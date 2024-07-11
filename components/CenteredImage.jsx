import React from "react";

/**
 * Component for centering an image in the docs
 *
 * @param {*} props :
 *  src: image source
 *  alt: image alternative text
 *  delegated: any other props (i.e. style for the image)
 * @returns a component for uniformally centering images in the doc
 */
export default function CenteredImage({ src, alt, ...delegated }) {
  return (
    <div style={{ textAlign: "center" }}>
      <img src={src} alt={alt} {...delegated} />
    </div>
  );
}
