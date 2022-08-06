import React from "react";

export const Button = ({ text, p }) => {
  return (
    <>
      <button
        type="button"
        className="text-white bg-gradient-to-br from-[#30CFF2] to-[#6792FF] hover:bg-gradient-to-br font-medium rounded-xl text-xs text-centerflex items-center justify-center mx-auto"
      >
        <p className={p}>{text}</p>
      </button>
    </>
  );
};
