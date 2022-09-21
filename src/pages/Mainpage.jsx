import React from "react";
import CustomerProfile from "./components/customerProfile";
import VendersData from "./components/vendersData";

export default function MainPage() {
  return (
    <div className="main-container">
      <CustomerProfile />
      <VendersData />
    </div>
  );
}
