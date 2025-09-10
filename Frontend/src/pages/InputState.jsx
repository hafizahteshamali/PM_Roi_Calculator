import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { InputStateData } from "../assets/ConstantData";
import { NavLink } from "react-router-dom";

const steps = [
  { id: 1, title: "Eingabezustand" },
  { id: 2, title: "Berechnungsstatus" },
  { id: 3, title: "Ergebnisstatus" },
];

const InputState = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="w-full lg:h-screen lg:overflow-hidden flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-20 py-6 sm:py-8 md:py-10">
      <div className="lg:h-[95vh] w-full lg:w-[90%]">
        {/* Stepper */}
        <div className="w-full sm:w-[90%] lg:w-[75%] flex flex-col sm:flex-row flex-wrap items-start lg:items-center justify-start mb-5 gap-3">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="flex items-center cursor-pointer min-w-[120px] sm:flex-1"
              onClick={() => setActiveStep(step.id)}
            >
              {/* Circle */}
              <div
                className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full text-white font-bold 
          ${activeStep === step.id
                    ? "bg-[#382A4D]"
                    : activeStep > step.id
                      ? "bg-green-500"
                      : "bg-gray-300"
                  }`}
              >
                {activeStep > step.id ? <FaCheckCircle /> : step.id}
              </div>

              {/* Title */}
              <p
                className={`ml-2 text-sm sm:text-base lg:text-[16px] whitespace-nowrap
          ${activeStep === step.id
                    ? "text-[#382A4D] font-semibold"
                    : "text-gray-500"
                  }`}
              >
                {step.title}
              </p>

              {/* Connector */}
              {index < steps.length - 1 && (
                <div className="hidden sm:block flex-1 h-[2px] bg-gray-300 mx-2"></div>
              )}
            </div>
          ))}
        </div>


        <div className="w-full max-w-6xl h-auto lg:h-[90%] flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* LEFT CONTENT */}
          <div className="flex-1 p-5 sm:p-6 md:p-8 lg:p-12 bg-white rounded-xl shadow-lg">
            {/* Dynamic Step Content */}
            {activeStep === 1 && (
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[500] leading-snug text-gray-800 mb-3">
                  {InputStateData.heading}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base mb-6">
                  {InputStateData.subtitle}
                </p>
                <ul className="space-y-3 text-gray-700 mb-6 text-sm sm:text-base">
                  {InputStateData.bullets.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex justify-start items-center gap-2.5"
                      >
                        <img src={item.icon} alt="" className="w-4 sm:w-5" />
                        {item.text}
                      </li>
                    );
                  })}
                </ul>
                <p className="text-xs sm:text-sm text-gray-500 mb-6">
                  {InputStateData.subtitle2}
                </p>
                <button
                  onClick={() => setActiveStep(2)}
                  className="bg-[#382A4D] hover:bg-purple-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded shadow-md font-medium text-sm sm:text-base"
                >
                  {InputStateData.btnText}
                </button>
                <p className="mt-4 text-purple-500 text-sm cursor-pointer hover:underline">
                  <NavLink
                    className="flex justify-start items-center gap-2.5"
                    to={InputStateData.caseStudyLink}
                  >
                    <img
                      src={InputStateData.caseStudyIcon}
                      alt=""
                      className="w-4 sm:w-5"
                    />
                    {InputStateData.caseStudyText}
                  </NavLink>
                </p>
              </div>
            )}

            {activeStep === 2 && (
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
                  Berechnung läuft...
                </h2>
                <p className="text-gray-600 text-sm sm:text-base">
                  Bitte warten Sie, während wir Ihre Daten verarbeiten.
                </p>
                <button
                  onClick={() => setActiveStep(3)}
                  className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg shadow-md font-medium text-sm sm:text-base"
                >
                  Weiter
                </button>
              </div>
            )}

            {activeStep === 3 && (
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
                  Ihre Ergebnisse sind da 🎉
                </h2>
                <p className="text-gray-600 text-sm sm:text-base">
                  Hier sehen Sie die wahren Kosten und Einsparungen.
                </p>
                <button
                  onClick={() => setActiveStep(1)}
                  className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg shadow-md font-medium text-sm sm:text-base"
                >
                  Neu starten
                </button>
              </div>
            )}
          </div>

          {/* RIGHT FIXED CONTENT */}
          <div className="w-full lg:w-1/3 rounded-xl border-gray-200 px-5 sm:px-6 md:px-8 pt-4 sm:pt-5 flex flex-col justify-start items-center lg:items-start text-center lg:text-left">
            <NavLink to="/input_state" className="mb-4">
              <img
                src="/assets/images/sclera_logo.svg"
                alt=""
                className="mx-auto lg:mx-0 w-28 sm:w-32 md:w-36"
              />
            </NavLink>
            <h3 className="text-lg sm:text-xl md:text-2xl font-[500] text-gray-800 mb-3">
              Wie anfällig ist Ihre Produktion wirklich?
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-5">
              Beantworten Sie drei kurze Fragen und erfahren Sie, wie hoch das Risiko
              ungeplanter Ausfälle in Ihrem Betrieb ist – und welche Kosten dadurch
              entstehen können.
            </p>
            <div className="h-[180px] sm:h-[220px] md:h-[250px] w-[60%] sm:w-[70%] mx-auto flex justify-center items-center">
              <img
                src="/assets/images/production_img.png"
                className="object-contain max-h-full"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputState;
