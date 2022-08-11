import React from "react";

import arrow from "../../../assets/img/arrow.png";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <>
      <div className="flex items-end justify-end my-[30px]">
        <div className="flex items-end justify-end cursor-pointer">
          <img src={arrow} alt="arrow" />
          <Link
            className="text-[#6398FE] font-medium text-xs md:mr-[0px] mr-5"
            to="/rounds"
          >
            Back to The standard Round
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center lg:justify-between mb-[30px]">
        <div className="test-[20px] leading-6 font-semibold lg:text-3xl lg:font-bold">
          Apply for The standard Round
        </div>
      </div>
    </>
  );
};
