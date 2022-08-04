import React from "react";

import logo from "../../assets/img/logo.png";
import search from "../../assets/img/search.png";
import cart from "../../assets/img/cart.png";
import user from "../../assets/img/user.png";
import down from "../../assets/img/down.png";

export const Header = (props) => {
  return (
    <header>
      <nav className="h-[72px] bg-white">
        <div className="container flex flex-wrap justify-between items-center mx-auto px-[90px] py-[19px]">
          <div className="flex justify-between items-center">
            <div className="flex justify-between items-center pr-[75px]">
              <a className="pr-[15px] font-medium" href="#">
                Discover
              </a>
              <a className="pl-[15px] font-medium" href="#">
                Rounds
              </a>
            </div>
            <div className="flex justify-between items-center pl-[75px]">
              <a className="font-light pr-[15px]" href="#">
                NEAR
              </a>
              <a className="font-light pl-[15px]" href="#">
                Learn NEAR Club
              </a>
            </div>
          </div>
          <a href="#">
            <img src={logo} alt="Fundue logo" />
          </a>
          <div className="flex justify-between items-center">
            <img className="pr-[12px]" src={search} alt="Search" />
            {props.isAuth ? (
              <>
                <img className="px-[12px]" src={cart} alt="Cart" />
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
