import React from "react";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import "./home.css";

export const Home = () => {
  return (
    <div>
      <Header isAuth={true} />
      <div className="home-wrapper h-[100vh] md:h-full">
        <div className="container mx-auto flex justify-center 2xl:justify-between items-center flex-col 2xl:flex-row">
          <div className="text-white mt-[100px] 2xl:mt-0 pl-5 lg:pl-[140px]">
            <h1 className="font-semibold text-[32px] leading-9 md:text-5xl mb-8">
              Discover and Fund Public Goods
            </h1>
            <p className="font-semibold text-[20px] leading-6 md:text-2xl">
              Fundue sustain projects with Quadratic Funding
            </p>
          </div>
          <section>
            <div className="container py-12 md:px-5 md:py-24 mx-auto flex flex-wrap">
              <div className="lg:w-2/3 cardsWrapper mx-auto">
                <div className="hidden md:flex flex-wrap w-full bg-gray-100 p-7 relative mb-[30px] rounded-xl ">
                  <div className="w-full flex items-center flex-col">
                    <div className="pb-6">
                      <h2 className="font-semibold text-2xl pb-5">
                        The standard Round 3
                      </h2>
                      <p className="font-normal text-sm text-[#838B9E]">
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation veniam consequat sunt nostrud
                        amet.
                      </p>
                    </div>
                    <div className="pb-6">
                      <h5 className="font-semibold text-base pb-5">
                        Amet minim mollit non
                      </h5>
                      <ul className="font-normal text-sm text-[#838B9E] list-disc pl-5">
                        <li className="mb-1">
                          <div></div>
                          <p>
                            Exercitation veniam consequat sunt nostrud amet.
                            Velit officia consequat duis enim velit mollit.
                          </p>
                        </li>
                        <li className="mb-1">
                          Velit officia consequat duis enim velit mollit.
                        </li>
                        <li className="mb-1">
                          Amet minim mollit non deserunt ullamco est
                          Exercitation veniam consequat sunt nostrud amet.
                        </li>
                      </ul>
                    </div>
                    <a
                      href="#"
                      className="font-normal text-xs text-[#6398FE] inline-flex  text-center"
                    >
                      More
                    </a>
                  </div>
                </div>
                <div className="flex flex-wrap">
                  <div className="w-full md:w-1/2 md:pr-[15px] h-[200px]">
                    <div className="flex flex-wrap w-full bg-gray-100 py-[26px] px-[30px] relative rounded-xl">
                      <div className="text-center relative z-10 w-full">
                        <h2 className="  font-normal text-sm text-[#838B9E]">
                          Until the end of Request accept
                        </h2>
                        <p className="leading-relaxed mt-5 font-normal text-xl mb-5">
                          8d : 12h : 34m : 20s
                        </p>
                        <p className="text-center text-[#838B9E] text-xs mb-2">
                          Apply for the Round
                        </p>
                        <Button text="Connect Wallet" p="px-[21px] py-[9px]" />
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:flex pl-[15px] w-1/2">
                    <div className="flex flex-wrap w-full bg-gray-100 py-[26px] px-[30px] relative rounded-xl  h-[200px]">
                      <div className="relative z-10 w-full">
                        <h2 className="text-xl font-bold title-font text-[#68AB8F] mt-3 mb-1">
                          10,000 $NEAR
                        </h2>
                        <p className="leading-relaxed text-sm text-[#838B9E] mb-5">
                          Matching pool
                        </p>
                        <div className="flex flex-row">
                          <div className="flex flex-column w-1/2">
                            <div>
                              <p className="text-xl">42,245</p>
                              <p className="text-xs text-[#838B9E]">
                                Votes received
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-column w-1/2">
                            <div>
                              <p className="text-xl">75.13 $NEAR</p>
                              <p className="text-xs text-[#838B9E]">
                                Community contribution
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="hidden md:block">
        <Footer />
      </div>
    </div>
  );
};
