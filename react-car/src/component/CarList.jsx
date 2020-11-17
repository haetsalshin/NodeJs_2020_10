import React, { Component } from "react";
import "../css/CarList.css";

class CarList extends Component {
  render() {
    return (
      <table className="carList">
        <thead>
          <tr>
            <th>No.</th>
            <th>구분</th>
            <th>시작일시</th>
            <th>종료일시</th>
            <th>현재거리</th>
            <th>소요비용</th>
            <th>장소</th>
            <th>&hearts;</th>
          </tr>
        </thead>
        <tbody>
          <td>1</td>
          <td>디젤</td>
          <td>2020-11-16</td>
          <td></td>
          <td>189000</td>
          <td>56000</td>
          <td></td>
          <td>&hearts;</td>
        </tbody>
      </table>
    );
  }
}

export default CarList;
