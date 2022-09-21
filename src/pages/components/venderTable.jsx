import React, { useState } from "react";

export default function VenderTable() {
  const [selectedVender, setSelectedVender] = useState();

  console.log(selectedVender);

  const venderRows = () => {
    return (
      <>
        <tr onClick={() => setSelectedVender()}>
          <td>11.10.2016</td>
          <td colSpan={2}>2Q95DE</td>
          <td colSpan={3}>LAX-AMS-VNO</td>
          <td>C</td>
          <td>HK 1</td>
          <td>N</td>
          <td>+</td>
          <td>OK</td>
          <td>OK</td>
        </tr>
        <tr>
          <th>Departure Date</th>
          <th>PNR</th>
          <th>Flight no</th>
          <th>Flight Times</th>
          <th>Routing</th>
          <th>Cabin class</th>
          <th>Segment Status</th>
          <th>Disruption type</th>
          <th colSpan={2}>To be offered</th>
          <th>Ticket</th>
          <th></th>
        </tr>
        <tr>
          <td>11.10.2016</td>
          <td>2Q95DE</td>
          <td>BT343</td>
          <td>1215-1305</td>
          <td>AMS-VNO</td>
          <td>C</td>
          <td>HK1</td>
          <td>N</td>
          <td colSpan={2}>CKBG/SEAT</td>
          <td>OK</td>
          <td>OK</td>
        </tr>
      </>
    );
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Departure Date</th>
            <th colSpan={2}>PNR</th>
            <th colSpan={3}>Routing</th>
            <th>Cabin Class</th>
            <th>Segment Status</th>
            <th>Disruption</th>
            <th>To be offered</th>
            <th>Ticket</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{venderRows()}</tbody>
      </table>
    </div>
  );
}
