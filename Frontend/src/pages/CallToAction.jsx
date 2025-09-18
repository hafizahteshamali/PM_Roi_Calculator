import React from "react";
import { CompanyInfo } from "../assets/ConstantData";
import Card from "../components/Card";

const CallToAction = () => {
  return (
    <div className="bg-white lg:h-screen lg:overflow-hidden flex flex-col justify-center items-center">
      <div className="w-full lg:w-[70%] mx-auto shadow-2xl">
        {/* Section 1 - Header */}
        <div className="w-full mx-auto text-center px-4 py-6 sm:py-8 lg:py-4">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#6a0dad] mb-2">
            Nächste Schritte – persönlich & unkompliziert
          </h1>
          <p className="text-[#333] w-full sm:w-[90%] md:w-[80%] lg:w-[70%] text-base sm:text-lg md:text-xl mx-auto leading-relaxed">
            Produktionsleiter brauchen klare Wege: Ein kurzes Gespräch reicht
            oft, um Potenziale bei Stillständen, Ausschuss und Energieeinsatz
            greifbar zu machen. On-Prem/Edge, datenschutzkonform – Ihre Daten
            bleiben im Werk.
          </p>
        </div>

        {/* Section 2 - Cards (Flexbox/Grid) */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap justify-center md:justify-start gap-4 sm:gap-6 px-4 mb-4">
          {CompanyInfo.map((item, index) => (
            <Card key={index} data={item} />
          ))}
        </div>

        {/* Section 3 - Closing Box */}
        <div className="bg-[#f7f7f7] py-6 px-4">
          <div className="mx-auto flex flex-col md:flex-row items-center text-center md:text-left gap-6">
            {/* Left Image */}
            <img
              src="/roi-calculator/assets/images/owner-zma-solution.jpeg"
              className="h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 object-cover rounded-full mx-auto md:mx-0"
              alt="Owner"
            />

            {/* Right Content */}
            <div className="flex-1 p-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#6a0dad] mb-3">
                Ing. Haider Khan – Ihr Ansprechpartner
              </h3>
              <ul className="text-[#333] space-y-2 flex flex-col justify-center items-start text-left list-disc text-[12px] sm:text-base">
                <li>
                  Predictive Maintenance & Künstliche Intelligenz für die
                  Industrie
                </li>
                <li>On-Prem/Edge – volle Datenhoheit im Werk</li>
                <li>
                  Fokus: planbare Wartung, weniger Ausschuss, effizienterer
                  Energieeinsatz
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
