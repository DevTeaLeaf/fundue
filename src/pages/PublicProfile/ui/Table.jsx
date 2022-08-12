import React from "react";

import arrowUp from "../../../assets/img/arrowUp.png";
import arrow from "../../../assets/img/arrow.png";

import { TableRow } from "./TableRow";

export const Table = () => {
  return (
    <div className="mx-5 md:mx-0 max-w-[790px]">
      <div className="flex justify-between items-center mb-6">
        <div className="flex justify-between items-center">
          <p className="text-[#838B9E] text-xs mr-3">Sort by: </p>
          <div className="flex justify-between items-center">
            <p className="text-sm mr-[6px]">Finished</p>
            <img src={arrow} alt="sort" className="rotate-[-90deg]" />
          </div>
        </div>
      </div>
      <div className=" mb-6 md:mb-[45px]">
        <div className="overflow-x-auto relative">
          <table className="w-full text-sm text-left">
            <thead className="text-xs border-b">
              <tr>
                <th scope="col" className="px-6"></th>
                <th scope="col" className="px-6"></th>
                <th
                  scope="col"
                  className="py-[6px] px-6 hidden md:table-header-group"
                >
                  <div className="flex items-center mb-[6px]">
                    <p className="text-[#838B9E] text-xs ml-[30px] mr-[6px]">
                      Contribution
                    </p>
                    <img src={arrowUp} alt="up" />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <TableRow />
              <TableRow />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
