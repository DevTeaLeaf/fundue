import React from "react";

import p1 from "../../../assets/img/p1.png";
import p2 from "../../../assets/img/p2.png";
import p3 from "../../../assets/img/p3.png";
import p4 from "../../../assets/img/p4.png";
import p5 from "../../../assets/img/p5.png";
import p6 from "../../../assets/img/p6.png";
import p7 from "../../../assets/img/p7.png";

export const OurDevs = () => {
  return (
    <>
      <div className="flex items-center justify-between flex-wrap">
        <div>
          <div className="flex flex-col ">
            <img className="w-[90px] h-[90px]" src={p1} alt="p1" />
            <h3 className="font-medium text-sm mb-1 mt-[18px]">John Doe</h3>
            <p className="text-[#6398FE] leading-4 text-[12px] font-medium">
              @Xareral
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col ">
            <img className="w-[90px] h-[90px]" src={p2} alt="p2" />
            <h3 className="font-medium text-sm mb-1 mt-[18px]">Kobe Cook</h3>
            <p className="text-[#6398FE] leading-4 text-[12px] font-medium">
              @Abebanj
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col ">
            <img className="w-[90px] h-[90px]" src={p3} alt="p3" />
            <h3 className="font-medium text-sm mb-1 mt-[18px]">
              Victor Parker
            </h3>
            <p className="text-[#6398FE] leading-4 text-[12px] font-medium">
              @Avineriei
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col ">
            <img className="w-[90px] h-[90px]" src={p4} alt="p4" />
            <h3 className="font-medium text-sm mb-1 mt-[18px]">
              Hassan Torres
            </h3>
            <p className="text-[#6398FE] leading-4 text-[12px] font-medium">
              @Wyuzana
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col ">
            <img className="w-[90px] h-[90px]" src={p5} alt="p5" />
            <h3 className="font-medium text-sm mb-1 mt-[18px]">
              Xaviero Campbell
            </h3>
            <p className="text-[#6398FE] leading-4 text-[12px] font-medium">
              @Betell
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col ">
            <img className="w-[90px] h-[90px]" src={p6} alt="p6" />
            <h3 className="font-medium text-sm mb-1 mt-[18px]">Anthony A.</h3>
            <p className="text-[#6398FE] leading-4 text-[12px] font-medium">
              @Filv
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col ">
            <img className="w-[90px] h-[90px]" src={p7} alt="p7" />
            <h3 className="font-medium text-sm mb-1 mt-[18px]">
              Aaron Gonzalez
            </h3>
            <p className="text-[#6398FE] leading-4 text-[12px] font-medium">
              @Domanere
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center align-center mt-[30px]">
        <div className="w-2 h-2 bg-[#6398FE] rounded-full cursor-pointer"></div>
        <div className="w-2 h-2 bg-[#E5E5E5] rounded-full mx-6 cursor-pointer"></div>
        <div className="w-2 h-2 bg-[#E5E5E5] rounded-full cursor-pointer"></div>
      </div>
    </>
  );
};
