import React from "react";

import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";

import arrow from "../../../assets/img/arrow.png";
import { Link } from "react-router-dom";

import { Nav } from "../ui/Nav";
import { Input } from "../ui/Input";
import step from "../../../assets/img/apply/step1.png";

export const Step1 = () => {
  return (
    <>
      <Header isAuth="true" />
      <div className="min-container mx-auto">
        <Nav />
        <div className="max-w-[790px]">
          <img src={step} alt="steps" className="my-[30px] ml-[50px]" />
          <div className="p-[30px] border border-[#E3E4EA] rounded-xl mb-[30px]">
            <div className="mb-6">
              <p className="text-xs text-[#838B9E] mb-[6px]">Stеp 1 of 4</p>
              <h3 className="font-semibold text-[18px] leading-5">
                Discovery setup
              </h3>
            </div>
            <div>
              <div className="mb-6">
                <Input text="Title" />
              </div>
              <div className="mb-6">
                <Input text="Tags" />
              </div>
              <div>
                <Input text="Team" />
                <div className="flex border-[1px] rounded-[14px]">
                  <button className="flex items-center justify-center py-3 pl-6 pr-3">
                    <svg
                      className="w-5 h-5 text-gray-600"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
                    </svg>
                  </button>
                  <input
                    type="text"
                    className="py-3 pl-6 border border-[#E3E4EA] rounded-xl outline-none w-full max-h-11 border-l-0 "
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mb-[150px]">
            <div className="opacity-20 flex items-center pr-[15px]">
              <img src={arrow} alt="arrow" />
              <p className="text-[#6398FE] text-xs font-medium">Back</p>
            </div>
            <Link
              className="cursor-pointer flex items-center pl-[15px]"
              to="/apply/step-2"
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
