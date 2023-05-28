import "../../styles.css";
import React, { useState } from "react";

export default function Button(params) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const buttonStyle = {
    position: "relative",
    width: "100%",
    backgroundColor: isHovered ? "#3b82f6" : "rgb(37 99 235)",
    paddingTop: "25px",
    paddingBottom: "25px",
    borderRadius: "8px",
    borderWidth: 0,
    color: "white",
    cursor: "pointer",
    fontWeight: 600,
    overflow: "hidden",
    transitionDuration: "0.4s"
  };

  return (
    <button
      className="button"
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Pay Now
    </button>
  );
}
