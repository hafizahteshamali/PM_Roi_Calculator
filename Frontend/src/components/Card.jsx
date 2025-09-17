import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const Card = ({ data }) => {
  const { icon, heading, subtitle, btnText, contactText, contactValue, btnColor, btnHover } = data;
  return (
    <div className="flex flex-col justify-center items-center w-full md:w-[45%] lg:w-[31%] shadow-md rounded-lg p-6 text-center bg-white">
      {icon}
      <h2 className="text-xl font-semibold text-[#6a0dad] mb-2">{heading}</h2>
      <p className="text-[#333] mb-4">{subtitle}</p>
      <button
        className={`w-full text-white px-4 py-2 rounded-md font-medium block transition`}
        style={{ backgroundColor: btnColor }}
      >
        {btnText}
      </button>

      <div className="mt-5 flex flex-col justify-center items-center w-full">
        <p className="text-gray-600 text-[16px]">{contactText}</p>
        <p className="text-gray-600 text-[16px]">{contactValue}</p>
      </div>
    </div>
  );
};

export default Card;
