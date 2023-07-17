import "./App.scss";
import bg from "./assets/images/bg-sidebar-desktop.svg";
import StepsIndicator from "./components/StepsIndicator";
import Step from "./models/Step";
import Step1 from "./components/Step1";
import { useState } from "react";
import Step2 from "./components/Step2";

function App() {
  const steps: Step[] = [
    { desc: "YOUR INFO", active: true },
    { desc: "SELECT PLAN", active: false },
    { desc: "ADD-ONS", active: false },
    { desc: "SUMMARY", active: false },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div id="app">
      <StepsIndicator steps={steps} bg={bg} currentStep={currentStep} />
      {/* <Step1 /> */}
      <Step2 />
    </div>
  );
}

export default App;
