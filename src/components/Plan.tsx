import PlanModel from "../models/PlanModel";
import "../styles/Plan.scss";

const Plan = ({
  plan,
  planType,
  index,
  bgColor,
  setCurrentPlan,
}: {
  plan: PlanModel;
  planType: string;
  index: number;
  bgColor: string;
  setCurrentPlan: (i: number) => void;
}) => {
  const updatePlan = (e: React.MouseEvent<HTMLDivElement>) => {
    setCurrentPlan(index);
  };

  return (
    <div
      id="plan"
      onClick={updatePlan}
      style={{
        backgroundColor: bgColor,
      }}
    >
      <img src={plan.icon} alt={plan.icon} />
      <div id="info">
        <p>{plan.name}</p>
        <p>
          ${planType == "mo" ? plan.monthlyPrice : plan.yearlyPrice}/{planType}
        </p>
        <p>{planType == "year" ? "2 month free" : ""}</p>
      </div>
    </div>
  );
};

export default Plan;
