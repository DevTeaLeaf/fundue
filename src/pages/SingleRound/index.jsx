import React from "react";

import "./members.css";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import arrow from "../../assets/img/arrow.png";

import user from "../../assets/img/user.png";

import video from "../../assets/img/video.png";

import telegram from "../../assets/img/links/telegram.png";
import facebook from "../../assets/img/links/facebook.png";
import twitter from "../../assets/img/links/twitter.png";
import discord from "../../assets/img/links/discord.png";
import idk from "../../assets/img/links/discord.png";

import contributor1 from "../../assets/img/contributor1.png";
import contributor2 from "../../assets/img/contributor2.png";
import contributor3 from "../../assets/img/contributor3.png";
import contributor4 from "../../assets/img/contributor4.png";
import contributor5 from "../../assets/img/contributor5.png";

import cover1 from "../../assets/img/cover1.png";
import cover2 from "../../assets/img/cover2.png";

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
              <div className="rounded-[12px] border border-[#E3E4EA] max-w-[380px] mt-[30px]">
                <div className="relative">
                  <img className="rounded-t-xl" src={cover1} alt="cover" />
                </div>
                <p className="text-[#838B9E] text-right text-[10px] leading-[14px] mt-3 mr-5">
                  Last update: 5 days, 12 hours ago
                </p>
                <div className="px-5 pb-5 pt-3">
                  <h1 className="font-semibold text-sm mb-3">
                    The standard Lorem Ipsum 1{" "}
                  </h1>
                  <p className="text-xs text-[#838B9E] mb-3">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Amet minim mollit non deserunt ullamco est sit
                    aliqua dolor do amet sint.{" "}
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
                <button
                  type="button"
                  className="text-white bg-gradient-to-br from-[#30CFF2] to-[#6792FF] hover:bg-gradient-to-br font-medium rounded-xl text-xs px-[29px] py-[8px] text-center mb-[25px] flex items-center justify-center mx-auto"
                >
                  Add To Card
                </button>
              </div>
              <div className="rounded-[12px] border border-[#E3E4EA] max-w-[380px] mt-[30px]">
                <div className="relative">
                  <img className="rounded-t-xl" src={cover1} alt="cover" />
                </div>
                <p className="text-[#838B9E] text-right text-[10px] leading-[14px] mt-3 mr-5">
                  Last update: 5 days, 12 hours ago
                </p>
                <div className="px-5 pb-5 pt-3">
                  <h1 className="font-semibold text-sm mb-3">
                    The standard Lorem Ipsum 1{" "}
                  </h1>
                  <p className="text-xs text-[#838B9E] mb-3">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Amet minim mollit non deserunt ullamco est sit
                    aliqua dolor do amet sint.{" "}
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
                <button
                  type="button"
                  className="text-white bg-gradient-to-br from-[#30CFF2] to-[#6792FF] hover:bg-gradient-to-br font-medium rounded-xl text-xs px-[29px] py-[8px] text-center mb-[25px] flex items-center justify-center mx-auto"
                >
                  Add To Card
                </button>
              </div>
              <div className="rounded-[12px] border border-[#E3E4EA] max-w-[380px] mt-[30px]">
                <div className="relative">
                  <img className="rounded-t-xl" src={cover1} alt="cover" />
                </div>
                <p className="text-[#838B9E] text-right text-[10px] leading-[14px] mt-3 mr-5">
                  Last update: 5 days, 12 hours ago
                </p>
                <div className="px-5 pb-5 pt-3">
                  <h1 className="font-semibold text-sm mb-3">
                    The standard Lorem Ipsum 1{" "}
                  </h1>
                  <p className="text-xs text-[#838B9E] mb-3">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Amet minim mollit non deserunt ullamco est sit
                    aliqua dolor do amet sint.{" "}
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
                <button
                  type="button"
                  className="text-white bg-gradient-to-br from-[#30CFF2] to-[#6792FF] hover:bg-gradient-to-br font-medium rounded-xl text-xs px-[29px] py-[8px] text-center mb-[25px] flex items-center justify-center mx-auto"
                >
                  Add To Card
                </button>
              </div>
              <div className="rounded-[12px] border border-[#E3E4EA] max-w-[380px] mt-[30px]">
                <div className="relative">
                  <img className="rounded-t-xl" src={cover1} alt="cover" />
                </div>
                <p className="text-[#838B9E] text-right text-[10px] leading-[14px] mt-3 mr-5">
                  Last update: 5 days, 12 hours ago
                </p>
                <div className="px-5 pb-5 pt-3">
                  <h1 className="font-semibold text-sm mb-3">
                    The standard Lorem Ipsum 1{" "}
                  </h1>
                  <p className="text-xs text-[#838B9E] mb-3">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Amet minim mollit non deserunt ullamco est sit
                    aliqua dolor do amet sint.{" "}
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
                <button
                  type="button"
                  className="text-white bg-gradient-to-br from-[#30CFF2] to-[#6792FF] hover:bg-gradient-to-br font-medium rounded-xl text-xs px-[29px] py-[8px] text-center mb-[25px] flex items-center justify-center mx-auto"
                >
                  Add To Card
                </button>
              </div>
              <div className="rounded-[12px] border border-[#E3E4EA] max-w-[380px] mt-[30px]">
                <div className="relative">
                  <img className="rounded-t-xl" src={cover1} alt="cover" />
                </div>
                <p className="text-[#838B9E] text-right text-[10px] leading-[14px] mt-3 mr-5">
                  Last update: 5 days, 12 hours ago
                </p>
                <div className="px-5 pb-5 pt-3">
                  <h1 className="font-semibold text-sm mb-3">
                    The standard Lorem Ipsum 1{" "}
                  </h1>
                  <p className="text-xs text-[#838B9E] mb-3">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Amet minim mollit non deserunt ullamco est sit
                    aliqua dolor do amet sint.{" "}
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
                <button
                  type="button"
                  className="text-white bg-gradient-to-br from-[#30CFF2] to-[#6792FF] hover:bg-gradient-to-br font-medium rounded-xl text-xs px-[29px] py-[8px] text-center mb-[25px] flex items-center justify-center mx-auto"
                >
                  Add To Card
                </button>
              </div>
              <div className="rounded-[12px] border border-[#E3E4EA] max-w-[380px] mt-[30px]">
                <div className="relative">
                  <img className="rounded-t-xl" src={cover1} alt="cover" />
                </div>
                <p className="text-[#838B9E] text-right text-[10px] leading-[14px] mt-3 mr-5">
                  Last update: 5 days, 12 hours ago
                </p>
                <div className="px-5 pb-5 pt-3">
                  <h1 className="font-semibold text-sm mb-3">
                    The standard Lorem Ipsum 1{" "}
                  </h1>
                  <p className="text-xs text-[#838B9E] mb-3">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Amet minim mollit non deserunt ullamco est sit
                    aliqua dolor do amet sint.{" "}
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
                <button
                  type="button"
                  className="text-white bg-gradient-to-br from-[#30CFF2] to-[#6792FF] hover:bg-gradient-to-br font-medium rounded-xl text-xs px-[29px] py-[8px] text-center mb-[25px] flex items-center justify-center mx-auto"
                >
                  Add To Card
                </button>
              </div>
              <div className="rounded-[12px] border border-[#E3E4EA] max-w-[380px] mt-[30px]">
                <div className="relative">
                  <img className="rounded-t-xl" src={cover1} alt="cover" />
                </div>
                <p className="text-[#838B9E] text-right text-[10px] leading-[14px] mt-3 mr-5">
                  Last update: 5 days, 12 hours ago
                </p>
                <div className="px-5 pb-5 pt-3">
                  <h1 className="font-semibold text-sm mb-3">
                    The standard Lorem Ipsum 1{" "}
                  </h1>
                  <p className="text-xs text-[#838B9E] mb-3">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Amet minim mollit non deserunt ullamco est sit
                    aliqua dolor do amet sint.{" "}
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
                <button
                  type="button"
                  className="text-white bg-gradient-to-br from-[#30CFF2] to-[#6792FF] hover:bg-gradient-to-br font-medium rounded-xl text-xs px-[29px] py-[8px] text-center mb-[25px] flex items-center justify-center mx-auto"
                >
                  Add To Card
                </button>
              </div>
              <div className="rounded-[12px] border border-[#E3E4EA] max-w-[380px] mt-[30px]">
                <div className="relative">
                  <img className="rounded-t-xl" src={cover1} alt="cover" />
                </div>
                <p className="text-[#838B9E] text-right text-[10px] leading-[14px] mt-3 mr-5">
                  Last update: 5 days, 12 hours ago
                </p>
                <div className="px-5 pb-5 pt-3">
                  <h1 className="font-semibold text-sm mb-3">
                    The standard Lorem Ipsum 1{" "}
                  </h1>
                  <p className="text-xs text-[#838B9E] mb-3">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Amet minim mollit non deserunt ullamco est sit
                    aliqua dolor do amet sint.{" "}
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
                <button
                  type="button"
                  className="text-white bg-gradient-to-br from-[#30CFF2] to-[#6792FF] hover:bg-gradient-to-br font-medium rounded-xl text-xs px-[29px] py-[8px] text-center mb-[25px] flex items-center justify-center mx-auto"
                >
                  Add To Card
                </button>
              </div>
              <div className="rounded-[12px] border border-[#E3E4EA] max-w-[380px] mt-[30px]">
                <div className="relative">
                  <img className="rounded-t-xl" src={cover1} alt="cover" />
                </div>
                <p className="text-[#838B9E] text-right text-[10px] leading-[14px] mt-3 mr-5">
                  Last update: 5 days, 12 hours ago
                </p>
                <div className="px-5 pb-5 pt-3">
                  <h1 className="font-semibold text-sm mb-3">
                    The standard Lorem Ipsum 1{" "}
                  </h1>
                  <p className="text-xs text-[#838B9E] mb-3">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Amet minim mollit non deserunt ullamco est sit
                    aliqua dolor do amet sint.{" "}
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
                <button
                  type="button"
                  className="text-white bg-gradient-to-br from-[#30CFF2] to-[#6792FF] hover:bg-gradient-to-br font-medium rounded-xl text-xs px-[29px] py-[8px] text-center mb-[25px] flex items-center justify-center mx-auto"
                >
                  Add To Card
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
