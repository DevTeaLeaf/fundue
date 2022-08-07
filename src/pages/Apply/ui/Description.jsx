import React from "react";

import icon1 from "../../../assets/img/apply/icon1.png";
import icon2 from "../../../assets/img/apply/icon2.png";
import icon3 from "../../../assets/img/apply/icon3.png";
import icon4 from "../../../assets/img/apply/icon4.png";
import icon5 from "../../../assets/img/apply/icon5.png";
import icon6 from "../../../assets/img/apply/icon6.png";
import icon7 from "../../../assets/img/apply/icon7.png";
import icon8 from "../../../assets/img/apply/icon8.png";
import icon9 from "../../../assets/img/apply/icon9.png";
import icon10 from "../../../assets/img/apply/icon10.png";
import icon11 from "../../../assets/img/apply/icon11.png";
import icon12 from "../../../assets/img/apply/icon12.png";

export const Description = () => {
  return (
    <>
      <h3 className="font-medium text-sm mb-[6px]">Description</h3>
      <div className="border border-[#E3E4EA] rounded-xl">
        <div className="p-2 flex items-center justify-between">
          <div className="flex items-center cursor-pointer">
            <div>
              <img src={icon1} alt="icon" />
            </div>
            <div className="flex items-center mx-3">
              {" "}
              <img src={icon2} alt="icon" /> <img src={icon3} alt="icon" />{" "}
              <img src={icon4} alt="icon" /> <img src={icon5} alt="icon" />
            </div>
            <div className="flex items-center">
              {" "}
              <img src={icon6} alt="icon" /> <img src={icon7} alt="icon" />{" "}
              <img src={icon8} alt="icon" /> <img src={icon9} alt="icon" />
            </div>
            <div className="flex items-center">
              {" "}
              <img src={icon10} alt="icon" className="mx-3" />{" "}
              <img src={icon11} alt="icon" />
            </div>
          </div>
          <div className="cursor-pointer">
            {" "}
            <img src={icon12} alt="icon" />
          </div>
        </div>
        <div className="p-[30px]">
          <h1 className="font-semibold text-[24px] leading-7">Heading 1</h1>
          <h3 className="text-base font-semibold my-5">Heading 2</h3>
          <p className="mb-5 text-[#838B9E] text-sm">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Exercitation veniam consequat
            sunt nostrud amet.
          </p>
          <ul className="font-normal text-sm text-[#838B9E] list-disc pl-5">
            <li className="mb-1">
              <div></div>
              <p>
                Exercitation veniam consequat sunt nostrud amet. Velit officia
                consequat duis enim velit mollit.
              </p>
            </li>
            <li className="mb-1">
              Velit officia consequat duis enim velit mollit.
            </li>
            <li className="mb-1">
              Amet minim mollit non deserunt ullamco est Exercitation veniam
              consequat sunt nostrud amet.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
