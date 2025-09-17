import React from "react";
import { CompanyInfo } from "../assets/ConstantData";
import Card from "../components/Card";

const CallToAction = () => {
  return (
    <div className="bg-white lg:h-screen lg:overflow-hidden flex flex-col justify-center items-center">
      <div className="w-full lg:w-[70%] mx-auto shadow-2xl">
        {/* Section 1 - Header */}
        <div className="w-full mx-auto text-center px-4 py-5">
          <h1 className="text-2xl md:text-3xl font-bold text-[#6a0dad] mb-4">
            Nächste Schritte – persönlich & unkompliziert
          </h1>
          <p className="text-[#333] w-full lg:w-[70%] text-xl mx-auto leading-relaxed">
            Produktionsleiter brauchen klare Wege: Ein kurzes Gespräch reicht
            oft, um Potenziale bei Stillständen, Ausschuss und Energieeinsatz
            greifbar zu machen. On-Prem/Edge, datenschutzkonform – Ihre Daten
            bleiben im Werk.
          </p>
        </div>

        {/* Section 2 - Cards (Flexbox) */}
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center md:justify-start gap-6 px-4 mb-3">
          {CompanyInfo.map((item, index)=>{
            return(
                <Card key={index} data={item} />
            )
          })}
        </div>

        {/* Section 3 - Closing Box */}
        <div className="bg-[#f7f7f7] py-3">
          <div className="mx-auto flex flex-col md:flex-row items-center gap-6 px-4">
            {/* Left Image Placeholder */}
            <div className="rounded-full overflow-hidden" />
                <img src="/roi-calculator/assets/images/owner-zma-solution.jpeg" className="h-[200px] w-[200px] object-contain rounded-full" alt="" />
            {/* Right Content */}
            <div>
              <h3 className="text-xl font-semibold text-[#6a0dad] mb-3">
                Ing. Haider Khan – Ihr Ansprechpartner
              </h3>
              <ul className="text-[#333] space-y-2 list-disc list-inside">
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
