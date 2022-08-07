import React from "react";

import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";

import arrow from "../../../assets/img/arrow.png";
import { Link } from "react-router-dom";

import { Nav } from "../ui/Nav";
import { Input } from "../ui/Input";

import step from "../../../assets/img/apply/step4.png";

export const Step4 = () => {
  return (
    <>
      <Header isAuth="true" />
      <div className="min-container mx-auto">
        <Nav />
        <div className="max-w-[790px]">
          <img src={step} alt="steps" className="my-[30px] ml-[50px]" />
          <div className="p-[30px] border border-[#E3E4EA] rounded-xl mb-[30px]">
            <div className="mb-6">
              <p className="text-xs text-[#838B9E] mb-[6px]">Stеp 4 of 4</p>
              <h3 className="font-semibold text-[18px] leading-5">
                Milestones
              </h3>
            </div>
            <div>
              <h3 className="font-medium text-sm mb-6">Milestone One</h3>
              <div className="mb-6">
                <Input text="Title" />
              </div>
              <div className="mb-6">
                <Input text="Description" />
              </div>
              <div className="mb-6 flex justify-between items-center">
                <div>
                  <h3 className="text-sm font-medium mb-[6px]">Data</h3>
                  <input
                    type="text"
                    className="py-3 max-w-[240px] pl-6 border border-[#E3E4EA] rounded-xl outline-none w-full max-h-11 mb-[6px]"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-[6px]">Amount</h3>
                  <div className="flex items-center">
                    <input
                      type="text"
                      className="py-3 max-w-[204px] px-[87px] border border-[#E3E4EA] rounded-xl outline-none w-full max-h-11 mb-[6px]"
                    />
                    <p className="font-medium text-sm ml-[6px]">$NEAR</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-sm mb-6">Milestone Two</h3>
              <div className="mb-6">
                <Input text="Title" />
              </div>
              <div className="mb-6">
                <Input text="Description" />
              </div>
              <div className=" flex justify-between items-center">
                <div>
                  <h3 className="text-sm font-medium mb-[6px]">Data</h3>
                  <input
                    type="text"
                    className="py-3 max-w-[240px] pl-6 border border-[#E3E4EA] rounded-xl outline-none w-full max-h-11 mb-[6px]"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-[6px]">Amount</h3>
                  <div className="flex items-center">
                    <input
                      type="text"
                      className="py-3 max-w-[204px] px-[87px] border border-[#E3E4EA] rounded-xl outline-none w-full max-h-11 mb-[6px]"
                    />
                    <p className="font-medium text-sm ml-[6px]">$NEAR</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mb-[150px]">
            <Link
              className="cursor-pointer flex items-center pr-[15px]"
              to="/apply/step-3"
            >
              <img src={arrow} alt="arrow" />
              <p className="text-[#6398FE] text-xs font-medium">Back</p>
            </Link>
            <div className="opacity-20 flex items-center pl-[15px]">
              <p className="text-[#6398FE] text-xs font-medium">Next</p>
              <img src={arrow} alt="arrow" className="rotate-180" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
