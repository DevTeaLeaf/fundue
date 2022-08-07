import React from "react";
import { Header } from "../../components/Header";
import { Footer } from "./ui/Footer";
import rocket from "../../assets/img/rocket.png";
import arrow from "../../assets/img/arrow.png";

import calculator from "../../assets/img/calculator.png";
import people from "../../assets/img/people.png";
import pie from "../../assets/img/pie.png";

import { Carousel } from "./ui/Carousel";
import { OurDevs } from "./ui/OurDevs";

import { Link } from "react-router-dom";

export const Discover = () => {
  return (
    <>
      <Header isAuth={false} />
      <div className="min-container mx-auto">
        <div className="flex items-center justify-between mt-[30px] mb-[60px]">
          <div className="flex items-center cursor-pointer">
            <p className="text-[#6398FE] mr-1">Home /</p>
            <p className="text-[#6E768C]">Discover</p>
          </div>
          <div className="flex items-center cursor-pointer">
            <img src={arrow} alt="arrow" />
            <Link className="text-[#6398FE] font-medium text-xs" to="/">
              Back to Home page
            </Link>
          </div>
        </div>
        <div className="flex items-start justify-start mb-[60px] flex-col max-w-[790px]">
          <div className="text-3xl font-bold text-[48px] leading-[60px] mb-[17px]">
            Our mission is to tackle society's challenges and help bring fresh
            idea to life
          </div>
          <p className="  font-normal text-[#838B9E] text-sm">
            Our goal is to help young developers and teams realize their bold
            ideas that will benefit the NEAR ecosystem through Quadratic Funding
          </p>
        </div>
        <div className="flex flex-wrap w-full bg-[#E8E8FD] py-[43px] pl-[75px] relative rounded-xl  h-[200px] mb-[30px]">
          <img
            src={rocket}
            alt="rocket"
            className="absolute top-[-230px] right-[-200px]"
          />
          <div className="relative z-10 w-full">
            <h2 className="text-xl text-[20px] leading-6">
              Our impact in numbers
            </h2>
            <div className="flex flex-row mt-10">
              <div className="flex flex-column w-[160px]">
                <div>
                  <p className="text-[20px] font-semibold leading-6 mb-[6px]">
                    24
                  </p>
                  <p className="text-xs text-[#838B9E]">Projects created</p>
                </div>
              </div>
              <div className="flex flex-column mx-20 w-[160px]">
                <div>
                  <p className="text-[20px] font-semibold leading-6 mb-[6px]">
                    1,755
                  </p>
                  <p className="text-xs text-[#838B9E]">
                    Monthly active developers
                  </p>
                </div>
              </div>
              <div className="flex flex-column">
                <div>
                  <p className="text-[20px] font-semibold leading-6 mb-[6px] w-[160px]">
                    $ 6.5M
                  </p>
                  <p className="text-xs text-[#838B9E]">Funded</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-[30px]">
          <div className="p-[30px]">
            <h3 className="font-semibold text-[24px] leading-[28px] mb-5">
              About Fundue
            </h3>
            <div className="text-[#838B9E] max-w-[730px]">
              <p className="mb-5 text-sm">
                Grant system for projects of public interest in the NEAR
                ecosystem. Similar to gitcoin.co, the masters launch a round
                (for example, a week long), allocating (with the possibility of
                adding later) a range of support for round sponsors. Those
                wishing to attract funding post their projects.
              </p>
              <p>
                The voters choose the projects they are interested in and vote
                for them. At the end of the round, the authors of the projects
                can take the amount consisting of a part of the funds available
                from the sponsors and the amount from the voters received as a
                result of their voting
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap w-full bg-[#F3EFE8] relative rounded-xl mb-[60px]">
        <div className="w-full min-container mx-auto p-[30px]">
          <h2 className="text-[20px] leading-6  mb-[12px]">
            The secret behind QF
          </h2>
          <p className="text-[#838B9E] text-sm">
            A matching pool is raised, and then a crowdfund campaign is matched
            according to the QF algorithm
          </p>
          <div className="flex align-center justify-evenly mt-10">
            <div className="flex flex-column">
              <div className="max-w-[160px]">
                <img className="mb-3" src={calculator} alt="calculator" />
                <p className="text-[#838B9E] text-xs">
                  A matching pool is raised, and then a crowdfund campaign is
                  matched according to the QF algorithm
                </p>
              </div>
            </div>
            <div className="flex flex-column">
              <div className="max-w-[160px]">
                <img className="mb-3" src={people} alt="calculator" />
                <p className="text-[#838B9E] text-xs">
                  The distribution of grants is influenced by ordinary users,
                  not whales and other central influencers
                </p>
              </div>
            </div>
            <div className="flex flex-column">
              <div className="max-w-[160px]">
                <img className="mb-3" src={pie} alt="calculator" />
                <p className="text-[#838B9E] text-xs">
                  A valid way to reconcile incentives between private goods and
                  public goods
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-container mx-auto font-semibold text-[24px] leading-7 mb-[30px]">
        Projects borned with Fundue
      </div>
      <Carousel />
      <div className="min-container mx-auto mb-[116px]">
        <div className="font-semibold text-[24px] leading-7 mb-[30px]">
          Our developer communities
        </div>
        <OurDevs />
      </div>
      <Footer />
    </>
  );
};
