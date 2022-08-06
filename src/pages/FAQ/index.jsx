import React from "react";
import "./faq.css";
import { Header } from "../../components/Header";
import { Footer } from "./ui/Footer";

import qm from "../../assets/img/qm.png";
import arrow from "../../assets/img/arrow.png";

export const FAQ = () => {
  return (
    <>
      <Header isAuth={true} />
      <div className="faq-wrapper">
        <div className="min-container mx-auto">
          <div className="flex items-center justify-between py-10">
            <h1 className="text-5xl font-semibold text-[#838B9E]">FAQ</h1>
            <img src={qm} alt="Question mark" />
          </div>
        </div>
      </div>
      <div className="min-container mx-auto">
        <div className="flex items-center justify-between my-[30px]">
          <div className="flex items-center cursor-pointer">
            <p className="text-[#6398FE] mr-1">Home /</p>
            <p className="text-[#6E768C]">FAQ</p>
          </div>
          <div className="flex items-center cursor-pointer">
            <img src={arrow} alt="arrow" />
            <p className="text-[#6398FE] font-medium text-xs">
              Back to Home page
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mb-6">
          <div className="text-3xl font-bold">FAQ</div>
          <div className="flex items-center">
            <div className="flex border-[1px] rounded-[14px]">
              <button className="flex items-center justify-center py-2 pl-6 pr-3">
                <svg
                  className="w-3 h-3 text-gray-600"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
                </svg>
              </button>
              <input
                type="text"
                className="py-[6px] outline-0 w-[76px] text-xs"
                placeholder="Search..."
              />
            </div>
          </div>
        </div>
        <div className="mb-[90px] flex items-start justify-between">
          <div className="px-[15px] py-[30px] mr-[60px]">
            <div className="font-medium text-sm pb-6">
              Lorem ipsum dolor sit amet
            </div>
            <div className="font-medium text-sm border-t-[1px] py-6">
              Consectetur adipiscing elit
            </div>
            <div className="font-medium text-sm border-t-[1px] py-6">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </div>
            <div className="text-[#6398FE] font-medium text-sm border-t-[1px] py-6">
              Vulputate eu scelerisque felis imperdiet proin fermentum leo vel
            </div>
            <div className="font-medium text-sm border-t-[1px] py-6">
              Eu volutpat odio facilisis mauris sit amet
            </div>
            <div className="font-medium text-sm border-t-[1px] py-6">
              Augue neque gravida in fermentum et sollicitudin ac
            </div>
          </div>
          <div className="p-[30px] max-w-[790px]">
            <div>
              <h1 className="text-2xl font-semibold mb-5">Lorem Ipsum </h1>
              <p className="text-[#838B9E] text-sm font-normal">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
            <div className="py-6">
              <h3 className="text-base font-semibold mb-5">
                Amet minim mollit non
              </h3>
              <ul className="font-normal text-sm text-[#838B9E] list-disc pl-5">
                <li className="mb-1">
                  <div></div>
                  <p>
                    Exercitation veniam consequat sunt nostrud amet. Velit
                    officia consequat duis enim velit mollit.
                  </p>
                </li>
                <li className="mb-1">
                  Velit officia consequat duis enim velit mollit.
                </li>
                <li className="mb-1">
                  Amet minim mollit non deserunt ullamco est Exercitation veniam
                  consequat sunt nostrud amet.
                </li>
              </ul>
            </div>
            <div className="text-[#838B9E] font-normal text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras
              tincidunt lobortis feugiat vivamus at augue eget arcu dictum.
              Magna fermentum iaculis eu non diam phasellus vestibulum lorem
              sed. In metus vulputate eu scelerisque felis imperdiet proin.
              Dolor morbi non arcu risus quis varius quam quisque. Ante metus
              dictum at tempor commodo ullamcorper. Lorem ipsum dolor sit amet
              consectetur adipiscing elit ut aliquam. Sed libero enim sed
              faucibus turpis in eu. Porttitor massa id neque aliquam vestibulum
              morbi. Ullamcorper velit sed ullamcorper morbi tincidunt ornare
              massa. Dictum fusce ut placerat orci nulla pellentesque dignissim
              enim sit. Diam vulputate ut pharetra sit amet aliquam id. Augue
              interdum velit euismod in pellentesque massa placerat duis. Nisi
              vitae suscipit tellus mauris. Sit amet massa vitae tortor
              condimentum lacinia.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
