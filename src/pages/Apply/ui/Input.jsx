import React from "react";

export const Input = ({ text }) => {
  return (
    <div>
      <h3 className="text-sm font-medium mb-[6px]">{text}</h3>
      <input
        type="text"
        className="py-3 px-6 border border-[#E3E4EA] rounded-xl outline-none w-full max-h-11 mb-[6px]"
      />
    </div>
  );
};
