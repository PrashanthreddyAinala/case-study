import React from "react";

import VenderTable from "./venderTable";

export default function VendersData() {
  return (
    <div className="vender-container">
      <div className="venter-container-header">
        <div className="left-div">
          <p className="text-light-gray">Status</p>
          <p className="text-lg text-light-gray font-medium">VIP 28991100</p>
        </div>
        <div className="right-div">
          <div>
            <p className="text-light-gray">Gift Box</p>
            <div className="right-subdiv text-gray">
              <div>
                <p>Business upgrade</p>
                <p>Baggage</p>
              </div>
              <div>
                <p>Sport equipment</p>
                <p>Meal x2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <VenderTable />
    </div>
  );
}
