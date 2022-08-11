import React from "react";

import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";

import arrow from "../../../assets/img/arrow.png";
import { Link } from "react-router-dom";

import { Nav } from "../ui/Nav";
import { Description } from "../ui/Description";

import step from "../../../assets/img/apply/step3.png";

export const Step3 = () => {
  return (
    <>
      <Header isAuth="true" />
      <div className="min-container mx-auto">
        <Nav />
        <div className="max-w-[790px]">
          <img
            src={step}
            alt="steps"
            className="hidden md:flex my-[30px] ml-[50px]"
          />
          <div className="p-[30px] border border-[#E3E4EA] rounded-xl mb-[30px]">
            <div className="mb-6">
              <p className="text-xs text-[#838B9E] mb-[6px]">Stеp 3 of 4</p>
              <h3 className="font-semibold text-[18px] leading-5">
                Rules and regulations{" "}
              </h3>
            </div>
            <Description />
          </div>
          <div className="flex justify-center items-center  mb-[48px] md:mb-[150px]">
            <Link
              className="cursor-pointer flex items-center pr-[15px]"
              to="/apply/step-2"
            >
              <img src={arrow} alt="arrow" />
              <p className="text-[#6398FE] text-xs font-medium">Back</p>
            </Link>
            <Link
              className="cursor-pointer flex items-center pl-[15px]"
              to="/apply/step-4"
            >
              <p className="text-[#6398FE] text-xs font-medium">Next</p>
              <img src={arrow} alt="arrow" className="rotate-180" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
