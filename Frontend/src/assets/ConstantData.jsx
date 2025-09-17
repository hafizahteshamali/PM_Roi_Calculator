import { FaPhoneAlt, FaRegClipboard } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const InputStateData = {
  heading: "Wie hoch sind Ihre echten Stillstandskosten?",
  subtitle: "Finden Sie es in weniger als einer Minute heraus.",
  bullets: [
    {
      icon: "/roi-calculator/assets/images/subway_tick.svg",
      text: "Welche Anlage eignet sich am besten für einen Pilotstart?",
    },
    {
      icon: "/roi-calculator/assets/images/subway_tick.svg",
      text: "Wie viel kosten ungeplante Ausfälle wirklich?",
    },
    {
      icon: "/roi-calculator/assets/images/subway_tick.svg",
      text: "Wie schnell rechnet sich Predictive Maintenance bei Ihnen?",
    },
  ],
  subtitle2:
    "Sie erhalten keinen Sales-Call, sondern eine maßgeschneiderte Strategie.",
  btnText: "Jetzt kostenlosen Pilot-Check starten",
  caseStudyIcon: "/roi-calculator/assets/images/wave.png",
  caseStudyText: "Ich möchte erst eine Case Study sehen",
  caseStudyLink: "/input_state",
};

export const industries = [
  {
    icon: "/roi-calculator/assets/images/icon-park_delivery.svg",
    c_name: "Automobil & Zulieferer",
    hoverr: false,
  },
  {
    icon: "/roi-calculator/assets/images/bottle.svg",
    c_name: "Kunststoff-verarbeitung",
    hoverr: true,
  },
  {
    icon: "/roi-calculator/assets/images/ion_fast-food-outline.svg",
    c_name: "Lebensmittel & Getränke",
    hoverr: false,
  },
  {
    icon: "/roi-calculator/assets/images/hugeicons_ai-chemistry-01.svg",
    c_name: "Pharma & Chemie",
    hoverr: false,
  },
  {
    icon: "/roi-calculator/assets/images/carbon_process.svg",
    c_name: "Metall-verarbeltung",
    hoverr: false,
  },
  {
    icon: "/roi-calculator/assets/images/streamline-ultimate_factory-building-1.svg",
    c_name: "Andere Branche",
    hoverr: true,
  },
];

export const production_FlowData = [
  {
    text: "Eine einzelne Schlüsselmaschine",
    subtitle: "(Ein Saustall-stoppt alles)",
    dark: true,
  },
  {
    text: "Eine kleine Gruppe",
    subtitle: "(3-5 Maschinen)",
    dark: false,
  },
  {
    text: "Ein gesamter Bereich",
    subtitle: "(10+ Maschinen)",
    dark: false,
  },
];

export const pressureData = [
  {
    imgIcon:
      "/roi-calculator/assets/images/noto_beaming-face-with-smiling-eyes.svg",
    text: "Glück gehabt!",
    subtitle: "Selten, vielleicht 1-2x pro Jahr",
    value: "",
  },
  {
    imgIcon: "/roi-calculator/assets/images/noto_confounded-face.svg",
    text: "Es nervt.",
    subtitle: "Etwa 1x pro Monat",
    value: "single",
  },
  {
    imgIcon: "/roi-calculator/assets/images/noto_downcast-face-with-sweat.svg",
    text: "Dauerzustand",
    subtitle: "Mehrmals im Monat",
    value: "group",
  },
  {
    imgIcon: "/roi-calculator/assets/images/noto_eight-pointed-star.svg",
    text: "Katastrophe",
    subtitle: "Wachenitich",
    value: "area",
  },
];

export const CompanyInfo = [
  {
    icon: <FaPhoneAlt className="text-[#6a0dad] text-3xl mx-auto mb-3" />,
    heading: "Jetzt anrufen",
    subtitle: "Am schnellsten klären wir Fragen telefonisch.",
    btnText: "Mit Ing. Haider Khan sprechen",
    contactText: "Telefon:",
    contactValue: "+43 677 623 767 93",
    btnColor: "#6a0dad",
    btnHover: "#580b9a",
  },
  {
    icon: <MdEmail className="text-[#6a0dad] text-3xl mx-auto mb-3" />,
    heading: "E-Mail schreiben",
    subtitle: "Öffnet Ihr E-Mail-Programm mit Betreff & Textvorschlag.",
    btnText: "E-Mail an Ing. Haider Khan",
    contactText: "E-Mail an Ing:",
    contactValue: "haider.khan@sclera.at",
    btnColor: "#6a0dad",
    btnHover: "#580b9a",
  },
  {
    icon: <FaRegClipboard className="text-[#6a0dad] text-3xl mx-auto mb-3" />,
    heading: "Kontaktformular",
    subtitle: "Wenn Sie lieber kurz tippen, nutzen Sie unser Formular.",
    btnText: "Kontaktformular öffnen",
    contactText: "",
    contactValue: "Antwort binnen 24 Stunden.",
    btnColor: "#6a0dad",
    btnHover: "#580b9a",
  },
];
