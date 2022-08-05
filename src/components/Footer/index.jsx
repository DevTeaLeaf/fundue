import React from "react";

import footerLogo from "../../assets/img/footerLogo.png";
import telegram from "../../assets/img/contacts/telegram.png";
import twitter from "../../assets/img/contacts/twitter.png";
import discord from "../../assets/img/contacts/discord.png";

export const Footer = () => {
  return (
    <footer>
      <nav className=" bg-black">
        <div className="container flex justify-between items-start mx-auto px-[90px] py-[36px] text-white">
          <div className="flex justify-between items-start  min-w-[500px]">
            <div>
              <img className="pb-3" src={footerLogo} alt="Logo" />
              <p className="font-normal text-xs">© 2022 Fundue</p>
            </div>
            <div className="flex flex-wrap fnav1 justify-between ">
              <div className="flex flex-wrap items-start flex-col pr-[40px]">
                <a className="font-normal pb-1.5 text-sm" href="#">
                  Rounds
                </a>
                <a className="font-normal text-sm" href="#">
                  Discover
                </a>
              </div>
              <div className="flex flex-wrap justify-between items-start flex-col pl-[40px]">
                <a className="font-normal text-xs" href="#">
                  Terms
                </a>
                <a className="py-1.5 font-normal text-xs" href="#">
                  Privacy
                </a>
                <a className="font-normal text-xs" href="#">
                  FAQ
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-between fnav2">
            <div className="flex flex-wrap items-start flex-col pr-[100px]">
              <a className="pb-1.5 font-normal text-xs" href="#">
                NEAR
              </a>
              <a className="font-normal text-xs" href="#">
                Learn NEAR Club
              </a>
            </div>
            <div>
              <a href="#" className="flex flex-wrap items-center">
                <img className="pr-[6px]" src={telegram} alt="telegram" />
                <p className="font-normal text-sm">Telegram</p>
              </a>
              <a href="#" className="py-[12px] flex flex-wrap items-center">
                <img className="pr-[6px]" src={twitter} alt="twitter" />
                <p className="font-normal text-sm">Twitter</p>
              </a>
              <a className="flex flex-wrap items-center" href="#">
                <img className="pr-[6px]" src={discord} alt="discord" />
                <p className="font-normal text-sm">Discord</p>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </footer>
  );
};
