import React from "react";
import "./round.css";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import arrow from "../../assets/img/arrow.png";
import arrowUp from "../../assets/img/arrowUp.png";
import roundsAvatar from "../../assets/img/roundsAvatar.png";

export const Round = () => {
  return (
    <>
      <Header isAuth={true} />
      <div className="round-wrapper">
        <div className="min-container mx-auto">
          <div className="flex items-center justify-between py-[161px]">
            <h1 className="text-5xl font-semibold text-[#FCFCFC]">Rounds</h1>
          </div>
        </div>
      </div>
      <div className="min-container mx-auto">
        <div className="flex items-center justify-between my-[30px]">
          <div className="flex items-center cursor-pointer">
            <p className="text-[#6398FE] mr-1">Home /</p>
            <p className="text-[#6E768C]">Rounds</p>
          </div>
          <div className="flex items-center cursor-pointer">
            <img src={arrow} alt="arrow" />
            <p className="text-[#6398FE] font-medium text-xs">
              Back to Home page
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mb-[30px]">
          <div className="text-3xl font-bold">Rounds</div>
        </div>
        <div className="flex flex-wrap mb-[30px]">
          <div className="pr-[15px] max-w-[790px] w-2/3">
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
        <div>
          <div className="flex justify-between items-center mb-6">
            <div className="flex justify-between items-center">
              <p className="text-[#838B9E] text-xs mr-3">Sort by: </p>
              <div className="flex justify-between items-center">
                <p className="text-sm mr-[6px]">Finished</p>
                <img src={arrow} alt="sort" className="rotate-[-90deg]" />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#838B9E] text-xs mr-3">All project:</p>
              <p className="text-sm font-medium">10</p>
            </div>
          </div>
          <div className="mb-[45px]">
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
                </tbody>
              </table>
            </div>
          </div>
          <div className="text-sm flex items-center justify-center mb-[117px]">
            <p className="mr-[21px] text-[#4c89fb] bg-[#abc7fb] py-[2px] px-2 rounded-full cursor-pointer">
              1
            </p>
            <p className="mr-[30px] cursor-pointer">2</p>
            <p className="mr-[30px] cursor-pointer">3</p>
            <p className="mr-[30px] cursor-pointer">{">"}</p>
            <p className="mr-[30px] cursor-pointer">{">>"}</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
