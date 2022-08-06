import React from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import { Button } from "../../components/Button";

import { Row } from "./ui/Row";

export const Checkout = () => {
  return (
    <div>
      <Header isAuth={true} />
      <div className="min-container mx-auto mt-[60px] mb-[330px]">
        <div className="mb-[30px]">
          <h1 className="font-bold text-3xl">Project Cart</h1>
        </div>
        <div className="flex items-center justify-between flex-wrap">
          <div className="max-w-[790px] w-full">
            <div className="flex flex-row items-center mb-[14px]">
              <p className="text-sm font-normal text-[#838B9E] mr-3 ml-[34px]">
                Amount:
              </p>
              <p className="text-sm font-normal mr-3 rounded border-[1px] border-[#E3E4EA] w-[60px] h-[28px] flex items-center justify-center">
                4
              </p>
              <p className="text-sm font-medium mr-3">$NEAR</p>
              <p className="text-xs font-medium text-[#6398FE] self-center">
                Apply to all
              </p>
            </div>
            <div>
              <Row />
              <Row />
              <Row />
            </div>
          </div>
          <div className="bg-[#E8E8FD] rounded-xl max-w-[380px] max-h-[391px] w-full h-full">
            <div className="p-[30px]">
              <div className="mb-[26px]">
                <h1 className="font-semibold text-xl mb-3">Summary</h1>
                <div className="flex justify-between items-center">
                  <p className="text-[#838B9E] text-xs font-normal">
                    Estimated Match
                  </p>
                  <div className="text-[#68AB8F] font-normal text-sm flex justify-between items-center mr-[17px]">
                    0 $NEAR
                  </div>
                </div>
              </div>
              <div>
                <p className="text-[#838B9E] text-xs font-normal">
                  Give back to the Fandue match pool
                </p>
                <div>
                  <div className="flex items-center justify-between">
                    <div className="font-normal text-sm my-[18px] flex items-center">
                      <div className="w-10 h-7 bg-[#D7FBFE] flex items-center justify-center rounded">
                        5%
                      </div>
                      <div className="w-10 h-7 bg-[#D7FBFE] flex items-center justify-center ml-[6px] rounded">
                        10%
                      </div>
                      <div className="w-10 h-7 bg-[#D7FBFE] flex items-center justify-center ml-[6px] rounded">
                        15%
                      </div>
                      <div className="w-10 h-7 bg-[#D7FBFE] flex items-center justify-center ml-[6px] rounded">
                        0%
                      </div>
                    </div>
                    <div className="flex items-center font-normal text-sm">
                      <div className="w-10 h-7 bg-[#FCFCFC] flex items-center justify-center rounded">
                        5
                      </div>
                      <div className="ml-[6px]">%</div>
                    </div>
                  </div>
                  <div className="flex items-center flex-col text-xs font-medium">
                    <div className="flex items-center justify-between pb-[18px] min-w-full">
                      <p>Matching Pool Contribution</p>
                      <p>2.00 $NEAR</p>
                    </div>
                    <div className="flex items-center justify-between py-[18px] border-solid border-t-[1px] border-[#838B9E] min-w-full">
                      <p>Grant Contribution</p>
                      <p>6.00 $NEAR</p>
                    </div>
                    <div className="flex items-center justify-between py-[18px] border-solid border-t-[1px] border-[#838B9E] min-w-full">
                      <p>Your Total Contribution</p>
                      <p>8.00 $NEAR</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Button text="I’m Ready to Checkout" p="px-[21px] py-[9px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
