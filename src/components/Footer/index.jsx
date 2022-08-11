import React from "react";

import footerLogo from "../../assets/img/footerLogo.png";
import telegram from "../../assets/img/contacts/telegram.png";
import twitter from "../../assets/img/contacts/twitter.png";
import discord from "../../assets/img/contacts/discord.png";

import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <nav className="bg-black hidden md:flex">
        <div className="container flex justify-between items-start mx-auto px-[90px] py-[36px] text-white">
          <div className="flex justify-between items-start  min-w-[500px]">
            <Link to="/" className="cursor-pointer">
              <img className="pb-3" src={footerLogo} alt="Logo" />
              <p className="font-normal text-xs">© 2022 Fundue</p>
            </Link>
            <div className="flex flex-wrap fnav1 justify-between ">
              <div className="flex flex-wrap items-start flex-col pr-[40px]">
                <Link className="font-normal pb-1.5 text-sm" to="/rounds">
                  Rounds
                </Link>
                <Link className="font-normal text-sm" to="/discover">
                  Discover
                </Link>
              </div>
              <div className="flex flex-wrap justify-between items-start flex-col pl-[40px]">
                <Link className="font-normal text-xs" to="/terms">
                  Terms
                </Link>
                <Link className="py-1.5 font-normal text-xs" to="*">
                  Privacy
                </Link>
                <Link className="font-normal text-xs" to="/faq">
                  FAQ
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-between fnav2">
            <div className="flex flex-wrap items-start flex-col pr-[100px]">
              <Link className="pb-1.5 font-normal text-xs" to="*">
                NEAR
              </Link>
              <Link className="font-normal text-xs" to="*">
                Learn NEAR Club
              </Link>
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
      <nav className="flex justify-center items-center md:hidden">
        <p className="text-[10px] leading-[14px] text-[#6E768C] mb-3">
          © 2022 Fundue
        </p>
      </nav>
    </footer>
  );
};
