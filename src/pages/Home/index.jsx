import React from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import "./home.css";

export const Home = () => {
  return (
    <div>
      <Header isAuth={true} />
      <div className="home-wrapper">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white  pl-[140px]">
            <h1 className="font-semibold text-5xl mb-8">
              Discover and Fund Public Goods
            </h1>
            <p className="font-semibold text-2xl">
              Fundue sustain projects with Quadratic Funding
            </p>
          </div>
          <section>
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
              <div className="lg:w-2/3 cardsWrapper mx-auto">
                <div className="flex flex-wrap w-full bg-gray-100 p-7 relative mb-[30px] rounded-xl ">
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
                  <div className="w-1/2 pr-[15px] h-[200px]">
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
                        <button
                          type="button"
                          className="text-white bg-gradient-to-br from-[#30CFF2] to-[#6792FF] hover:bg-gradient-to-br font-medium rounded-xl text-xs px-[21px] py-[9px] text-center"
                        >
                          Connect Wallet
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="pl-[15px] w-1/2">
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
      <Footer />
    </div>
  );
};
