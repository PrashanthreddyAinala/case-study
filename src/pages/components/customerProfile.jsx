import React from "react";

export default function CustomerProfile() {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2 className="text-white">Mr. Vladimir</h2>
        <h2 className="text-white">Preobrazhensky</h2>

        <div className="text-light-gray margin-y-20">
          <p>Customer ID: 78000012</p>
          <p>Kvt</p>
        </div>
      </div>
      <div className="profile-body">
        <h3 className="text-white">PERSONAL INFORMATION</h3>
        <div>
          <div className="profile-body-content">
            <p className="text-gray">Telephone</p>
            <p className="text-white">+37129231472</p>
          </div>
          <div className="profile-body-content">
            <p className="text-gray">Telephone business</p>
            <p className="text-white">+37129231472</p>
          </div>
          <div className="profile-body-content">
            <p className="text-gray">Telephone business 2</p>
            <p className="text-white">+37129231472</p>
          </div>
          <div className="profile-body-content">
            <p className="text-gray">Email 1</p>
            <p className="text-white">Sample@email.com</p>
          </div>
          <div className="profile-body-content">
            <p className="text-gray">Email 2</p>
            <p className="text-white">Sample@email.com</p>
          </div>
          <div className="profile-body-content">
            <p className="text-gray">Address</p>
            <p className="text-white">United States of America</p>
          </div>
        </div>
        <h3 className="text-white margin-t-40">PREFERENCES AND METRICS</h3>
        <div>
          <div className="profile-body-content">
            <p className="text-gray">Preferred cabin</p>
            <p className="text-white">Economy(13/12)</p>
          </div>
          <div className="profile-body-content">
            <p className="text-gray">Meal</p>
            <p className="text-white">GFML(3/15)</p>
          </div>
          <div className="profile-body-content">
            <p className="text-gray">Prefered departure timeframe</p>
            <p className="text-white">Afternoon</p>
          </div>
          <div className="profile-body-content">
            <p className="text-gray">Prefered origin</p>
            <p className="text-white">VNO</p>
          </div>
        </div>
        <h3 className="text-white margin-t-40">EMPLOYEMENT HISTORY</h3>
        <div>
          <div className="profile-body-content">
            <p className="text-gray">Company</p>
            <p className="text-white">Dinamo riga</p>
          </div>
          <div className="profile-body-content">
            <p className="text-gray">Corporate code</p>
            <p className="text-white">ITM32234</p>
          </div>
          <div className="profile-body-content">
            <p className="text-gray">Command</p>
            <p className="text-white">LV02331</p>
          </div>
          <div className="profile-body-content">
            <p className="text-gray">Status</p>
            <p className="text-white">Active</p>
          </div>
        </div>
      </div>
    </div>
  );
}
