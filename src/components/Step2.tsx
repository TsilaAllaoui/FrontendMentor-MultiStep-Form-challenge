import "../styles/Step2.scss";
import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";
import { PlanModel, UserPlan } from "../models/PlanModel";
import Plan from "./Plan";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Step2 = ({
  setCurrentStep,
  setUserPlan,
  setPlanType,
}: {
  setCurrentStep: (index: number) => void;
  setUserPlan: (index: UserPlan) => void;
  setPlanType: (type: string) => void;
}) => {
  const plans: PlanModel[] = [
    { icon: arcade, name: "Arcade", monthlyPrice: 9, yearlyPrice: 90 },
    { icon: advanced, name: "Advanced", monthlyPrice: 12, yearlyPrice: 120 },
    { icon: pro, name: "Pro", monthlyPrice: 15, yearlyPrice: 150 },
  ];

  const [_planType, _setPlanType] = useState("mo");
  const [currentPlan, setCurrentPlan] = useState(0);

  const changePlanType = (e: React.MouseEvent<HTMLDivElement>) => {
    const circle = e.currentTarget.querySelector("#circle") as HTMLDivElement;
    circle.style.left = circle.style.left == "0px" ? "45%" : "0px";
    circle.style.right = circle.style.right == "0px" ? "45%" : "0px";
    _setPlanType(circle.style.left == "45%" ? "year" : "mo");
    setPlanType(circle.style.left == "45%" ? "year" : "mo");
  };

  const navigate = useNavigate();

  const next = () => {
    const plan = plans[currentPlan];
    const userPlan: UserPlan = {
      name: plan.name,
      price: _planType == "mo" ? plan.monthlyPrice : plan.yearlyPrice,
      type: _planType,
    };

    setUserPlan(userPlan);

    setCurrentStep(2);
    navigate("/addons");
  };

  const previous = () => {
    setCurrentStep(0);
    navigate("/");
  };

  return (
    <>
      <div id="step-2">
        <div id="headers-container">
          <div id="header">Select your plan</div>
          <div id="header-desc">
            You have the option of monthlyor yearly billing.
          </div>
        </div>
        <div id="plans">
          {plans.map((plan, index) => (
            <Plan
              plan={plan}
              planType={_planType}
              index={index}
              setCurrentPlan={setCurrentPlan}
              bgColor={
                index == currentPlan ? "rgba(128, 128, 128, 0.428)" : "white"
              }
              key={plan.name}
            />
          ))}
        </div>
        <div id="plan-type">
          <p
            style={{
              color:
                _planType == "mo"
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
                _planType == "year"
                  ? "rgb(1, 41, 92)"
                  : "rgba(128, 128, 128, 0.628)",
            }}
          >
            Yearly
          </p>
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
      <div id="actions-mobile">
        <button id="go-back-mobile" onClick={previous}>
          Go Back
        </button>
        <button id="next-step-mobile" onClick={next}>
          Next Step
        </button>
      </div>
    </>
  );
};

export default Step2;
