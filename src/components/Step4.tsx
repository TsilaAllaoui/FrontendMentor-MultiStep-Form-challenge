import { useNavigate } from "react-router-dom";
import "../styles/Step4.scss";
import UserInfos from "../models/UserInfos";
import { UserPlan } from "../models/PlanModel";
import { UserAddon } from "../models/AddonModel";
import { useEffect, useState } from "react";

const Step4 = ({
  setCurrentStep,
  userInfos,
  userPlan,
  userAddons,
}: {
  setCurrentStep: (index: number) => void;
  userInfos: UserInfos;
  userPlan: UserPlan;
  userAddons: UserAddon[];
}) => {
  const navigate = useNavigate();

  const next = () => {
    navigate("/validation");
  };

  const previous = () => {
    setCurrentStep(2);
    navigate("/addons");
  };

  const [totalAddons, setTotalAddons] = useState(0);
  useEffect(() => {
    let t = 0;
    if (userAddons)
      userAddons.forEach((addon) => {
        t += addon.price;
      });
    setTotalAddons(t);
  }, [userAddons]);

  const [total, setTotal] = useState(userPlan.price + totalAddons);

  return (
    <div id="step-4">
      <div id="headers-container">
        <div id="header">Finishing up</div>
        <div id="header-desc">
          Double-check everything looks OK before confirming.
        </div>
      </div>
      <div id="summary">
        <div id="plan-summary">
          <div>
            <p>
              {userPlan.name} ({userPlan.type == "mo" ? "Monthly" : "Yearly"})
            </p>
            <p>
              <u>Change</u>
            </p>
          </div>
          <div id="plan-total">
            ${userPlan.price}/{userPlan.type}
          </div>
        </div>
        <div id="separator"></div>
        <div id="addon-summary">
          {userAddons &&
            userAddons.map((addon) => (
              <div className="addon">
                <p>{addon.name}</p>
                <p>
                  +${addon.price}/{addon.type}
                </p>
              </div>
            ))}
        </div>
      </div>
      <div id="total">
        <p>Total (per {userPlan.type == "mo" ? "month" : "year"})</p>
        <p>
          +${total}/{userPlan.type}
        </p>
      </div>
      <div id="actions">
        <button id="go-back" onClick={previous}>
          Go Back
        </button>
        <button id="next-step" onClick={next}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Step4;
