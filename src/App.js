import TestHeader from "./components/TestHeader/TestHeader";
import "./styles.css";
import TestForm from "./components/TestForm/TextForm";
import TestOrderDetails from "./components/TestOrderDetails/TestOrderDetails";
import React, { useState, createContext } from "react";

export const AppContext = createContext(null);

export default function App() {
  const [cardNumber, setCardNumber] = useState("");
  const [expirationMonth, setExpirationMonth] = useState("");
  const [expirationYear, setExpirationYear] = useState("");
  const [cvv, setCVV] = useState("");
  const [password, setPassword] = useState("");

  return (
    <AppContext.Provider
      value={{
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
      }}
    >
      <div className="App">
        <div style={{ display: "flex", columnGap: 50 }}>
          <div style={{ width: "70%" }}>
            <TestHeader />
            <TestForm />
          </div>
          <div style={{ width: "25%" }}>
            <TestOrderDetails />
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}
