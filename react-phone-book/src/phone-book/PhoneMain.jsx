import React, { useState } from "react";
import PhoneInsert from "./PhoneInsert";
import PhoneList from "./PhoneList";

const PhoneMain = () => {
  const [phoneBook, setPhoneBook] = useState([
    { id: 1, name: "이몽룡", number: "222" },
    { id: 2, name: "배수지", number: "222" },
    { id: 3, name: "띠용", number: "222" },
  ]);
  return (
    <>
      <PhoneInsert />
      <PhoneList phoneBook={phoneBook} />
    </>
  );
};

export default PhoneMain;
