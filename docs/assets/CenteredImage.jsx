import React from "react";

/**
 * Component for centering an image in the docs
 *
 * @param {*} props :
 *  src: image source
 *  alt: image alternative text
 *  imgStyle: object, any image styles (props can be passed in as: `imgStyle={{ maxHeight: "600px", border: "solid" }}`)
 * @returns a component for uniformally centering images in the doc
 */
export default function CenteredImage({ src, alt, imgStyle }) {
  let imgStyleString;
  if (imgStyle != undefined && Object.keys(imgStyle).length === 0) {
    imgStyleString = {};
  } else {
    imgStyleString = imgStyle;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <img src={src} alt={alt} style={imgStyleString} />
    </div>
  );
}
