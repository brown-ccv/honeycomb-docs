import React from "react";

/**
 * Component for centering an image in the docs
 *
 * @param {*} props :
 *  src: image source
 *  alt: image alternative text
 *  imgStyle: object, any image styles
 * @returns a component for uniformally centering images in the doc
 */

export default function CenterImg(props) {
  let imgStyleString;
  if (props.imgStyle != undefined && Object.keys(props.imgStyle).length === 0) {
    imgStyleString = {};
  } else {
    imgStyleString = props.imgStyle;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <img src={props.src} alt={props.alt} style={imgStyleString} />
    </div>
  );
}
