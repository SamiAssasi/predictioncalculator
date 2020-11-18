import React from "react";

const List = () => {
  return (
    <div className="container mx-auto">
      <h1>List</h1>
      <div className="font-bold">
        Tuntihinta: <input className="bg-gray-200 rounded"></input>
      </div>
      <div className="font-bold">Kuukauden päivät:</div>
      <div className="font-bold">Työntekijä:</div>
    </div>
  );
};

export default List;
