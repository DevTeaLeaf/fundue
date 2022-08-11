import React from "react";

import arrowUp from "../../../assets/img/arrowUp.png";
import arrow from "../../../assets/img/arrow.png";

import { TableRow } from "./TableRow";

export const Table = () => {
  return (
    <div className="mx-5 md:mx-0">
      <div className="flex justify-between items-center mb-6">
        <div className="flex justify-between items-center">
          <p className="text-[#838B9E] text-xs mr-3">Sort by: </p>
          <div className="flex justify-between items-center">
            <p className="text-sm mr-[6px]">Finished</p>
            <img src={arrow} alt="sort" className="rotate-[-90deg]" />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-[#838B9E] text-xs mr-3">All project:</p>
          <p className="text-sm font-medium">10</p>
        </div>
      </div>
      <div className=" mb-6 md:mb-[45px]">
        <div className="overflow-x-auto relative">
          <table className="w-full text-sm text-left">
            <thead className="text-xs border-b">
              <tr>
                <th scope="col" className="px-6"></th>
                <th scope="col" className="px-6 hidden md:table-column"></th>
                <th
                  scope="col"
                  className="py-[6px] px-6 hidden md:table-column"
                >
                  <div className="flex items-center">
                    <p className="text-[#838B9E] text-xs mr-[6px]">Votes</p>
                    <img src={arrowUp} alt="up" />
                  </div>
                </th>
                <th
                  scope="col"
                  className="py-[6px] px-6 hidden md:table-column"
                >
                  <div className="flex items-center">
                    <p className="text-[#838B9E] text-xs mr-[6px]">
                      Matching Pool
                    </p>
                    <img src={arrowUp} alt="up" />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <TableRow />
              <TableRow />
              <TableRow />
              <TableRow />
              <TableRow />
              <TableRow />
              <TableRow />
              <TableRow />
              <TableRow />
              <TableRow />
            </tbody>
          </table>
        </div>
      </div>
      <div className="text-sm flex items-center justify-center mb-12 md:mb-[116px]">
        <p className="mr-[21px] text-[#4c89fb] bg-[#abc7fb] py-[2px] px-2 rounded-full cursor-pointer">
          1
        </p>
        <p className="mr-[30px] cursor-pointer">2</p>
        <p className="mr-[30px] cursor-pointer">3</p>
        <p className="mr-[30px] cursor-pointer">{">"}</p>
        <p className="mr-[30px] cursor-pointer">{">>"}</p>
      </div>
    </div>
  );
};
