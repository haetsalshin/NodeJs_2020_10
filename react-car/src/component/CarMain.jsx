import React, { Component, useState } from "react";
import CarInsert from "./CarInsert";
import CarList from "./CarList";

class CarMain extends Component {
  render() {
    return (
      <div>
        <CarInsert />
        <CarList />
      </div>
    );
  }
}

export default CarMain;
