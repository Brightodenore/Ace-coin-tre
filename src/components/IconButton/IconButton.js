import Pen from "../../svg/Pen";

export default function IconButton(params) {
  const buttonStyle = {
    backgroundColor: "transparent",
    borderWidth: 0,
    display: "flex",
    cursor: "pointer",
    alignItems: "center"
  };

  const textStyle = {
    fontSize: "14px",
    color: "rgb(37 99 235)",
    marginLeft: "10px"
  };

  return (
    <button style={buttonStyle}>
      <Pen />
      <p style={textStyle}>Edit</p>
    </button>
  );
}
