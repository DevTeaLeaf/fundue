import React from "react";

import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";

import arrow from "../../../assets/img/arrow.png";
import { Link } from "react-router-dom";

import { Nav } from "../ui/Nav";
import { Input } from "../ui/Input";
import { Description } from "../ui/Description";

import cloud from "../../../assets/img/apply/cloud.png";
import step from "../../../assets/img/apply/step2.png";

export const Step2 = () => {
  return (
    <>
      <Header isAuth="true" />
      <div className="min-container mx-auto">
        <Nav />
        <div className="max-w-[790px]">
          <img
            src={step}
            alt="steps"
            className="hidden md:flex my-[30px] ml-[50px]"
          />
          <div className="p-[30px] border border-[#E3E4EA] rounded-xl mb-[30px]">
            <div className="mb-6">
              <p className="text-xs text-[#838B9E] mb-[6px]">Stеp 2 of 4</p>
              <h3 className="font-semibold text-[18px] leading-5">Vision</h3>
            </div>
            <div className="mb-6">
              <Description />
            </div>
            <div className="mb-6">
              <h3 className="font-medium text-sm mb-[6px]">Cover</h3>
              <div className="bg-[#E3E4EA] rounded-xl">
                <div className="p-[30px]">
                  <h3 className="font-medium text-[14px] leading-5 flex justify-center items-center">
                    Upload your image
                  </h3>
                  <div className="mt-5">
                    <p className="text-[#838B9E] text-[14px] leading-5 mb-[30px] flex justify-center items-center">
                      PNG, JPG and GIF files are allowed
                    </p>
                    <div className="rounded-xl bg-[#FCFCFC] w-full">
                      <div className="p-[30px] flex flex-col justify-center items-center">
                        <img className="mb-7" src={cloud} alt="cloud" />
                        <p className="text-[#838B9E] text-[14px] leading-5">
                          Drag and drop or browse to choose a file
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-6">
                <Input text="Github" />
              </div>
              <div className="mb-6">
                <Input text="Telegram" />
              </div>
              <div className="mb-6">
                <Input text="Twitter" />
              </div>
              <div className="mb-6">
                <Input text="Discord" />
              </div>
              <Input text="Website" />
            </div>
          </div>
          <div className="flex justify-center items-center mb-[48px] md:mb-[150px]">
            <Link
              className="cursor-pointer flex items-center pr-[15px]"
              to="/apply/step-1"
            >
              <img src={arrow} alt="arrow" />
              <p className="text-[#6398FE] text-xs font-medium">Back</p>
            </Link>
            <Link
              className="cursor-pointer flex items-center pl-[15px]"
              to="/apply/step-3"
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
