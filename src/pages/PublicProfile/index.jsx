import React from "react";

import "./public.css";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import camera from "../../assets/img/camera.png";
import personalAva from "../../assets/img/personalAva.png";

import facebook from "../../assets/img/links/facebook.png";
import twitter from "../../assets/img/links/twitter.png";
import instagram from "../../assets/img/links/instagram.png";
import github from "../../assets/img/links/github.png";
import gitlab from "../../assets/img/links/gitlab.png";
import idk from "../../assets/img/links/idk.png";

import arrow from "../../assets/img/arrow.png";
import arrowUp from "../../assets/img/arrowUp.png";
import roundsAvatar from "../../assets/img/roundsAvatar.png";

export const PublicProfile = () => {
  return (
    <>
      <Header isAuth={true} />
      <div className="public-wrapper h-[280px] mb-[30px]"></div>
      <div className="min-container mx-auto flex items-center justify-between mb-6">
        <div className="flex">
          <div className="relative mt-[-60px]">
            <img src={personalAva} alt="ava" />
            <img
              className="cursor-pointer absolute bottom-[8px] right-[8px]"
              src={camera}
              alt="camera"
            />
          </div>
          <div className="ml-[30px] flex justify-start items-start flex-col">
            <div className="flex items-center">
              <h1 className="font-semibold text-[24px] leading-7">John Doe</h1>
              <p className="text-[#838B9E] text-xs mx-3">My Wallet:</p>
              <p className="text-xs">0x9f6D...F4BC</p>
            </div>
            <div className="text-[#838B9E] text-sm mt-[10px]">
              @JhoneDoe1212
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end justify-end">
          <div className="flex items-end justify-end mb-[35px]">
            <a className="mr-[28px]" href="#">
              <img src={facebook} alt="facebook" />
            </a>
            <a className="mr-[28px]" href="#">
              <img src={twitter} alt="twitter" />
            </a>
            <a className="mr-[28px]" href="#">
              <img src={instagram} alt="instagram" />
            </a>
            <a className="mr-[28px]" href="#">
              <img src={github} alt="github" />
            </a>
            <a className="mr-[28px]" href="#">
              <img src={gitlab} alt="gitlab" />
            </a>
            <a href="#">
              <img src={idk} alt="idk" />
            </a>
          </div>
        </div>
      </div>
      <div className="min-container mx-auto mb-7">
        <p className="max-w-[790px] text-[#838B9E] text-xs flex flex-start justify-start">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit. Exercitation veniam consequat sunt nostrud
          amet.
        </p>
      </div>
      <div className="min-container mx-auto mb-[120px]">
        <div className="pb-[3px] flex border-solid border-b-[1px] border-[#E3E4EA] max-w-[790px] mb-[30px]">
          <p className="text-[#6398FE] text-[16px] leading-[22px] font-medium pb-2 border-solid border-b-2 border-[#6398FE] cursor-pointer">
            Projects
          </p>
          <p className="text-[16px] leading-[22px] mx-10 cursor-pointer">
            Contribution
          </p>
          <p className="text-[16px] leading-[22px] cursor-pointer">
            Supported{" "}
          </p>
        </div>
        <div className="max-w-[790px]">
          <div className="flex justify-between items-center mb-6">
            <div className="flex justify-between items-center">
              <p className="text-[#838B9E] text-xs mr-3">Sort by: </p>
              <div className="flex justify-between items-center">
                <p className="text-sm mr-[6px]">Finished</p>
                <img src={arrow} alt="sort" className="rotate-[-90deg]" />
              </div>
            </div>
          </div>
          <div>
            <div className="overflow-x-auto relative">
              <table className="w-full text-sm text-left">
                <thead className="text-xs border-b">
                  <tr>
                    <th scope="col" className="px-6"></th>
                    <th scope="col" className="px-6"></th>
                    <th scope="col" className="py-[6px] px-6">
                      <div className="flex items-center">
                        <p className="text-[#838B9E] text-xs mr-[6px]">Votes</p>
                        <img src={arrowUp} alt="up" />
                      </div>
                    </th>
                    <th scope="col" className="py-[6px] px-6">
                      <div className="flex items-center">
                        <p className="text-[#838B9E] text-xs mr-[6px]">
                          Matching Pool
                        </p>
                        <img src={arrowUp} alt="up" />
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
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
                        <div className="text-sm text-[#68AB8F] font-medium">
                          20,000 $NEAR
                        </div>
                        <div className="text-[10px] leading-[14px] text-[#838B9E]">
                          ≈ 200,000 USD
                        </div>
                      </div>
                    </td>
                  </tr>
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
                      </div>
                    </td>
                    <td className="py-[12px]  px-[30px] text-sm">4,096</td>
                    <td className="py-[12px] px-[30px] ">
                      <div>
                        <div className="text-sm text-[#68AB8F] font-medium">
                          20,000 $NEAR
                        </div>
                        <div className="text-[10px] leading-[14px] text-[#838B9E]">
                          ≈ 200,000 USD
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
