import ServerStack from "../../svg/ServerStack";

const serverStackBgrd = {
  height: "30px",
  width: "30px",
  backgroundColor: "rgb(37 99 235)",
  borderRadius: 9999,
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};
const headerTxt = {
  fontSize: "18px",
  fontWeight: 600,
  color: "#3A4152",
  marginLeft: "8px"
};
const txtSpan = {
  fontWeight: 400
};

const logo = {
  display: "flex",
  alignItems: "center"
};

const timeBgrd = {
  backgroundColor: "#3A4152",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "30px",
  width: "20px",
  borderRadius: "3px"
};

const formHeaderContainer = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: "100%",
  margin: "0px auto",
  marginBottom: "50px"
};

const timeTextStyle = { fontSize: "18px", color: "white" };

export default function TestHeader(params) {
  return (
    <div style={formHeaderContainer}>
      <div style={logo}>
        <div style={serverStackBgrd}>
          <ServerStack />
        </div>

        <p style={headerTxt}>
          AceCoin<span style={txtSpan}>Pay</span>
        </p>
      </div>
      <div style={{ display: "flex", columnGap: "4px" }}>
        <div style={timeBgrd}>
          <p style={timeTextStyle}>0</p>
        </div>
        <div style={timeBgrd}>
          <p style={timeTextStyle}>1</p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "30px"
          }}
        >
          <p style={{ fontSize: "18px", fontWeight: 600 }}>:</p>
        </div>
        <div style={timeBgrd}>
          <p style={timeTextStyle}>1</p>
        </div>
        <div style={timeBgrd}>
          <p style={timeTextStyle}>9</p>
        </div>
      </div>
    </div>
  );
}
