import React from "react";

import cover2 from "../../../assets/img/cover2.png";

import { Button } from "../../../components/Button";

export const Card = () => {
  return (
    <div className="rounded-[12px] border border-[#E3E4EA] max-w-[380px] mt-[30px]">
      <div className="relative">
        <img className="rounded-t-xl" src={cover2} alt="cover" />
      </div>
      <p className="text-[#838B9E] text-right text-[10px] leading-[14px] mt-3 mr-5">
        Last update: 5 days, 12 hours ago
      </p>
      <div className="px-5 pb-5 pt-3">
        <h1 className="font-semibold text-sm mb-3">
          The standard Lorem Ipsum 1{" "}
        </h1>
        <p className="text-xs text-[#838B9E] mb-3">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do
          amet sint.{" "}
        </p>
        <div className="flex align-center">
          <div className="pr-[20px]">
            <p className="text-[#68AB8F] font-medium text-xs mb-[6px]">
              10,4 $NEAR
            </p>
            <p className="text-[#838B9E] text-[10px] leading-[14px]">
              raised from 52 contributors
            </p>
          </div>
          <div className="pl-[20px]">
            <p className="text-[#68AB8F] font-medium text-xs mb-[6px]">
              140,4 $NEAR
            </p>
            <p className="text-[#838B9E] text-[10px] leading-[14px]">
              Est. Matching
            </p>
          </div>
        </div>
      </div>
      <div className="mb-[25px] flex items-center justify-center">
        <Button text="Add To Card" p="px-[29px] py-[8px]" />
      </div>
    </div>
  );
};
