import React from "react";
import "./round.css";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Table } from "./ui/Table";
import arrow from "../../assets/img/arrow.png";

import { Link } from "react-router-dom";

export const Rounds = () => {
  return (
    <>
      <Header isAuth={true} />
      <div className="round-wrapper hidden sm:flex h-[382px]"></div>
      <div className="min-container mx-auto">
        <div className="flex items-center justify-between my-5 md:my-[30px] mx-[15px] md:mx-0">
          <div className="flex items-center cursor-pointer">
            <p className="text-[#6398FE] mr-1">Home /</p>
            <p className="text-[#6E768C]">Rounds</p>
          </div>
          <div className="flex items-center cursor-pointer">
            <img src={arrow} alt="arrow" />
            <Link
              className="text-[#6398FE] font-medium text-xs hidden md:flex"
              to="/"
            >
              Back to Home page
            </Link>
            <Link
              className="text-[#6398FE] font-medium text-xs flex md:hidden mr-4"
              to="/"
            >
              Back
            </Link>
          </div>
        </div>
        <div className="min-round-wrapper flex sm:hidden h-[90px] mb-5"></div>
        <div className="items-center justify-between mb-[30px] hidden md:flex">
          <div className="text-3xl font-bold">Rounds</div>
        </div>
        <div className="flex mb-[30px] flex-col-reverse md:flex-row mx-5 md:mx-0">
          <div className="md:pr-[15px] md:max-w-[790px] md:w-2/3 w-full">
            <div className="flex flex-wrap w-full bg-[#F3EFE8] py-[26px] px-[30px] relative rounded-xl  h-[194px]">
              <div className="relative z-10 w-full">
                <h2 className="text-xl font-semibold text-[#68AB8F] mb-[6px]">
                  10,000 $NEAR
                </h2>
                <p className="text-[12px] text-[#838B9E] leading-4">Funded</p>
                <div className="flex flex-row mt-6">
                  <div className="flex flex-column w-1/2">
                    <div>
                      <p className="text-[20px] font-semibold leading-6 mb-[6px]">
                        4
                      </p>
                      <p className="text-xs text-[#838B9E]">Total Round</p>
                    </div>
                  </div>
                  <div className="flex flex-column w-1/2">
                    <div>
                      <p className="text-[20px] font-semibold leading-6 mb-[6px]">
                        1,755,708
                      </p>
                      <p className="text-xs text-[#838B9E]">Total Votes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:pl-[15px] md:w-1/3 w-full mb-5 md:mb-0">
            <div className="flex flex-wrap w-full bg-[#FCFCFC] py-[26px] px-[30px] relative rounded-xl border-solid border-[1px] border-[#E3E4EA]">
              <div className="text-center relative z-10 w-full">
                <h2 className="font-normal text-[#838B9E] text-sm">
                  Until the end of Request accept
                </h2>
                <p className="leading-relaxed mt-5 font-normal text-xl mb-5">
                  8d : 12h : 34m : 20s
                </p>
                <p className="text-center text-[#838B9E] text-xs mb-2">
                  Apply for the Round
                </p>
                <button
                  type="button"
                  className="text-white bg-gradient-to-br from-[#30CFF2] to-[#6792FF] hover:bg-gradient-to-br font-medium rounded-xl text-xs px-[21px] py-[9px] text-center"
                >
                  Connect Wallet
                </button>
              </div>
            </div>
          </div>
        </div>
        <Table />
      </div>
      <Footer />
    </>
  );
};
