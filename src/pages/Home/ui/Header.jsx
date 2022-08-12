import React from "react";
import { useState } from "react";

import logo from "../../../assets/img/logo.png";
import search from "../../../assets/img/search.png";
import cart from "../../../assets/img/cart.png";
import user from "../../../assets/img/user.png";
import down from "../../../assets/img/down.png";

import telegram from "../../../assets/img/contacts/telegram.png";
import twitter from "../../../assets/img/contacts/twitter.png";
import discord from "../../../assets/img/contacts/discord.png";

import "./header.css";

import { Link } from "react-router-dom";

export const Header = (props) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header>
      <nav className="">
        <div className="container flex flex-wrap justify-between items-center mx-auto px-[90px] h-[50px] xl:h-[72px] relative">
          <div className="hidden xl:flex justify-between items-center DESKTOP-MENU space-x-8">
            <div className="flex justify-between items-center pr-[75px] nav1">
              <Link className="pr-[15px] font-medium" to="/discover">
                Discover
              </Link>
              <Link className="pl-[15px] font-medium" to="/rounds">
                Rounds
              </Link>
            </div>
            <div className="flex justify-between items-center pl-[75px] nav2">
              <Link className="font-light pr-[15px]" to="*">
                NEAR
              </Link>
              <Link className="font-light pl-[15px]" to="*">
                Learn NEAR Club
              </Link>
            </div>
          </div>
          <a
            href="#"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex w-[136px] h-[14px] md:w-[194px] md:h-[20px]"
          >
            <Link to="/">
              <img src={logo} alt="Fundue logo" className="" />
            </Link>
          </a>
          <div className="hidden xl:flex justify-between items-center DESKTOP-MENU space-x-8">
            <div className="pr-[12px] cursor-pointer">
              <img src={search} alt="Search" />
            </div>
            {props.isAuth ? (
              <>
                <img
                  className="px-[12px] cursor-pointer"
                  src={cart}
                  alt="Cart"
                />
                <div className="flex justify-between items-center pl-[12px] cursor-pointer">
                  <Link
                    className="flex justify-between items-center"
                    to="/personalAccount"
                  >
                    <img src={user} alt="User" />
                    <p className="px-[12px]">JhoneDoe1212</p>
                  </Link>
                  <img src={down} alt="Down" />
                </div>
              </>
            ) : (
              <button
                type="button"
                className="text-white bg-gradient-to-br from-[#30CFF2] to-[#6792FF] hover:bg-gradient-to-br font-medium rounded-xl text-xs px-[21px] py-[9px] text-center ml-[69px]"
              >
                Connect Wallet
              </button>
            )}
          </div>
          <section className="MOBILE-MENU flex xl:hidden absolute right-[26px]">
            <div
              className="HAMBURGER-ICON space-y-2 cursor-pointer"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-8 animate-pulse bg-[#000]"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-[#000]"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-[#000]"></span>
            </div>

            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div
                className="absolute top-0 right-0 px-8 py-8 cursor-pointer"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="h-8 w-8 text-[#fff]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <div className="flex justify-center items-center flex-col w-full">
                {props.isAuth ? (
                  <div className="mb-[30px]">
                    <img
                      className="px-[12px] cursor-pointer"
                      src={cart}
                      alt="Cart"
                    />
                    <div className="flex justify-between items-center pl-[12px] cursor-pointer text-[#fff]">
                      <Link
                        className="flex justify-between items-center"
                        to="/personalAccount"
                      >
                        <img src={user} alt="User" />
                        <p className="px-[12px]">JhoneDoe1212</p>
                      </Link>
                      <img src={down} alt="Down" />
                    </div>
                  </div>
                ) : (
                  <button
                    type="button"
                    className="text-white bg-gradient-to-br from-[#30CFF2] to-[#6792FF] hover:bg-gradient-to-br font-medium rounded-xl text-xs px-[21px] py-[9px] text-center mb-[30px]"
                  >
                    Connect Wallet
                  </button>
                )}
                <div className="text-[#fff] px-5 w-full">
                  <div className="flex justify-between items-start flex-col DESKTOP-MENU">
                    <div className="flex justify-between items-start pl-5 flex-col mb-[30px] pt-[30px] border-t border-t-[#F5F5F5] w-full">
                      <Link className="font-medium mb-[30px]" to="/discover">
                        Discover
                      </Link>
                      <Link className="font-medium" to="/rounds">
                        Rounds
                      </Link>
                    </div>
                    <div className="flex justify-between items-start pl-5 flex-col w-full mb-[30px]">
                      <Link className="font-light mb-[30px]" to="*">
                        NEAR
                      </Link>
                      <Link className="font-light " to="*">
                        Learn NEAR Club
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-between pl-5 items-start flex-col pt-[30px] border-t border-t-[#F5F5F5]  ">
                    <Link className="font-normal text-xs" to="/terms">
                      Terms
                    </Link>
                    <Link className="py-5 font-normal text-xs" to="*">
                      Privacy
                    </Link>
                    <Link className="font-normal text-xs" to="/faq">
                      FAQ
                    </Link>
                  </div>
                </div>
                <div className="px-5 w-full mt-[60px] flex items-center justify-center">
                  <a href="#" className="flex flex-wrap items-center">
                    <img src={telegram} alt="telegram" />
                  </a>
                  <a href="#" className="px-[30px] flex flex-wrap items-center">
                    <img src={twitter} alt="twitter" />
                  </a>
                  <a className="flex flex-wrap items-center" href="#">
                    <img src={discord} alt="discord" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </nav>
    </header>
  );
};
