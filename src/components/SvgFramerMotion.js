import * as React from "react";

const SvgFramerMotion = (props) => (
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-150 0 500 150"
    {...props}
  >
    <path
      d="M0 0h150v150H0Z"
      style={{
        fill: "none",
      }}
      data-name="Layer 2"
    />
    <path d="M13.18 137.15V12.33l62.4 62.41L138 12.33v124.82l-31.2-31.21-31.22 31.21-31.2-31.21Z" />
  </svg>
);

export default SvgFramerMotion;
