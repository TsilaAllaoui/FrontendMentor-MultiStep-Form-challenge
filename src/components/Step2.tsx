import "../styles/Step2.scss";
import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";
import PlanModel from "../models/PlanModel";
import Plan from "./Plan";
import { useState } from "react";

const Step2 = () => {
  const plans: PlanModel[] = [
    { icon: arcade, name: "Arcade", monthlyPrice: 9, yearlyPrice: 90 },
    { icon: advanced, name: "Advanced", monthlyPrice: 12, yearlyPrice: 120 },
    { icon: pro, name: "Pro", monthlyPrice: 15, yearlyPrice: 150 },
  ];

  const [planType, setPlanType] = useState("mo");

  const changePlanType = (e: React.MouseEvent<HTMLDivElement>) => {
    const circle = e.currentTarget.querySelector("#circle") as HTMLDivElement;
    circle.style.left = circle.style.left == "0px" ? "45%" : "0px";
    circle.style.right = circle.style.right == "0px" ? "45%" : "0px";
    setPlanType((planType) => (planType == "mo" ? "year" : "mo"));
  };

  return (
    <div id="step-2">
      <div id="headers-container">
        <div id="header">Select your plan</div>
        <div id="header-desc">
          You have the option of monthlyor yearly billing.
        </div>
      </div>
      <div id="plans">
        {plans.map((plan) => (
          <Plan plan={plan} planType={planType} key={plan.name} />
        ))}
      </div>
      <div id="plan-type">
        <p
          style={{
            color:
              planType == "mo"
                ? "rgb(1, 41, 92)"
                : "rgba(128, 128, 128, 0.628)",
          }}
        >
          Monthly
        </p>
        <div id="switch" onClick={changePlanType}>
          <div id="circle" style={{ left: "0px", right: "50%" }}></div>
        </div>
        <p
          style={{
            color:
              planType == "year"
                ? "rgb(1, 41, 92)"
                : "rgba(128, 128, 128, 0.628)",
          }}
        >
          Yearly
        </p>
      </div>
      <div id="actions">
        <button id="go-back">Go Back</button>
        <button id="next-step">Next Step</button>
      </div>
    </div>
  );
};

export default Step2;
