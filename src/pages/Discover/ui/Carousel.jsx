import React from "react";

import ex1 from "../../../assets/img/ex1.png";
import ex2 from "../../../assets/img/ex2.png";
import ex3 from "../../../assets/img/ex3.png";
import ex4 from "../../../assets/img/ex4.png";
import ex5 from "../../../assets/img/ex5.png";
import ex6 from "../../../assets/img/ex6.png";

export const Carousel = () => {
  return (
    <div className="container mx-auto flex items-center justify-between mb-[60px] flex-wrap">
      <img src={ex1} alt="ex1" className="hidden xl:flex" />
      <img src={ex2} alt="ex2" />
      <img src={ex3} alt="ex3" className="md:flex hidden" />
      <img src={ex4} alt="ex4" className="hidden xl:flex" />
      <img src={ex5} alt="ex5" className="hidden xl:flex" />
      <img src={ex6} alt="ex6" className="hidden xl:flex" />
    </div>
  );
};
