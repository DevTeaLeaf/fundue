import React from "react";

import "./members.css";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Card } from "./ui/Card";
import arrow from "../../assets/img/arrow.png";

import telegram from "../../assets/img/links/telegram.png";
import facebook from "../../assets/img/links/facebook.png";
import twitter from "../../assets/img/links/twitter.png";

import down from "../../assets/img/down.png";

export const SingleRound = () => {
  return (
    <>
      <Header isAuth={true} />
      <div className="members-wrapper h-[382px]"></div>
      <div className=" min-container mx-auto flex items-center justify-between my-[30px]">
        <div className="flex items-center cursor-pointer">
          <p className="text-[#6398FE] mr-1 text-[10px] leading-[14px]">
            Home / Rounds /
          </p>
          <p className="text-[#6E768C] text-[10px] leading-[14px]">
            The standard Round
          </p>
        </div>
        <div className="flex items-center cursor-pointer">
          <img src={arrow} alt="arrow" />
          <p className="text-[#6398FE] font-medium text-xs">Back to Rounds</p>
        </div>
      </div>
      <div className="min-container mx-auto">
        <div className="">
          <div className="mb-[30px]">
            <div className="flex items-center justify-between mb-[15px]">
              <div className="flex">
                <div className="py-1 px-[15px] bg-[#F9E4D5] rounded-md text-[10px] leading-[14px] mr-3">
                  NEAR
                </div>
                <div className="py-1 px-[15px] bg-[#D7FBFE] rounded-md text-[10px] leading-[14px]">
                  DEX
                </div>
              </div>
              <div className="flex items-center">
                <p className="mr-[14px] text-sm text-[#838B9E]">
                  Share project
                </p>
                <div className="flex">
                  <a href="#">
                    <img src={telegram} alt="telegram" />
                  </a>
                  <a className="mx-7" href="#">
                    <img src={facebook} alt="facebook" />
                  </a>
                  <a href="#">
                    {" "}
                    <img src={twitter} alt="twitter" />
                  </a>
                </div>
              </div>
            </div>
            <div className="text-[28px] leading-[34px] font-bold mb-[30px]">
              The standard Round
            </div>
            <div className="flex flex-wrap mb-[30px] ">
              <div className="pr-[15px] max-w-[790px] w-2/3">
                <div className="flex flex-wrap w-full bg-[#F3EFE8] py-[37px] px-[40px] relative rounded-xl  h-[194px]">
                  <div className="relative z-10 w-full">
                    <h2 className="text-xl font-semibold text-[#68AB8F] mb-[6px]">
                      10,000 $NEAR
                    </h2>
                    <p className="text-[12px] text-[#838B9E] leading-4">
                      Funded
                    </p>
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
              <div className=" pl-[15px] w-1/3">
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
            <div className="pb-[3px] flex border-solid border-b-[1px] border-[#E3E4EA]  mb-[30px]">
              <p className="text-[#6398FE] text-[16px] leading-[22px] font-medium pb-2 border-solid border-b-2 border-[#6398FE] cursor-pointer">
                Members
              </p>
              <p className="text-[16px] leading-[22px] mx-10 cursor-pointer">
                Details
              </p>
              <p className="text-[16px] leading-[22px] cursor-pointer">
                Leaderboard
              </p>
            </div>
            <div className="mt-[30px]">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <p className="mr-3 text-xs text-[#838B9E]">Sort by: </p>
                  <div className="flex items-center">
                    <p className="text-sm font-medium mr-[6px]">Contributors</p>
                    <img className="cursor-pointer" src={down} alt="down" />
                  </div>
                </div>
                <div className="flex items-center">
                  <p className="mr-3 text-xs text-[#838B9E]">All project:</p>
                  <p className="text-sm font-medium">2</p>
                </div>
              </div>
            </div>
            <div className="flex items-center flex-wrap justify-between mb-[116px]">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
