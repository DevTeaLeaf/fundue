import React from "react";

import trash from "../../../assets/img/trash.png";
import example from "../../../assets/img/example.png";

export const Row = () => {
  return (
    <div className="flex items-center justify-between border-solid border-t-[1px] border-[#E3E4EA] py-6">
      <div className="flex items-center pl-[30px]">
        <img className="mr-[24px]" src={example} alt="example" />
        <div>
          <h1 className="text-sm font-medium mb-[6px]">
            The standard project 1
          </h1>
          <div className="flex items-center justify-start">
            <p className="text-sm font-normal rounded border-[1px] border-[#E3E4EA] w-[60px] h-[28px] flex items-center justify-center">
              4
            </p>
            <p className="text-sm font-medium ml-3">$NEAR</p>
          </div>
        </div>
      </div>
      <div className="hidden items-center justify-between pr-[60px] md:flex">
        <div className="flex items-center pr-[60px]">
          <div className="font-normal pr-[6px] text-sm text-[#68AB8F]">
            +0 $NEAR
          </div>
          <div className="font-normal text-xs text-[#838B9E]">estd. match</div>
        </div>
        <img className="pl-[60px]" src={trash} alt="delete" />
      </div>
    </div>
  );
};
