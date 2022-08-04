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
              <div className="lg:w-2/3 mx-auto">
                <div className="flex flex-wrap w-full bg-gray-100 p-7 relative mb-[30px] rounded-xl">
                  <div className="w-full">
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
                      <ul className="font-normal text-sm text-[#838B9E]">
                        <li>
                          <div></div>
                          <p>
                            Exercitation veniam consequat sunt nostrud amet.
                            Velit officia consequat duis enim velit mollit.
                          </p>
                        </li>
                        <li>Velit officia consequat duis enim velit mollit.</li>
                        <li>
                          Amet minim mollit non deserunt ullamco est
                          Exercitation veniam consequat sunt nostrud amet.
                        </li>
                      </ul>
                    </div>
                    <a
                      href="#"
                      className="font-normal text-xs text-[#6398FE] inline-flex items-center"
                    >
                      More
                    </a>
                  </div>
                </div>
                <div className="flex flex-wrap">
                  <div className="w-1/2 pr-[15px]">
                    <div className="flex flex-wrap w-full bg-gray-100 py-[26px] px-[30px] relative rounded-xl">
                      <div className="text-center relative z-10 w-full">
                        <h2 className="text-xl text-gray-900 font-medium title-font mb-2">
                          Shooting Stars
                        </h2>
                        <p className="leading-relaxed">
                          Skateboard +1 mustache fixie paleo lumbersexual.
                        </p>
                        <a className="mt-3 text-indigo-500 inline-flex items-center">
                          Learn More
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="pl-[15px] w-1/2">
                    <div className="flex flex-wrap w-full bg-gray-100 py-[26px] px-[30px] relative rounded-xl">
                      <div className="text-center relative z-10 w-full">
                        <h2 className="text-xl text-gray-900 font-medium title-font mb-2">
                          Shooting Stars
                        </h2>
                        <p className="leading-relaxed">
                          Skateboard +1 mustache fixie paleo lumbersexual.
                        </p>
                        <a className="mt-3 text-indigo-500 inline-flex items-center">
                          Learn More
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokelidth="2"
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
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
