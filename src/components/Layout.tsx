import { Outlet } from "react-router-dom";
import StepsIndicator from "./StepsIndicator";
import Step from "../models/Step";
import bg from "../assets/images/bg-sidebar-desktop.svg";
import bgMobile from "../assets/images/bg-sidebar-mobile.svg";
import "../styles/Layout.scss";

const Layout = ({
  steps,
  currentStep,
}: {
  steps: Step[];
  currentStep: number;
}) => {
  return (
    <div id="layout">
      <StepsIndicator
        steps={steps}
        bg={window.screen.width > 416 ? bg : bgMobile}
        currentStep={currentStep}
      />
      <Outlet />
    </div>
  );
};

export default Layout;
