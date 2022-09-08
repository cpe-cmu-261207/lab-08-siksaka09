import React, { useContext } from "react";
import { PainterContext } from "../contexts/PainterContext";

export default function ColorPicker(props) {
  const color = props.color;

  const { selColor, setSelColor } = useContext(PainterContext);

  return (
    <div
      style={{
        backgroundColor: color,
        width: "50px",
        height: "50px",
        borderStyle: "solid",

        borderColor: selColor === color ? "magenta" : "black",
        borderWidth: selColor === color ? "7px" : "2px",
      }}
      onClick={() => {
        setSelColor(color);
      }}
    />
  );
}
