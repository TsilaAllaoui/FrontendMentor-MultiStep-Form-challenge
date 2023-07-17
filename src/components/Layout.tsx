import { Outlet } from "react-router-dom";
import StepsIndicator from "./StepsIndicator";
import Step from "../models/Step";
import bg from "../assets/images/bg-sidebar-desktop.svg";

const Layout = ({
  steps,
  currentStep,
}: {
  steps: Step[];
  currentStep: number;
}) => {
  return (
    <div id="layout">
      <StepsIndicator steps={steps} bg={bg} currentStep={currentStep} />
      <Outlet />
    </div>
  );
};

export default Layout;
