import Sim from "../../svg/Sim";
import Network from "../../svg/Network";
import Text from "../Text/Text";
import MasterCardText from "../../svg/MasterCradText";
import Circle from "../../svg/Circle";
import React, { useContext } from "react";
import { AppContext } from "../../App";

export default function Card(params) {
  const { cardNumber, expirationMonth, expirationYear } = useContext(
    AppContext
  );

  const cardContainerStyle = {
    borderRadius: "16px",
    padding: "40px 20px 20px 20px",
    backgroundColor: "#fafafa",
    marginTop: "-145px",
    boxShadow: "0px 15px 15px #e4e4e7",
    position: "relative"
  };

  const dateContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
    alignItems: "center"
  };

  const stripeStyle = {
    position: "absolute",
    height: "5px",
    width: "60px",
    backgroundColor: "rgb(37 99 235)",
    top: "-5px",
    left: "50%",
    transform: "translate(-50%, 0%)",
    boxShadow: "0px 10px 20px rgb(37 99 235)"
  };

  const simNetworkContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "80px"
  };

  return (
    <div>
      <div style={cardContainerStyle}>
        <div style={stripeStyle}></div>
        <div style={simNetworkContainerStyle}>
          <Sim />
          <Network />
        </div>
        <Text
          text={"Jonathan Michael"}
          fontSize={"14px"}
          fontWeight={600}
          color={"#3A4152"}
          mb={"8px"}
        />
        <div style={{ display: "flex", alignItems: "center", columnGap: 2 }}>
          {[1, 2, 3, 4].map((i) => (
            <Circle key={i} />
          ))}
          <Text
            text={
              cardNumber.length > 20 ? `${cardNumber.substring(21)}` : "0000"
            }
            ml={"10px"}
            fontWeight={600}
            color={"#3A4152"}
          />
        </div>
        <div style={dateContainerStyle}>
          <Text
            text={`${expirationMonth ? expirationMonth : "00"}/${
              expirationYear ? expirationYear : "00"
            }`}
            fontSize={"14px"}
            fontWeight={600}
            color={"#3A4152"}
          />
          <MasterCardText />
        </div>
      </div>
    </div>
  );
}
