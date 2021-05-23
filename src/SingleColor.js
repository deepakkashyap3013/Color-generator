import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = (props) => {
  const { rgb, weight, index } = props;

  const [alert, setAlert] = useState(false);

  const bcg = rgb.join(",");
  const hex = rgbToHex(...rgb);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(false);
    }, 1000);
    return () => clearTimeout(timeOut);
  }, [alert]);

  return (
    <article
      className={`color ${index > 3 && "color-light"} `}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hex);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
