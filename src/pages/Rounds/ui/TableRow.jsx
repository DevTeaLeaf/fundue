import React from "react";
import roundsAvatar from "../../../assets/img/roundsAvatar.png";
export const TableRow = () => {
  return (
    <tr className="border-b">
      <th
        scope="row"
        className="py-[12px] px-[30px] font-medium flex items-center"
      >
        <img src={roundsAvatar} alt="avatar" className="mr-3" />
        <div>
          <div className="flex items-center">
            <p className="text-[#6398FE] text-sm font-medium">
              The standard Round 1
            </p>
            <p className="p-[2px] ml-[6px] bg-[#E9CDCD] w-[50px] leading-3 text-[8px] flex items-center rounded-md justify-center">
              Finished
            </p>
          </div>
          <div className="text-xs text-[#838B9E] mt-[6px] leading-[14px] text-[10px]">
            04/24/2022 - 05/23/2022 14:00 UTC+3
          </div>
        </div>
      </th>
      <td className="py-[12px]  px-[30px] ">
        <div className="flex items-center ">
          <p className="py-1 px-[15px] bg-[#F9E4D5] w-[60px] flex items-center text-[10px] leading-[14px] rounded-md justify-center">
            NEAR
          </p>
          <p className="py-1 px-[15px] bg-[#D1D1FB] w-[60px] flex items-center text-[10px] leading-[14px] rounded-md justify-center ml-3">
            NFT
          </p>
        </div>
      </td>
      <td className="py-[12px]  px-[30px] text-sm">4,096</td>
      <td className="py-[12px] px-[30px] ">
        <div>
          <div className="text-sm text-[#68AB8F] font-medium">20,000 $NEAR</div>
          <div className="text-[10px] leading-[14px] text-[#838B9E]">
            ≈ 200,000 USD
          </div>
        </div>
      </td>
    </tr>
  );
};
