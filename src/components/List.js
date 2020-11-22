import React from "react";
import Addperson from "./Addperson";
import { useSelector } from "react-redux";

const List = () => {
  const people = useSelector((state) => state.people.people);

  return (
    <div className="container mx-auto">
      <h1>Kuukausilaskutus</h1>
      <div className="flex ">
        <div className="font-bold mt-1 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide">Tuntihinta</label>{" "}
          <input className="bg-gray-200 rounded"></input>
        </div>
        <div className="font-bold mt-1 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide">Työpäivät kk</label>{" "}
          <input className="bg-gray-200 rounded "></input>
        </div>
      </div>
      <Addperson />
      <table className="table-auto mt-2">
        <thead>
          <tr>
            <th className="px-4 py-2">Työntekijä</th>
            <th className="px-4 py-2">Titteli</th>
            <th className="px-4 py-2">Allokaatio</th>
          </tr>
        </thead>
        <tbody>
        {people.map((person, i) => {
          const {firstName, lastName, allocation, title} = person;
          return(
              <tr>
                  <td className="border px-4 py-2">{firstName} {lastName}</td>
                  <td className="border px-4 py-2">{title}</td>
                  <td className="border px-4 py-2">{allocation}</td>
              </tr>
          )
      })}
        </tbody>
      </table>
    </div>
  );
};

export default List;
