import React, { CSSProperties, useEffect, useState } from "react";

export default function Burst(props: any) {
  const [flowing, setFlow] = useState(false);

  const lines = () => {
    setTimeout(() => {
      setFlow(!flowing);
    }, 5000);

    return (
      <div style={lineWrap}>
        <div style={{ ...line, backgroundColor: flowing ? "gray" : "black" }} />
        <div style={{ ...line, backgroundColor: flowing ? "black" : "gray" }} />
        <div style={{ ...line, backgroundColor: flowing ? "gray" : "black" }} />
        <div style={{ ...line, backgroundColor: flowing ? "black" : "gray" }} />
      </div>
    );
  };

  return lines();
}

export const lineWrap: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  width: "25px",
  justifyContent: "space-evenly",
};

export const line: CSSProperties = {
  height: "3px",
  backgroundColor: "gray",
};
