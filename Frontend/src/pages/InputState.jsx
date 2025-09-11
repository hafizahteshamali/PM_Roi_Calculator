import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import {
  industries,
  InputStateData,
  pressureData,
  production_FlowData,
} from "../assets/ConstantData";
import { NavLink } from "react-router-dom";

const steps = [
  { id: 1, title: "Eingabezustand" },
  { id: 2, title: "Berechnungsstatus" },
  { id: 3, title: "Ergebnisstatus" },
];

const criticalOptions = [
  {
    label: "Eine einzelne Schlüsselmaschine",
    subtitle: "(Ein Saustall-stoppt alles)",
    value: 1,
  },
  {
    label: "Eine kleine Gruppe",
    subtitle: "(3-5 Maschinen)",
    value: 3,
  },
  {
    label: "Ein gesamter Bereich",
    subtitle: "(10+ Maschinen)",
    value: 10,
  },
];

const InputState = () => {
  const [activeStep, setActiveStep] = useState(1);

  // user inputs
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [criticalMachines, setCriticalMachines] = useState(null);
  const [pressure, setPressure] = useState(1);
  const [area, setArea] = useState("");

  // results
  const [costs, setCosts] = useState(0);
  const [savings, setSavings] = useState(0);

  // Enhanced calculation logic
  const handleCalculate = () => {
    if (!criticalMachines) {
      alert("Bitte wählen Sie eine kritische Maschinenoption aus!");
      return;
    }

    // Base assumptions
    const avgDowntimeHours = 20; // avg downtime per month per machine
    const costPerHour = 3500; // € per downtime hour
    const months = 12; // yearly cost

    // Energy & Scrap savings (simplified)
    const energySavingPercent = 0.1; // 10%
    const scrapSavingPercent = 0.05; // 5%

    // Step 1: Calculate annual downtime cost
    let downtimeCost =
      criticalMachines * avgDowntimeHours * costPerHour * pressure * months;

    // Step 2: Apply energy & scrap savings
    const energyScrapSavings = downtimeCost * (energySavingPercent + scrapSavingPercent);

    // Step 3: Total avoidable cost
    downtimeCost = downtimeCost + energyScrapSavings;

    // Step 4: Expected saving (conservative 60% reduction)
    const saving = downtimeCost * 0.6;

    setCosts(downtimeCost);
    setSavings(saving);

    setActiveStep(3);
  };

  return (
    <div className="w-full lg:h-screen lg:overflow-hidden flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-20 py-6 sm:py-8 md:py-10">
      <div className="lg:h-[95vh] w-full lg:w-[100%]">
        {/* Stepper */}
        <div className="w-full sm:w-[90%] lg:w-[95%] flex flex-row flex-wrap items-center justify-center mb-5 gap-5">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="flex items-center cursor-pointer min-w-[120px] sm:flex-1"
              onClick={() => setActiveStep(step.id)}
            >
              {/* Circle */}
              <div
                className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full text-white font-bold
                ${
                  activeStep === step.id
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
                ${
                  activeStep === step.id
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

        <div className="w-full h-auto lg:h-[90%] flex flex-col lg:flex-row gap-6 lg:gap-5">
          {/* LEFT CONTENT */}
          <div className="flex w-full rounded shadow bg-white">
            {/* Step 1 */}
            {activeStep === 1 && (
              <div className="lg:m-10 p-5 lg:p-0">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-[500] w-[80%] lg:leading-16 text-gray-800 mb-6">
                  {InputStateData.heading}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base mb-6">
                  {InputStateData.subtitle}
                </p>
                <ul className="space-y-3 text-gray-700 mb-6 text-sm sm:text-[16px]">
                  {InputStateData.bullets.map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-start items-center gap-2.5"
                    >
                      <img src={item.icon} alt="" className="w-4 sm:w-5" />
                      {item.text}
                    </li>
                  ))}
                </ul>
                <p className="text-xs sm:text-sm text-gray-500 mb-6">
                  {InputStateData.subtitle2}
                </p>
                <button
                  onClick={() => setActiveStep(2)}
                  className="bg-[#382A4D] hover:bg-purple-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded shadow-md font-medium text-sm sm:text-base mb-6"
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

            {/* Step 2 */}
            {activeStep === 2 && (
              <div className="w-full mx-auto bg-white px-5 py-1 rounded">
                <div className="w-[95%] mx-auto">
                  {/* Q1 */}
                  <h2 className="text-lg font-semibold my-2 text-[#00000081]">
                    1. In welcher Branche ist Ihr Unternehmen tätig?
                  </h2>
                  <div className="flex flex-wrap justify-start gap-x-5">
                    {industries.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedIndustry(item.c_name)}
                        className={`w-full sm:w-[45%] md:w-[30%] lg:w-[27%] h-[70px] mb-3 flex justify-center items-center gap-2 border border-gray-300 rounded text-sm 
                        ${
                          selectedIndustry === item.c_name
                            ? "bg-[#F2E4FE]"
                            : "hover:bg-purple-50"
                        }`}
                      >
                        <img src={item.icon} alt="" />
                        <span>{item.c_name}</span>
                      </button>
                    ))}
                  </div>

                  {/* Q2 - Critical Machines */}
                  <h2 className="text-lg font-semibold my-2 text-[#00000081]">
                    2. Wie viele Ihrer Anlagen sind für den Produktionsfluss absolut kritisch?
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {criticalOptions.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => setCriticalMachines(option.value)}
                        className={`flex flex-col justify-center items-start w-full lg:w-[29%] border border-gray-300 rounded px-5 py-3 text-sm 
                        ${
                          criticalMachines === option.value
                            ? "bg-[#F2E4FE]"
                            : ""
                        }`}
                      >
                        <p className="text-[16px] font-[400] text-left">
                          {option.label}
                        </p>
                        <p className="text-[#00000070]">{option.subtitle}</p>
                      </button>
                    ))}
                  </div>

                  {/* Q3 - Slider */}
                  <h2 className="text-lg font-semibold my-2 text-[#00000081]">
                    3. Wie oft geraten Sie pro Monat unter Druck?
                  </h2>
                  <div className="w-full">
                    {/* Large screen → horizontal */}
                    <div className="hidden md:block w-full">
                      <input
                        type="range"
                        min="1"
                        max="4"
                        step="1"
                        value={pressure}
                        onChange={(e) => setPressure(Number(e.target.value))}
                        className="w-full h-1 accent-[#382A4D]"
                      />
                      <div className="flex justify-between text-xs sm:text-sm text-gray-600 mt-2">
                        {pressureData.map((item, index) => (
                          <div
                            key={index}
                            className="flex justify-center items-center gap-2 w-max"
                          >
                            <img src={item.imgIcon} alt="" />
                            <div className="flex flex-col justify-start items-start">
                              <p>{item.text}</p>
                              <p className="text-[#00000081] text-sm">
                                {item.subtitle}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Mobile → vertical */}
                    <div className="flex md:hidden flex-row items-center gap-4 w-full">
                      <div className="h-[220px] flex items-center">
                        <input
                          type="range"
                          min="1"
                          max="4"
                          step="1"
                          value={pressure}
                          onChange={(e) => setPressure(Number(e.target.value))}
                          orient="vertical"
                          className="appearance-none w-2 h-[220px] accent-[#382A4D]"
                          style={{
                            writingMode: "bt-lr",
                            WebkitAppearance: "slider-vertical",
                          }}
                        />
                      </div>

                      {/* Text Content */}
                      <div className="flex flex-col justify-between text-xs sm:text-sm text-gray-600 w-full gap-4">
                        {pressureData.map((item, index) => (
                          <div
                            key={index}
                            className="flex justify-start items-center gap-2"
                          >
                            <img src={item.imgIcon} alt="" />
                            <div className="flex flex-col justify-start items-start">
                              <p>{item.text}</p>
                              <p className="text-[#00000081] text-sm">
                                {item.subtitle}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Q4 */}
                  <h2 className="text-lg font-semibold mt-5 mb-2 text-[#00000081]">
                    4. Wie viele Ihrer Anlagen sind für den Produktionsfluss absolut kritisch?
                  </h2>
                  <select
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full border border-gray-300 rounded bg-[#F2E4FE] p-3 mb-2 outline-none"
                  >
                    <option value="">Bitte wählen...</option>
                    <option value="single">
                      Eine einzelne Schlüsselmaschine
                    </option>
                    <option value="group">
                      Eine kleine Gruppe (3–5 Maschinen)
                    </option>
                    <option value="area">
                      Ein gesamter Bereich (&gt;10 Maschinen)
                    </option>
                  </select>

                  {/* Calculate button */}
                  <div className="w-full flex justify-end items-center">
                    <button
                      onClick={handleCalculate}
                      className="w-full lg:w-[30%] bg-[#382A4D] hover:bg-[#382a4de0] text-white px-6 py-3 rounded shadow-md font-medium"
                    >
                      Jetzt Berechnen
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3 - Results */}
            {activeStep === 3 && (
              <div className="p-6 w-full flex flex-col justify-center items-center">
                {/* Result Boxes */}
                <div className="flex flex-col lg:flex-row justify-around items-center gap-6 w-full mb-8">
                  {/* Kosten Box */}
                  <div className="flex flex-col justify-center items-center h-[250px] w-full sm:w-[80%] md:w-[70%] lg:w-[33%] bg-[#FBFBFB] shadow-md rounded-xl p-6 border border-gray-200 text-center">
                    <p className="text-black text-sm mb-2 font-[700]">
                      Ihre vermeidbaren Kosten pro Jahr:
                    </p>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600">
                      {costs.toLocaleString()} €
                    </h3>
                    <img
                      src="/assets/images/bar.svg"
                      alt=""
                      className="max-h-[120px] my-2"
                    />
                    <p className="text-black text-xs sm:text-sm mt-2 font-[700]">
                      Ungeplante Stillstände und Reparaturen schlagen hier zu
                      Buche.
                    </p>
                  </div>

                  {/* Arrow → only visible on large screens */}
                  <div className="hidden lg:flex items-center justify-center text-3xl text-gray-500">
                    <img src="/assets/images/formkit_arrowright.png" alt="" />
                  </div>

                  {/* Einsparpotenzial Box */}
                  <div className="flex flex-col justify-center items-center h-[250px] w-full sm:w-[80%] md:w-[70%] lg:w-[33%] bg-white shadow-md rounded-xl p-6 border border-gray-200 text-center">
                    <p className="text-black text-sm mb-2 font-[700]">
                      Ihr mögliches Einsparpotenzial:
                    </p>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600">
                      {savings.toLocaleString()} €
                    </h3>
                    <img
                      src="/assets/images/streamline-ultimate-color_saving-money-flower.svg"
                      alt=""
                      className="max-h-[120px] my-2"
                    />
                    <p className="text-black text-xs sm:text-sm mt-2 font-[700]">
                      (bei nur 60 % Vermeidung von Ausfällen konservativ
                      gerechnet)
                    </p>
                  </div>
                </div>

                {/* Info Text */}
                <p className="text-gray-700 text-center text-base sm:text-lg md:text-xl font-medium leading-relaxed mb-6 w-full sm:w-[80%] md:w-[70%] lg:w-[70%] mx-auto">
                  Predictive Maintenance bedeutet: weniger Ausfälle, planbare
                  Wartung, mehr Produktion. Schon ein einzelner Pilotstart
                  zeigt, wie schnell sich das rechnet.
                </p>

                {/* CTA Button */}
                <div className="flex justify-center">
                  <button className="bg-[#382A4D] hover:bg-purple-700 text-white px-6 sm:px-10 py-3 rounded-lg shadow-md font-medium text-sm sm:text-base">
                    Ja, ich will meine kostenlose Strategie
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT FIXED CONTENT */}
          <div className="w-full lg:w-[25%] rounded-xl flex flex-col justify-start items-start text-center lg:text-left">
            <NavLink to="/input_state" className="mb-4 h-[150px]">
              <img
                src="/assets/images/sclera_logo.svg"
                alt=""
                className="mx-auto lg:mx-0"
              />
            </NavLink>
            <h3 className="text-lg sm:text-xl md:text-2xl font-[500] text-gray-800 mb-3">
              Wie anfällig ist Ihre Produktion wirklich?
            </h3>
            <p className="text-gray-600 text-left text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-5">
              Beantworten Sie drei kurze Fragen und erfahren Sie, wie hoch das
              Risiko ungeplanter Ausfälle in Ihrem Betrieb ist – und welche
              Kosten dadurch entstehen können.
            </p>
            <div className="h-[400px] sm:h-[220px] md:h-[310px] w-full mx-auto flex justify-center items-center">
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
