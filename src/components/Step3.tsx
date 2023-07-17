import "../styles/Step3.scss";
import check from "../assets/images/icon-checkmark.svg";
import AddonModel from "../models/AddonModel";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Step3 = ({
  setCurrentStep,
}: {
  setCurrentStep: (index: number) => void;
}) => {
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

  const navigate = useNavigate();

  const next = () => {
    setCurrentStep(3);
    navigate("/finish");
  };

  const previous = () => {
    setCurrentStep(1);
    navigate("/plans");
  };

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
        <button id="go-back" onClick={previous}>
          Go Back
        </button>
        <button id="next-step" onClick={next}>
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Step3;
