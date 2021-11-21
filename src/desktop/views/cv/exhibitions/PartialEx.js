import React from "react";
import "./partial.css";
import "../../../../index.css";

function PartialEx() {
  return (
    <div id="partialCvContainer">
      <div className="itemSeparator marginPadd" />
      <p className="tableTitle">Exhibitions</p>
      <table>
        <tbody>
          <tr>
            <td>
              <p>Galleri Bellenius</p>
            </td>
            <td>
              <p>2020</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Konsthallen Hishult</p>
            </td>
            <td>
              <p>2018</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Swedish Embassy, Japan</p>
            </td>
            <td>
              <p>2018</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Swedish Center Foundation, Japan</p>
            </td>
            <td>
              <p>2018</p>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="itemSeparator marginPadd" />
      <p className="tableTitle">
        A selection of public installations & representation
      </p>
      <p>Statens Konstråd</p>
      <p>Stockholms Konstråd</p>
      <p>Västerås konstmuseum</p>
      <p>Stockholms läns landsting</p>
      <p>Uppsala läns landsting</p>
      <p>Tyresö Kommun</p>
    </div>
  );
}

export default PartialEx;
