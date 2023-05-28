import React, { useState, useContext } from "react";
import { AppContext } from "../../App";

export default function CardInput({
  rightIcon,
  placeholder,
  leftIcon,
  textAlign,
  pl,
  pr,
  variant
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const {
    cardNumber,
    setCardNumber,
    expirationMonth,
    setExpirationMonth,
    expirationYear,
    setExpirationYear,
    cvv,
    setCVV,
    password,
    setPassword
  } = useContext(AppContext);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleCardNumberChange = (e) => {
    const input = e.target.value;
    const formattedInput = input.replace(/[^0-9]/g, "");
    const formattedCardNumber = formatCardNumber(formattedInput);
    setCardNumber(formattedCardNumber);
  };

  const formatCardNumber = (input) => {
    let formattedNumber = "";

    for (let i = 0; i < input.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedNumber += " - ";
      }
      formattedNumber += input[i];
    }

    return formattedNumber;
  };

  const handleCVVChange = (e) => {
    const input = e.target.value;
    const formattedInput = input.replace(/[^0-9]/g, "");
    setCVV(formattedInput);
  };

  const handleExpirationMonthChange = (e) => {
    const input = e.target.value;
    const formattedInput = input.replace(/[^0-9/]/g, "");
    setExpirationMonth(formattedInput);
  };

  const handleExpirationYearChange = (e) => {
    const input = e.target.value;
    const formattedInput = input.replace(/[^0-9/]/g, "");
    setExpirationYear(formattedInput);
  };

  const inputStyle = {
    display: "block",
    width: "100%",
    paddingTop: "20px",
    paddingBottom: "20px",
    paddingLeft: pl,
    paddingRight: pr,
    borderRadius: "8px",
    borderWidth: 0,
    outline: isHovered | isFocused ? "2px solid rgb(37 99 235)" : "",
    boxSizing: "border-box",
    textAlign: textAlign,
    fontWeight: 600,
    letterSpacing: "5px",
    boxShadow:
      isFocused | isHovered
        ? " "
        : "1px 1px 2px rgb(209 213 219) inset,-1px -1px 2px rgb(209 213 219) inset"
  };

  const leftIconStyle = {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    display: "flex",
    alignItems: "center",
    paddingLeft: "8px"
  };

  const rightIconStyle = {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    display: "flex",
    alignItems: "center",
    paddingRight: "8px"
  };

  return (
    <div>
      <div style={{ position: "relative", borderRadius: "8px" }}>
        {leftIcon && <div style={leftIconStyle}>{leftIcon}</div>}

        {variant === "master" && (
          <input
            name="cardNumber"
            type="text"
            value={cardNumber}
            maxLength={25}
            onChange={handleCardNumberChange}
            placeholder={placeholder}
            style={inputStyle}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        )}

        {variant === "cvv" && (
          <input
            name="cvv"
            type="text"
            value={cvv}
            maxLength={3}
            onChange={handleCVVChange}
            placeholder={placeholder}
            style={inputStyle}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        )}

        {variant === "month" && (
          <input
            name="month"
            type="text"
            value={expirationMonth}
            maxLength={2}
            onChange={handleExpirationMonthChange}
            placeholder={placeholder}
            style={inputStyle}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        )}

        {variant === "year" && (
          <input
            name="year"
            type="text"
            value={expirationYear}
            maxLength={2}
            onChange={handleExpirationYearChange}
            placeholder={placeholder}
            style={inputStyle}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        )}

        {variant === "password" && (
          <input
            name="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder={placeholder}
            style={inputStyle}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        )}

        {rightIcon && <div style={rightIconStyle}>{rightIcon}</div>}
      </div>
    </div>
  );
}
