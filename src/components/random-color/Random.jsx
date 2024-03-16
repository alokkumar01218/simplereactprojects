import React, { useEffect, useState } from "react";

export default function Random() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");
  function colorUtility(length){
    return Math.floor(Math.random()*length)
  }
  function handleRandomHexColor() {
    let hexColor = "#";
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    for (let i = 0; i < 6; i++) {
      hexColor += arr[colorUtility(arr.length)];
    }
    setColor(hexColor);
  }
  function handleRandomRgbColor(){
    const r = colorUtility(256);
    const g = colorUtility(256);
    const b = colorUtility(256);
    setColor(`rgb(${r},${g},${b})`);
  }
  useEffect(() => {
    if(typeOfColor === 'rgb')handleRandomRgbColor()
    else handleRandomHexColor();
  }, [typeOfColor])
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Create HEX color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button
        onClick={
          typeOfColor === "hex" ? handleRandomHexColor : handleRandomRgbColor
        }
      >
        Generate Random color
      </button>
      <div style={{
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        color : "#fff",
        fontSize : '60px',
        marginTop : '50px',
        flexDirection : 'column',
        gap : '20px'
      }}>
        <h3>{typeOfColor === 'rgb' ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
