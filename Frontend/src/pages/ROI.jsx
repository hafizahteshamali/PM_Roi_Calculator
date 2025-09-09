import React, { useState, useEffect } from "react";
import { motion, useSpring, useTransform, useMotionValueEvent } from "framer-motion";
import { FaClock } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

const ROI = () => {
  const [value, setValue] = useState(1000);
  const [isDownTimevalue, setIsDownTimevalue] = useState(1);

  // motion values
  const valueSpring = useSpring(value, { stiffness: 120, damping: 20 });
  const downtimeSpring = useSpring(isDownTimevalue, { stiffness: 120, damping: 20 });

  // convert to percentage
  const valuePercent = useTransform(valueSpring, (v) => (v / 50000) * 100);
  const downtimePercent = useTransform(downtimeSpring, (v) => ((v - 1) / 9) * 100);

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
    <div className="h-screen flex justify-center items-center p-6">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl w-[60%] p-8"
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-[40px] font-[500] text-center mb-3 leading-snug"
        >
          Was kostet Sie ein ungeplanter Stillstand? Finden Sie es in 30 Sekunden heraus.
        </motion.h1>
        <p className="text-center text-[var(--black-color)] mb-8 text-[18px] w-[70%] mx-auto font-[400]">
          Unser Rechner zeigt Ihnen das konkrete Einsparpotential durch Predictive Maintenance in Ihrem Betrieb.
        </p>

        <form className="space-y-3">
          {/* Maschinen */}
          <div>
            <label className="block text-[16px] font-[400] mb-2">
              Anzahl der kritischen Maschinen/Anlagen
            </label>
            <div className="flex items-center border border-gray-300 rounded px-3">
              <IoSettingsOutline className="text-[var(--black-color)] text-xl" />
              <select className="w-full py-2 outline-none bg-transparent">
                <option>Wählen Sie...</option>
                <option>1 Maschine</option>
                <option>2 Maschinen</option>
                <option>3 Maschinen</option>
              </select>
            </div>
          </div>

          {/* Kosten pro Stunde */}
          <div>
            <label className="block text-[16px] font-[400] mb-2">
              Kosten pro Stunde ungeplanten Stillstands (€)
            </label>
            <div className="flex items-center border border-gray-300 rounded px-3 py-2 mb-2">
              <img
                src="/assets/images/hugeicons_save-money-euro.svg"
                className="mr-2"
                alt=""
              />
              <input
                type="number"
                className="w-full outline-none bg-transparent"
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
              />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[18px] font-[400]">1,000</span>
              <input
                type="range"
                min="1000"
                max="50000"
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                className="w-[85%] h-1 rounded-lg appearance-none cursor-pointer bg-gray-300"
                style={{
                  background: valueBg,
                }}
              />
              <span className="text-[18px] font-[400]">50,000</span>
            </div>
          </div>

          {/* Stillstände */}
          <div>
            <label className="block text-[16px] font-[400] mb-2">
              Unerwartete Stillstände pro Jahr
            </label>
            <div className="flex justify-between items-center">
              <span className="text-[18px] font-[400]">1</span>
              <input
                type="range"
                min="1"
                max="10"
                value={isDownTimevalue}
                onChange={(e) => setIsDownTimevalue(Number(e.target.value))}
                className="w-[85%] h-1 rounded-lg appearance-none cursor-pointer bg-gray-300"
                style={{
                  background: downtimeBg,
                }}
              />
              <span className="text-[18px] font-[400]">10</span>
            </div>
          </div>

          {/* Dauer */}
          <div>
            <label className="block text-[16px] font-[400] mb-2">
              Durchschnittliche Dauer eines Stillstands
            </label>
            <div className="flex items-center border border-gray-300 rounded px-3">
              <img src="/assets/images/mdi_clock-outline.svg" alt="" />
              <select className="w-full outline-none bg-transparent py-2">
                <option>2-4 h</option>
                <option>4-6 h</option>
                <option>6-8 h</option>
              </select>
            </div>
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-emerald-700 transition"
          >
            Jetzt Berechnen
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default ROI;
