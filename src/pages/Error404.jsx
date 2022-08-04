import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import pageNotFound from "../assets/img/pageNotFound.png";

export const Error404 = () => {
  return (
    <div>
      <Header isAuth={false} />
      <div className="container mx-auto flex items-center justify-center flex-col my-60">
        <img className="mb-10" src={pageNotFound} alt="404 error" />
        <h3 className="font-semibold text-xl">Error</h3>
        <p className="mt-[15px] mb-[60px] font-normal text-[#85878F] text-sm">
          Page not found
        </p>
        <button
          type="button"
          className="text-white bg-gradient-to-br from-[#30CFF2] to-[#6792FF] hover:bg-gradient-to-br font-medium rounded-xl text-xs px-[21px] py-[9px] text-center"
        >
          Back to home page
        </button>
      </div>
      <Footer />
    </div>
  );
};
