import React from "react";

import "./single.css";

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

export const SingleProjectOwner = () => {
  return (
    <>
      <Header isAuth={false} />
      <div className="single-wrapper h-[382px]"></div>
      <div className=" min-container mx-auto flex items-center justify-between my-[30px]">
        <div className="flex items-center cursor-pointer">
          <p className="text-[#6398FE] mr-1 text-[10px] leading-[14px]">
            Home / Rounds / The standard Round /
          </p>
          <p className="text-[#6E768C] text-[10px] leading-[14px]">
            The standard Lorem Ipsum{" "}
          </p>
        </div>
        <div className="flex items-center cursor-pointer">
          <img src={arrow} alt="arrow" />
          <p className="text-[#6398FE] font-medium text-xs">
            Back to standard Raunds
          </p>
        </div>
      </div>
      <div className="min-container mx-auto flex">
        <div className="w-2/3">
          <div className="mb-[30px]">
            <div className="flex items-center justify-between mb-[15px]">
              <div className="py-1 px-[15px] bg-[#F9E4D5] rounded-md text-[10px] leading-[14px]">
                NEAR
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
            <div className="text-[28px] leading-[34px] font-bold">
              The standard Lorem Ipsum
            </div>
            <div className="text-[#838B9E] text-sm mt-[27px] flex justify-end items-end mb-[60px]">
              <a className="flex mr-[26px]" href="#">
                <img src={telegram} alt="telegram" />
                <p className="ml-2">Telegram</p>
              </a>
              <a className="flex mr-[26px]" href="#">
                <img src={twitter} alt="twitter" />
                <p className="ml-2">Twitter</p>
              </a>
              <a className="flex mr-[26px]" href="#">
                <img src={discord} alt="discord" />
                <p className="ml-2">Discord</p>
              </a>
              <a className="flex" href="#">
                <img src={idk} alt="website" />
                <p className="ml-2">Website</p>
              </a>
            </div>
            <div className="pb-[3px] flex border-solid border-b-[1px] border-[#E3E4EA] max-w-[790px] mb-[30px]">
              <p className="text-[#6398FE] text-[16px] leading-[22px] font-medium pb-2 border-solid border-b-2 border-[#6398FE] cursor-pointer">
                Vision
              </p>
              <p className="text-[16px] leading-[22px] mx-10 cursor-pointer">
                Rules and regulations
              </p>
            </div>
          </div>
          <div className="p-[30px] mb-[30px]">
            <h3 className="text-[24px] leading-7 font-semibold mb-5">
              Lorem Ipsum
            </h3>
            <div className="text-[#838B9E] text-sm mb-6 max-w-[650px]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet. Exercitation
              veniam consequat sunt nostrud amet.
            </div>
            <h3 className="text-[16px] leading-[22px] font-semibold mb-5">
              Amet minim mollit non
            </h3>
            <ul className="font-normal text-sm text-[#838B9E] list-disc pl-5 mb-6">
              <li className="mb-2">
                <div></div>
                <p>
                  Exercitation veniam consequat sunt nostrud amet. Velit officia
                  consequat duis enim velit mollit.
                </p>
              </li>
              <li className="mb-2">
                Velit officia consequat duis enim velit mollit.
              </li>
              <li className="mb-2">
                Amet minim mollit non deserunt ullamco est Exercitation veniam
                consequat sunt nostrud amet.
              </li>
            </ul>
            <img src={video} alt="video" />
          </div>
          <div className="p-[30px] mb-[30px] rounded-xl bg-[#E8E8FD]">
            <h1 className="font-semibold text-[24px] leading-7 mb-6">
              Timeline
            </h1>
            <div>
              <div className="flex py-5 mb-3 px-[30px] items-center justify-between max-w-[730px] bg-[#FCFCFC] rounded-xl">
                <p className="text-sm">
                  We are launching something and it’s important that everyone’s
                  aware.
                </p>
                <p className="text-[#838B9E] text-[12px] leading-4">
                  1 day ago
                </p>
              </div>
              <div className="flex py-5 mb-3 px-[30px] items-center justify-between max-w-[730px] bg-[#FCFCFC] rounded-xl">
                <p className="text-sm">
                  We are launching something and it’s important that everyone’s
                  aware.
                </p>
                <p className="text-[#838B9E] text-[12px] leading-4">
                  1 day ago
                </p>
              </div>
              <div className="flex py-5 px-[30px] items-center justify-between max-w-[730px] bg-[#FCFCFC] rounded-xl">
                <p className="text-sm">
                  We are launching something and it’s important that everyone’s
                  aware.
                </p>
                <p className="text-[#838B9E] text-[12px] leading-4">
                  1 day ago
                </p>
              </div>
            </div>
          </div>
          <div className="mb-[120px]">
            <div className="flex items-center justify-between mb-[30px]">
              <h1 className="font-semibold text-[25px] leading-7">
                Previously projects by John Doe{" "}
              </h1>
              <p className="text-[#6398FE] text-xs font-medium cursor-pointer">
                All project (2)
              </p>
            </div>
            <div className="flex">
              <div className="rounded-[12px] border border-[#E3E4EA] max-w-[380px] mr-[15px]">
                <div className="relative">
                  <img className="rounded-t-xl" src={cover1} alt="cover" />
                  <p className="absolute text-[8px] leading-3  top-[12px] right-[12px] bg-[#D4EAE0] rounded-md py-[2px] px-1">
                    Сompleted
                  </p>
                </div>
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
              </div>
              <div className="rounded-[12px] border border-[#E3E4EA] max-w-[380px] ml-[15px]">
                <div className="relative">
                  <img className="rounded-t-xl" src={cover2} alt="cover" />
                  <p className="absolute text-[8px] leading-3  top-[12px] right-[12px] bg-[#D4EAE0] rounded-md py-[2px] px-1">
                    Сompleted
                  </p>
                </div>
                <div className="px-5 pb-5 pt-3">
                  <h1 className="font-semibold text-sm mb-3">
                    The standard Lorem Ipsum 2{" "}
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
              </div>
            </div>
          </div>
        </div>

        <aside className="w-1/3 ml-[30px]">
          <div className="flex flex-wrap flex-col">
            <div className="mb-[30px]">
              <div className="flex flex-wrap w-full bg-[#FCFCFC] p-[30px] relative rounded-xl border-solid border-[1px] border-[#E3E4EA]">
                <div className="text-center relative z-10 w-full">
                  <p className="text-start leading-[22px] text-[16px] font-semibold text-xl">
                    Keep your project up to date
                  </p>
                  <p className="text-start text-[#838B9E] text-sm py-6">
                    Let your contributors know about your project and progress.
                  </p>
                  <button
                    type="button"
                    className="text-white bg-gradient-to-br from-[#30CFF2] to-[#6792FF] hover:bg-gradient-to-br font-medium rounded-xl text-xs px-[29px] py-[8px] text-center"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
            <div className="mb-[30px]">
              <div className="flex flex-wrap w-full bg-[#FCFCFC] p-[30px] relative rounded-xl  max-h-[178px] border border-[#E3E4EA] border-solid">
                <div className="relative z-10 w-full">
                  <h2 className="text-xl font-semibold text-[#68AB8F] mb-[6px]">
                    10,000 $NEAR
                  </h2>
                  <p className="text-[12px] text-[#838B9E] leading-4">
                    Matching pool
                  </p>
                  <div className="flex flex-row mt-6">
                    <div className="flex flex-column w-1/2">
                      <div>
                        <p className="text-[20px] font-semibold leading-6 mb-[6px]">
                          42,245
                        </p>
                        <p className="text-xs text-[#838B9E]">Votes received</p>
                      </div>
                    </div>
                    <div className="flex flex-column w-1/2">
                      <div>
                        <p className="text-[20px] font-semibold leading-6 mb-[6px]">
                          75.13 $NEAR
                        </p>
                        <p className="text-xs text-[#838B9E]">
                          Community contribution
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-[30px]">
              <div className="flex flex-wrap w-full bg-[#F3EFE8] p-[30px] relative rounded-xl">
                <div className="w-full">
                  <h2 className="font-semibold text-[16px] leading-[22px] mb-6">
                    Milestones
                  </h2>
                  <div className="pb-[18px] border-b border-b-[#838B9E] mb-[18px]">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold text-[16px] leading-[22px] mb-[6px]">
                          Milestone One
                        </h3>
                        <p className="text-xs color-[#838B9E]">04/24/2022</p>
                      </div>
                      <div className="flex flex-col justify-end items-end">
                        <h3 className="font-semibold text-[16px] leading-[22px] mb-[6px]">
                          2.00 $NEAR
                        </h3>
                        <p className="text-xs color-[#838B9E]">0</p>
                      </div>
                    </div>
                  </div>
                  <div className="pb-[18px] border-b border-b-[#838B9E] mb-[18px]">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold text-[16px] leading-[22px] mb-[6px]">
                          Milestone Two
                        </h3>
                        <p className="text-xs color-[#838B9E]">07/22/2022</p>
                      </div>
                      <div className="flex flex-col justify-end items-end">
                        <h3 className="font-semibold text-[16px] leading-[22px] mb-[6px]">
                          222.00 $NEAR
                        </h3>
                        <p className="text-xs color-[#838B9E]">0</p>
                      </div>
                    </div>
                  </div>
                  <div className="pb-[18px] border-b border-b-[#838B9E] mb-[18px]">
                    <div>
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-semibold text-[16px] leading-[22px] mb-[6px]">
                            Expanded Milestone
                          </h3>
                          <p className="text-xs color-[#838B9E]">09/12/2022</p>
                        </div>
                        <div className="flex flex-col justify-end items-end">
                          <h3 className="font-semibold text-[16px] leading-[22px] mb-[6px]">
                            3.00 $NEAR
                          </h3>
                          <p className="text-xs color-[#838B9E]">0</p>
                        </div>
                      </div>
                      <div className="py-[6px] px-3 bg-[#FCFCFC] rounded mt-3">
                        A paragraph explaining how this group will publicly
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold text-[16px] leading-[22px] mb-[6px]">
                          Final milestone
                        </h3>
                        <p className="text-xs color-[#838B9E]">12/12/2022</p>
                      </div>
                      <div className="flex flex-col justify-end items-end">
                        <h3 className="font-semibold text-[16px] leading-[22px] mb-[6px]">
                          222.00 $NEAR
                        </h3>
                        <p className="text-xs color-[#838B9E]">0</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-[30px]">
              <div className="flex flex-wrap w-full bg-[#FCFCFC] p-[30px] relative rounded-xl border-solid border-[1px] border-[#E3E4EA]">
                <div className="w-full">
                  <h2 className="font-semibold text-[16px] leading-[22px] mb-6">
                    Latest Contributions
                  </h2>
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex">
                        <img
                          className="mr-3"
                          src={contributor1}
                          alt="contributor"
                        />
                        <div className="">
                          <h3 className="text-[#6398FE] font-medium text-[12px] leading-[16px]">
                            @Ylonan
                          </h3>
                          <p className="text-[#838B9E] text-[10px] leading-[14px]">
                            10 min ago
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-[#68AB8F] text-[12px] leading-[16px]">
                          5 $NEAR
                        </p>
                        <p className="text-[#838B9E] text-[10px] leading-[14px]">
                          ≈ 50 USD
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex">
                        <img
                          className="mr-3"
                          src={contributor2}
                          alt="contributor"
                        />
                        <div className="">
                          <h3 className="text-[#6398FE] font-medium text-[12px] leading-[16px]">
                            @Ston
                          </h3>
                          <p className="text-[#838B9E] text-[10px] leading-[14px]">
                            2 hours ago
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-[#68AB8F] text-[12px] leading-[16px]">
                          15 $NEAR
                        </p>
                        <p className="text-[#838B9E] text-[10px] leading-[14px]">
                          ≈ 150 USD
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex">
                        <img
                          className="mr-3"
                          src={contributor3}
                          alt="contributor"
                        />
                        <div className="">
                          <h3 className="text-[#6398FE] font-medium text-[12px] leading-[16px]">
                            @Dli
                          </h3>
                          <p className="text-[#838B9E] text-[10px] leading-[14px]">
                            1 day ago
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-[#68AB8F] text-[12px] leading-[16px]">
                          50 $NEAR
                        </p>
                        <p className="text-[#838B9E] text-[10px] leading-[14px]">
                          ≈ 500 USD
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex">
                        <img
                          className="mr-3"
                          src={contributor4}
                          alt="contributor"
                        />
                        <div className="">
                          <h3 className="text-[#6398FE] font-medium text-[12px] leading-[16px]">
                            @Kuberan
                          </h3>
                          <p className="text-[#838B9E] text-[10px] leading-[14px]">
                            15 days ago
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-[#68AB8F] text-[12px] leading-[16px]">
                          1 $NEAR
                        </p>
                        <p className="text-[#838B9E] text-[10px] leading-[14px]">
                          ≈ 10 USD
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex">
                        <img
                          className="mr-3"
                          src={contributor5}
                          alt="contributor"
                        />
                        <div className="">
                          <h3 className="text-[#6398FE] font-medium text-[12px] leading-[16px]">
                            @Ihantusty
                          </h3>
                          <p className="text-[#838B9E] text-[10px] leading-[14px]">
                            1 week ago
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-[#68AB8F] text-[12px] leading-[16px]">
                          1999 $NEAR
                        </p>
                        <p className="text-[#838B9E] text-[10px] leading-[14px]">
                          ≈ 19,990 USD
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-wrap w-full bg-[#FCFCFC] p-[30px] relative rounded-xl border-solid border-[1px] border-[#E3E4EA]">
                <div className="flex justify-between items-center w-full">
                  <h1 className="font-semibold text-[16px] leading-[22px]">
                    Team Information
                  </h1>
                  <div className="text-[10px] leading-[14px] bg-[#D4EAE0] rounded-md p-1">
                    Verified
                  </div>
                </div>
                <div className="my-6 text-[ #838B9E] text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
                <div className="flex">
                  <img src={user} alt="user" />
                  <div className="ml-3">
                    <h3 className="font-medium text-sm">John Doe</h3>
                    <p className="text-[#6398FE] font-medium text-[12px] leading-[16px]">
                      @Xareral
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
      <Footer />
    </>
  );
};
