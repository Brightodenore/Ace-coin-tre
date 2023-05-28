import CheckBadge from "../../svg/CheckBadge";
import MasterCard from "../../svg/MasterCard";
import MultiBox from "../../svg/MultiBox";
import Button from "../Button/Button";
import CardInput from "../CardInput/CardInput";
import IconButton from "../IconButton/IconButton";
import Text from "../Text/Text";
import React, { useContext } from "react";
import { AppContext } from "../../App";

export default function TestFormBody(params) {
  const { cvv, password, cardNumber } = useContext(AppContext);

  const formContainer = {
    maxWidth: "100%",
    margin: "0px auto",
    display: "flex",
    flexDirection: "column",
    rowGap: "25px",
    justifyContent: "space-between"
  };

  return (
    <div style={formContainer}>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "25px"
          }}
        >
          <div>
            <Text
              text={"Card Number"}
              fontSize={"16px"}
              mb={"8px"}
              color={"#3A4152"}
              fontWeight={600}
            />
            <Text
              text={"Enter the 16-digit card number on the card"}
              fontSize={"12px"}
              color={"#9ca3af"}
            />
          </div>
          <IconButton />
        </div>
        <div>
          <CardInput
            variant={"master"}
            leftIcon={<MasterCard />}
            rightIcon={
              <CheckBadge
                color={
                  cardNumber.length === 25
                    ? "rgb(37 99 235)"
                    : "rgb(156 163 175)"
                }
              />
            }
            pr={"10px"}
            pl={"48px"}
            placeholder={"2412  -  7412  -  3512  -  9612"}
          />
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Text
            text={"CVV Number"}
            fontSize={"16px"}
            mb={"8px"}
            color={"#3A4152"}
            fontWeight={600}
          />
          <Text
            text={"Enter the 3 or 4 digit number on the card"}
            fontSize={"12px"}
            color={"#9ca3af"}
          />
        </div>
        <div style={{ width: "50%" }}>
          <CardInput
            variant={"cvv"}
            rightIcon={
              <MultiBox
                color={cvv.length === 3 ? "rgb(37 99 235)" : "rgb(156 163 175)"}
              />
            }
            placeholder={"CVV"}
            textAlign={"center"}
            pr={"10px"}
            pl={"0px"}
          />
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Text
            text={"Expiry Date"}
            fontSize={"16px"}
            mb={"8px"}
            color={"#3A4152"}
            fontWeight={600}
          />
          <Text
            text={"Enter the expiration date of the card"}
            fontSize={"12px"}
            color={"#9ca3af"}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            columnGap: "8px",
            width: "50%"
          }}
        >
          <CardInput
            variant={"month"}
            placeholder={"MM"}
            width={"20%"}
            textAlign={"center"}
            pr={"10px"}
            pl={"10px"}
          />
          <Text
            text={"/"}
            fontWeight={600}
            fontSize={"20px"}
            color={"#3A4152"}
          />
          <CardInput
            variant={"year"}
            placeholder={"YY"}
            width={"20%"}
            textAlign={"center"}
            pr={"10px"}
            pl={"10px"}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%"
        }}
      >
        <div style={{ width: "50%" }}>
          <Text
            text={"Password"}
            fontSize={"16px"}
            mb={"8px"}
            color={"#3A4152"}
            fontWeight={600}
          />
          <Text
            text={"Enter your dynamic password"}
            fontSize={"12px"}
            color={"#9ca3af"}
          />
        </div>
        <div style={{ width: "50%" }}>
          <CardInput
            variant={"password"}
            rightIcon={
              <MultiBox
                color={
                  password.length > 6 ? "rgb(37 99 235)" : "rgb(156 163 175)"
                }
              />
            }
            placeholder={"Password"}
            pr={"10px"}
            pl={"20px"}
          />
        </div>
      </div>

      <Button />
    </div>
  );
}
