import "../styles/Step3.scss";
import check from "../assets/images/icon-checkmark.svg";
import AddonModel from "../models/AddonModel";
import { useEffect, useState } from "react";

const Step3 = () => {
  const addons: AddonModel[] = [
    {
      name: "Online service",
      desc: "Access to multiplayer games",
      monthlyPrice: 1,
      yearlyPrice: 10,
    },
    {
      name: "Larger storage",
      desc: "Extra 1TB of cloud save",
      monthlyPrice: 2,
      yearlyPrice: 20,
    },
    {
      name: "Customizable profile",
      desc: "Custom theme on your profile",
      monthlyPrice: 2,
      yearlyPrice: 20,
    },
  ];

  const [currentPlanType, setCurrentPlanType] = useState("mo");
  const [activeAddons, setActiveAddons] = useState<number[]>([]);

  const toggleAddon = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    e.currentTarget.classList.toggle("active");
    if (e.currentTarget.classList.contains("active")) {
      setActiveAddons((activeAddons) => {
        return [...activeAddons, index].sort((a, b) => a - b);
      });
    } else {
      setActiveAddons((activeAddons) => {
        return activeAddons.filter((i) => i != index).sort((a, b) => a - b);
      });
    }
  };

  useEffect(() => {
    console.log(activeAddons);
  }, [activeAddons]);

  return (
    <div id="step-3">
      <div id="headers-container">
        <div id="header">Pick add-ons</div>
        <div id="header-desc">Add-ons help enhance your gaming experience.</div>
      </div>
      <div id="addons">
        {addons.map((addon, index) => (
          <div
            className="addon"
            key={index}
            onClick={(e) => toggleAddon(e, index)}
          >
            <img src={check} alt="check" />
            <div id="info">
              <p>{addon.name}</p>
              <p>{addon.desc}</p>
            </div>
            <p id="price">
              +$
              {currentPlanType == "mo" ? addon.monthlyPrice : addon.yearlyPrice}
              /{currentPlanType}
            </p>
          </div>
        ))}
      </div>
      <div id="actions">
        <button id="go-back">Go Back</button>
        <button id="next-step">Next Step</button>
      </div>
    </div>
  );
};

export default Step3;
