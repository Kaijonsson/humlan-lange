import React from "react";
import "./partial.css";
import "../../../../index.css";

function PartialEx() {
  const navigateToArticle = (path) => {
    if (path === 'soloShow') {
      window.open('https://www.omkonst.se/22-lange-humlan.shtml?utm_campaign=cmp_2877371&utm_source=getanewsletter&utm_medium=email')
    }
    if (path === 'generations') {
      window.open('https://www.omkonst.com/20-lange-lange-jonsson.shtml')
    }
    return;
  }
  return (
    <div id="partialCvContainer">
      <div className="itemSeparator marginPadd" />
      <p className="tableTitle">Exhibitions</p>
      <table>
        <tbody>
          <tr onClick={() => navigateToArticle('soloShow')}>
            <td>
              <p className='articleLink'>Galleri Bellenius</p>
            </td>
            <td>
              <p>2022</p>
            </td>
          </tr>
          <tr onClick={() => navigateToArticle('generations')}>
            <td>
              <p className='articleLink'>Galleri Bellenius</p>
            </td>
            <td>
              <p>2020</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Galleri Utås</p>
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
