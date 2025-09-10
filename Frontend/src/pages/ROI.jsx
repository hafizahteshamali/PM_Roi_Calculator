import React, { useState, useEffect } from "react";
import {
  motion,
  useSpring,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { IoSettingsOutline } from "react-icons/io5";

const ROI = () => {
  const [value, setValue] = useState(1000);
  const [isDownTimevalue, setIsDownTimevalue] = useState(1);

  // motion values
  const valueSpring = useSpring(value, { stiffness: 120, damping: 20 });
  const downtimeSpring = useSpring(isDownTimevalue, {
    stiffness: 120,
    damping: 20,
  });

  // convert to percentage
  const valuePercent = useTransform(valueSpring, (v) => (v / 50000) * 100);
  const downtimePercent = useTransform(
    downtimeSpring,
    (v) => ((v - 1) / 9) * 100
  );

  // reactive values for CSS bg
  const [valueBg, setValueBg] = useState("");
  const [downtimeBg, setDowntimeBg] = useState("");

  useMotionValueEvent(valuePercent, "change", (latest) => {
    setValueBg(
      `linear-gradient(to right, var(--primary-color) ${latest}%, #d1d5db ${latest}%)`
    );
  });

  useMotionValueEvent(downtimePercent, "change", (latest) => {
    setDowntimeBg(
      `linear-gradient(to right, var(--primary-color) ${latest}%, #d1d5db ${latest}%)`
    );
  });

  useEffect(() => {
    valueSpring.set(value);
  }, [value, valueSpring]);

  useEffect(() => {
    downtimeSpring.set(isDownTimevalue);
  }, [isDownTimevalue, downtimeSpring]);

  return (
    <div className="lg:h-screen lg:overflow-hidden flex justify-center items-start lg:items-center px-4 py-4 lg:py-0">
  <motion.div
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="rounded-2xl w-full md:w-[80%] lg:w-[75%] overflow-y-auto lg:overflow-visible lg:space-y-2"
  >
    {/* Heading */}
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-xl md:text-3xl lg:text-4xl font-[500] text-center mb-2 w-full lg:w-[70%] mx-auto lg:leading-10"
    >
      Was kostet Sie ein ungeplanter Stillstand? Finden Sie es in 30
      Sekunden heraus.
    </motion.h1>

    <p className="text-center text-[var(--black-color)] mb-8 lg:mb-2 text-lg lg:text-base w-full md:w-[60%] mx-auto font-[400]">
      Unser Rechner zeigt Ihnen das konkrete Einsparpotential durch
      Predictive Maintenance in Ihrem Betrieb.
    </p>

    <form className="space-y-5 lg:space-y-2 w-full lg:w-[65%] mx-auto">
      {/* Maschinen */}
      <div>
        <label className="block text-lg lg:text-base text-[var(--black-color)] font-[400] mb-1">
          Anzahl der kritischen Maschinen/Anlagen
        </label>
        <div className="flex items-center border border-gray-300 rounded px-3 py-1">
          <IoSettingsOutline className="text-[var(--black-color)] text-xl" />
          <select className="w-full py-1 outline-none bg-transparent text-sm lg:text-base">
            <option>Wählen Sie...</option>
            <option>1 Maschine</option>
            <option>2 Maschinen</option>
            <option>3 Maschinen</option>
          </select>
        </div>
      </div>

      {/* Kosten pro Stunde */}
      <div>
        <label className="block text-lg lg:text-base text-[var(--black-color)] font-[400] mb-1">
          Kosten pro Stunde ungeplanten Stillstands (€)
        </label>
        <div className="flex items-center border border-gray-300 rounded px-3 py-1 mb-1">
          <img
            src="/assets/images/hugeicons_save-money-euro.svg"
            className="mr-2"
            alt=""
          />
          <input
            type="number"
            className="w-full outline-none bg-transparent text-sm lg:text-base"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
          />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[16px]">1,000</span>
          <input
            type="range"
            min="1000"
            max="50000"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            className="w-[60%] lg:w-[80%] h-1 rounded-lg appearance-none cursor-pointer bg-gray-300"
            style={{
              background: valueBg,
            }}
          />
          <span className="text-[16px]">50,000</span>
        </div>
      </div>

      {/* Stillstände */}
      <div>
        <label className="block text-lg lg:text-base text-[var(--black-color)] font-[400] mb-1">
          Unerwartete Stillstände pro Jahr
        </label>
        <div className="flex justify-between items-center">
          <span className="text-[16px]">1</span>
          <input
            type="range"
            min="1"
            max="10"
            value={isDownTimevalue}
            onChange={(e) => setIsDownTimevalue(Number(e.target.value))}
            className="w-[60%] lg:w-[80%] h-1 rounded-lg appearance-none cursor-pointer bg-gray-300"
            style={{
              background: downtimeBg,
            }}
          />
          <span className="text-[16px]">10</span>
        </div>
      </div>

      {/* Dauer */}
      <div>
        <label className="block text-lg lg:text-base text-[var(--black-color)] font-[400] mb-1">
          Durchschnittliche Dauer eines Stillstands
        </label>
        <div className="flex items-center border border-gray-300 rounded px-3 py-1">
          <img src="/assets/images/mdi_clock-outline.svg" alt="" />
          <select className="w-full outline-none bg-transparent py-1 text-sm lg:text-base">
            <option>2-4 h</option>
            <option>4-6 h</option>
            <option>6-8 h</option>
          </select>
        </div>
      </div>

      {/* Optional */}
      <div>
        <label className="block text-lg lg:text-base text-[var(--black-color)] font-[400] mb-1">
          Optional: Für eine genauere Berechnung
        </label>
        <div className="flex items-center border border-gray-300 rounded px-3 py-1 mb-1">
          <img
            src="/assets/images/hugeicons_save-money-euro.svg"
            className="mr-2"
            alt=""
          />
          <input
            type="text"
            className="w-full outline-none bg-transparent text-sm lg:text-base placeholder:text-[var(--black-color)]"
            placeholder="Durchschnittliche Kosten einer Fehlcharge/Ausschuss (€)"
          />
        </div>
      </div>

      {/* Button */}
      <div className="w-full flex justify-end items-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-[40%] bg-emerald-600 text-white py-2 lg:py-2 rounded font-semibold shadow-md hover:bg-emerald-700 transition text-sm lg:text-base"
        >
          Jetzt Berechnen
        </motion.button>
      </div>
    </form>
  </motion.div>
</div>

  );
};

export default ROI;
