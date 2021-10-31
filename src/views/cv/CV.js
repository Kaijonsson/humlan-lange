import React from "react";
import "./cv.css";

function CV() {
  return (
    <div id="mainCvContainer">
      <p>Exhibitions</p>
      <div className="itemSeparator marginPadd" />
      <table>
        <tr>
          <th>
            <p>Host</p>
          </th>
          <th>
            <p>Location</p>
          </th>
          <th>
            <p>Year</p>
          </th>
        </tr>
        <tr>
          <td>Galleri Bellenius</td>
          <td>Stockholm, Sweden</td>
          <td>2020</td>
        </tr>
        <tr>
          <td>Konsthall</td>
          <td>Skåne</td>
          <td>2019</td>
        </tr>
        <tr>
          <td>Swedish Embassy</td>
          <td>Tobetsu, Japan</td>
          <td>2018</td>
        </tr>
        <tr>
          <td>Swedish Center Foundation</td>
          <td>Tobetsu, Japan</td>
          <td>2018</td>
        </tr>
      </table>
      <div className="itemSeparator marginPadd" />
      <p>A selection of public installations representation</p>
      <div className="itemSeparator marginPadd" />
      <p>Statens Konstråd</p>
      <p>Stockholms Konstråd</p>
      <p>Västerås konstmuseum</p>
      <p>Stockholms läns landsting</p>
      <p>Uppsala läns landsting</p>
      <p>Tyresö Kommun</p>
    </div>
  );
}

export default CV;
