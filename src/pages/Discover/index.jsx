import React from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import rocket from "../../assets/img/rocket.png";
import arrow from "../../assets/img/arrow.png";

import calculator from "../../assets/img/calculator.png";
import people from "../../assets/img/people.png";
import pie from "../../assets/img/pie.png";

import ex1 from "../../assets/img/ex1.png";
import ex2 from "../../assets/img/ex2.png";
import ex3 from "../../assets/img/ex3.png";
import ex4 from "../../assets/img/ex4.png";
import ex5 from "../../assets/img/ex5.png";
import ex6 from "../../assets/img/ex6.png";

import p1 from "../../assets/img/p1.png";
import p2 from "../../assets/img/p2.png";
import p3 from "../../assets/img/p3.png";
import p4 from "../../assets/img/p4.png";
import p5 from "../../assets/img/p5.png";
import p6 from "../../assets/img/p6.png";
import p7 from "../../assets/img/p7.png";

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
            <p className="text-[#6398FE] font-medium text-xs">
              Back to Home page
            </p>
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
      <div className="container mx-auto flex items-center justify-between mb-[60px] flex-wrap">
        <img src={ex1} alt="ex1" />
        <img src={ex2} alt="ex2" />
        <img src={ex3} alt="ex3" />
        <img src={ex4} alt="ex4" />
        <img src={ex5} alt="ex5" />
        <img src={ex6} alt="ex6" />
      </div>
      <div className="min-container mx-auto mb-[116px]">
        <div className="font-semibold text-[24px] leading-7 mb-[30px]">
          Our developer communities
        </div>
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
      </div>
      <Footer />
    </>
  );
};
