import React from "react";

import logo from "../../assets/img/logo.png";
import search from "../../assets/img/search.png";
import cart from "../../assets/img/cart.png";
import user from "../../assets/img/user.png";
import down from "../../assets/img/down.png";

export const Header = (props) => {
  return (
    <header>
      <nav className=" bg-white">
        <div className="container flex flex-wrap justify-between items-center mx-auto px-[90px] h-[72px] relative">
          <div className="flex justify-between items-center">
            <div className="flex justify-between items-center pr-[75px] nav1">
              <a className="pr-[15px] font-medium" href="#">
                Discover
              </a>
              <a className="pl-[15px] font-medium" href="#">
                Rounds
              </a>
            </div>
            <div className="flex justify-between items-center pl-[75px] nav2">
              <a className="font-light pr-[15px]" href="#">
                NEAR
              </a>
              <a className="font-light pl-[15px]" href="#">
                Learn NEAR Club
              </a>
            </div>
          </div>
          <a
            href="#"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex w-[194px] h-[20px]"
          >
            <img src={logo} alt="Fundue logo" />
          </a>
          <div className="flex justify-between items-center">
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
                <div className="flex justify-between items-center pl-[12px]">
                  <img src={user} alt="User" />
                  <p className="px-[12px]">JhoneDoe1212</p>
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
        </div>
      </nav>
    </header>
  );
};
