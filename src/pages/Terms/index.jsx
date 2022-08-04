import React from "react";
import "./terms.css";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import paper from "../../assets/img/paperTerms.png";
import arrow from "../../assets/img/arrow.png";

export const Terms = () => {
  return (
    <>
      <Header isAuth={false} />
      <div className="terms-wrapper">
        <div className="min-container mx-auto">
          <div className="flex items-center justify-between py-10">
            <h1 className="text-5xl font-semibold text-[#fcfcfc]">
              Terms of Use
            </h1>
            <img src={paper} alt="paper" />
          </div>
        </div>
      </div>
      <div className="min-container mx-auto">
        <div className="flex items-center justify-between my-[30px]">
          <div className="flex items-center cursor-pointer">
            <p className="text-[#6398FE] mr-1">Home /</p>
            <p className="text-[#6E768C]">Fundue Terms of Use</p>
          </div>
          <div className="flex items-center cursor-pointer">
            <img src={arrow} alt="arrow" />
            <p className="text-[#6398FE] font-medium text-xs">
              Back to Home page
            </p>
          </div>
        </div>
        <div className="mb-[114px] p-[30px]">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-5">
              <div className="text-3xl font-bold">Fundue Terms of Use</div>
              <div className="flex items-center">
                <p className="text-[#838B9E] text-xs mr-3">Last updated: </p>
                <p className="text-sm">May 11, 2022</p>
              </div>
            </div>
            <div className="text-[#838B9E] text-sm">
              IMPORTANT NOTICE: THIS AGREEMENT IS SUBJECT TO BINDING ARBITRATION
              AND A WAIVER OF CLASS ACTION RIGHTS AS DETAILED IN SECTION 25.
              PLEASE READ THE AGREEMENT CAREFULLY.
            </div>
          </div>
          <div>
            <div className="mb-6">
              <h1 className="font-semibold text-base mb-5">
                1. ACCEPTANCE OF TERMS
              </h1>
              <p className="text-sm text-[#838B9E]">
                Fundue Holdings, Inc. (“Fundue”) is a blockchain-based
                incentivization toolkit for Open Source Software allowing Users
                to interact with Fundue. “Tasks” means any service a Site
                participant requests or performs. Site participants may consist
                of (a) those who post Tasks to Fundue, make Grants (as defined
                below) to Hunters, sponsor virtual hackathon events in which
                multiple Hunters may participate (“Hackathons”) or manage a
                community (“Tribes”) (such participant, individually a “Poster,”
                collectively the “Posters”); (b) those who fulfill Tasks
                (individually a “Hunter” or collectively the “Hunters”); (c)
                those who interact with the Gitcoin site but do not post or
                fulfill Tasks (a “Visitor”); (d) those who buy Kudos or other
                UGC (as defined below) (individually a “Buyer,” collectively the
                “Buyers”); (e) and those who create or sell Kudos or other UGC
                (individually a “Seller,” collectively the “Sellers” and,
                together with Posters, Hunters, Visitors and Buyers, “Users”).
                The Gitcoin website (https://gitcoin.co/, the “Site”) serves as
                a registration portal, product offering, and an overview of the
                Gitcoin services. The site also includes text, images, audio,
                code and other materials or third party information. The Site
                allows Posters to fund and post Tasks for Hunters to resolve,
                allows Posters to fund Grants for Hunters, allows Posters to
                sponsor Hackathons, allows Hunters to resolve Tasks and
                participate in Hackathons, and allows Buyers and Sellers to buy
                and sell (collectively, the “Service Offerings”). The Site and
                any other features, tools, materials, or services offered from
                time to time by Gitcoin, including without limitation the
                Service Offerings, is referred to here as the “Service.” Please
                read these Terms of Use (the “Terms” or “Terms of Use”)
                carefully before using the Service. By using or otherwise
                accessing the Services, or clicking to accept or agree to these
                Terms where that option is made available, you (x) accept and
                agree to these Terms, (y) consent to the collection, use,
                disclosure and other handling of information as described in our
                Privacy Policy and (z) any additional terms, rules and
                conditions of participation issued by Gitcoin from time to time.
                IF YOU DO NOT AGREE TO THE TERMS, THEN YOU MAY NOT ACCESS OR USE
                THE SERVICES.
              </p>
            </div>
            <div className="mb-6">
              <h1 className="font-semibold text-base mb-5">
                2. MODIFICATIONS OF TERMS OF USE
              </h1>
              <p className="text-sm text-[#838B9E]">
                Except for Section 25, providing for binding arbitration and
                waiver of class action rights, Gitcoin reserves the right, at
                its sole discretion, to modify or replace the Terms of Use at
                any time. The most current version of these Terms will be posted
                on our Site. You shall be responsible for reviewing and becoming
                familiar with any such modifications. Use of the Services by you
                after any modification to the Terms constitutes your acceptance
                of the Terms of Use as modified.
              </p>
            </div>
            <div>
              <h1 className="font-semibold text-base mb-5">3. ELIGIBILITY</h1>
              <p className="text-sm text-[#838B9E]">
                You represent and warrant that you: (a) are of legal age to form
                a binding contract; (b) have not previously been suspended or
                removed from using our Services; and (c) have full power and
                authority to enter into this agreement and in doing so will not
                violate any other agreement to which you are a party. If you are
                registering to use the Services on behalf of a legal entity, you
                further represent and warrant that (x) such legal entity is duly
                organized and validly existing under the applicable laws of the
                jurisdiction of its organization, and (y) you are duly
                authorized by such legal entity to act on its behalf.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
