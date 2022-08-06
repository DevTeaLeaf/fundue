import React from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import arrow from "../../assets/img/arrow.png";

export const EditProfil = () => {
  return (
    <>
      <Header isAuth={true} />
      <div className="min-container mx-auto">
        <div className="flex items-end justify-end my-[30px] mr-[30px] cursor-pointer">
          <img src={arrow} alt="arrow" />
          <p className="text-[#6398FE] font-medium text-xs">Back to Profile</p>
        </div>
        <div className="mb-[4px] p-[30px]">
          <div className="flex items-center justify-between text-3xl font-bold mb-[30px]">
            Edit Profil
          </div>
          <div className="flex items-start">
            <div className="p-[30px] bg-[#E8E8FD] rounded-[12px] max-w-[790px] mr-[15px] w-2/3">
              <h3 className="font-semibold text-[24px] leading-7 mb-6">
                General information
              </h3>
              <div>
                <div>
                  <p className="text-sm font-medium mb-[6px]">Name</p>
                  <input
                    className="outline-none w-full rounded-xl h-[44px] pl-[24px]"
                    type="text"
                  />
                </div>
                <div className="my-6">
                  <p className="text-sm font-medium mb-[6px]">Nickname</p>
                  <input
                    className="outline-none w-full rounded-xl h-[44px] pl-[24px]"
                    type="text"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium mb-[6px]">About me</p>
                  <textarea
                    className="outline-none w-full rounded-xl min-h-[104px] p-[24px]"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="p-[30px] bg-[#F3EFE8] rounded-[12px] max-w-[380px] ml-[15px] w-1/3">
              <h3 className="font-semibold text-[24px] leading-7 mb-6">
                Social Network
              </h3>
              <div>
                <div className="mb-6">
                  <p className="text-sm font-medium mb-[6px]">Facebook</p>
                  <input
                    className="outline-none w-full rounded-xl h-[44px] pl-[24px]"
                    type="text"
                  />
                </div>
                <div className="mb-6">
                  <p className="text-sm font-medium mb-[6px]">Twitter</p>
                  <input
                    className="outline-none w-full rounded-xl h-[44px] pl-[24px]"
                    type="text"
                  />
                </div>
                <div className="mb-6">
                  <p className="text-sm font-medium mb-[6px]">Instagram</p>
                  <input
                    className="outline-none w-full rounded-xl h-[44px] pl-[24px]"
                    type="text"
                  />
                </div>
                <div className="mb-6">
                  <p className="text-sm font-medium mb-[6px]">Github</p>
                  <input
                    className="outline-none w-full rounded-xl h-[44px] pl-[24px]"
                    type="text"
                  />
                </div>
                <div className="mb-6">
                  <p className="text-sm font-medium mb-[6px]">Gitlab</p>
                  <input
                    className="outline-none w-full rounded-xl h-[44px] pl-[24px]"
                    type="text"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium mb-[6px]">Website</p>
                  <input
                    className="outline-none w-full rounded-xl h-[44px] pl-[24px]"
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mb-[58px]">
          <Button text="Save" p="px-[60px] py-[8px]" />
        </div>
      </div>
      <Footer />
    </>
  );
};
