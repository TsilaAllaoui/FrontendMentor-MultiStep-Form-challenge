import PlanModel from "../models/PlanModel";
import "../styles/Plan.scss";

const Plan = ({ plan, planType }: { plan: PlanModel; planType: string }) => {
  const updatePlan = (e: React.MouseEvent<HTMLDivElement>) => {
    const plans: NodeListOf<HTMLDivElement> =
      document.querySelectorAll("#plan");
    plans.forEach((plan) => (plan.style.backgroundColor = "white"));
    e.currentTarget.style.backgroundColor = "rgba(128, 128, 128, 0.128)";
  };

  return (
    <div id="plan" onClick={updatePlan}>
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
