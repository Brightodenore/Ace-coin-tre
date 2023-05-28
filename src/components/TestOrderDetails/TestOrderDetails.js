import Text from "../Text/Text";
import Apple from "../../svg/Apple";
import Bill from "../../svg/Bill";
import Card from "../Card/Card";

const leftSemiCircleStyle = {
  position: "absolute",
  background: "white",
  display: "inline-block",
  height: "30px",
  width: "20px",
  borderBottomRightRadius: "90px",
  borderTopRightRadius: "90px",
  left: -20,
  top: -6
};

const rightSemiCircleStyle = {
  position: "absolute",
  background: "white",
  display: "inline-block",
  height: "30px",
  width: "20px",
  borderBottomLeftRadius: "90px",
  borderTopLeftRadius: "90px",
  right: -20,
  top: -6
};

const orderDetailContainerStyle = {
  display: "flex",
  flexDirection: "column",
  rowGap: 14,
  borderRadius: "16px",
  backgroundColor: "#f1f5f9",
  padding: "50px 20px 20px 20px",
  marginTop: "100px"
};

export default function TestOrderDetails(params) {
  return (
    <div>
      <div style={orderDetailContainerStyle}>
        <Card />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "20px"
          }}
        >
          <Text text={"Company"} fontSize={"12px"} color={"#6b7280"} />
          <div style={{ display: "flex", alignItems: "center", columnGap: 8 }}>
            <Apple />
            <Text
              text={"Apple"}
              fontSize={"12px"}
              fontWeight={600}
              color={"#3A4152"}
            />
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Text text={"Order Number"} fontSize={"12px"} color={"#6b7280"} />
          <Text
            text={"1234567"}
            fontSize={"12px"}
            fontWeight={600}
            color={"#3A4152"}
          />
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Text text={"Product"} fontSize={"12px"} color={"#6b7280"} />
          <Text
            text={"MackBook Air"}
            fontSize={"12px"}
            fontWeight={600}
            color={"#3A4152"}
          />
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Text text={"VAT (20%)"} fontSize={"12px"} color={"#6b7280"} />
          <Text
            text={"$100.00"}
            fontSize={"12px"}
            fontWeight={600}
            color={"#3A4152"}
          />
        </div>

        <div style={{ position: "relative" }}>
          <div style={leftSemiCircleStyle}></div>
          <hr style={{ borderTop: "3px dotted #BFC1CF" }} />
          <div style={rightSemiCircleStyle}></div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <div>
            <Text
              text={"You have to pay"}
              fontSize={"12px"}
              color={"#6b7280"}
              mb={"4px"}
            />
            <p style={{ color: "#3A4152", fontWeight: 600, fontSize: "20px" }}>
              549<span style={{ fontSize: "12px" }}>.99</span>
              <span style={{ fontSize: "12px", color: "#6b7280" }}> USD</span>
            </p>
          </div>
          <Bill />
        </div>
      </div>
    </div>
  );
}
