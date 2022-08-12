import React from "react";

import "./public.css";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import personalAva from "../../assets/img/personalAva.png";
import { Table } from "./ui/Table";

import facebook from "../../assets/img/links/facebook.png";
import twitter from "../../assets/img/links/twitter.png";
import instagram from "../../assets/img/links/instagram.png";
import github from "../../assets/img/links/github.png";
import gitlab from "../../assets/img/links/gitlab.png";
import idk from "../../assets/img/links/idk.png";

export const PublicProfile = () => {
  return (
    <>
      <Header isAuth={true} />
      <div className="public-wrapper max-h-[280px] mb-[30px] hidden md:block ">
        <div className="min-container mx-auto pb-3 pt-[240px] flex items-end justify-end"></div>
      </div>
      <div className="min-public-wrapper h-[90px] mt-5 block md:hidden relative">
        <div className="absolute right-5 bottom-[5px]"></div>
      </div>
      <div className="min-container mx-auto flex items-center justify-between mb-6">
        <div className="flex">
          <div className="absolute  top-[75px] left-[50%] translate-x-[-50%] md:translate-x-0 md:left-0 md:top-auto md:relative md:mt-[-60px]">
            <img src={personalAva} alt="ava" className="w-[80px] md:w-auto" />
          </div>
          <div className="ml-5 md:ml-[30px] flex justify-start items-start flex-col mt-5 md:mt-0">
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
        <div className="md:flex flex-col items-end justify-end hidden">
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
      <div className="min-container md:mx-auto mb-7 mx-5">
        <p className="max-w-[790px] text-[#838B9E] text-xs flex flex-start justify-start">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit. Exercitation veniam consequat sunt nostrud
          amet.
        </p>
      </div>
      <div className="md:hidden flex-col items-center justify-center flex mb-10">
        <div className="flex items-end justify-end">
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
      <div className="min-container mx-auto mb-12 md:mb-[120px]">
        <div className="pb-[3px] flex border-solid border-b-[1px] border-[#E3E4EA] max-w-[790px] mb-[30px] mx-5 md:mx-0">
          <p className="text-[#6398FE] text-[14px] leading-[18px] md:text-[16px] md:leading-[22px] font-medium pb-2 border-solid border-b-2 border-[#6398FE] cursor-pointer">
            Projects
          </p>
          <p className="text-[14px] leading-[18px] md:text-[16px] md:leading-[22px] mx-10 cursor-pointer">
            Contribution
          </p>
          <p className="text-[14px] leading-[18px] md:text-[16px] md:leading-[22px] cursor-pointer">
            Supported{" "}
          </p>
        </div>
        <Table />
      </div>
      <Footer />
    </>
  );
};
