import React, { Component } from "react";
import "../css/CarInsert.css";

class CarInsert extends Component {
  render() {
    return (
      <form className="CarInsert">
        <input placeholder="시작일시" />
        <input placeholder="종료일시" />
        <input placeholder="현재거리" />
        <input placeholder="소요비용" />
        <input placeholder="장소" />
        <button type="button">저장</button>
      </form>
    );
  }
}

export default CarInsert;
