import "./App.scss";
import Step from "./models/Step";
import Step1 from "./components/Step1";
import { useState } from "react";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

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
      <Routes>
        <Route
          path="/"
          element={<Layout steps={steps} currentStep={currentStep} />}
        >
          <Route index element={<Step1 setCurrentStep={setCurrentStep} />} />
          <Route
            path="plans"
            element={<Step2 setCurrentStep={setCurrentStep} />}
          />
          <Route
            path="addons"
            element={<Step3 setCurrentStep={setCurrentStep} />}
          />
          <Route
            path="finish"
            element={<Step4 setCurrentStep={setCurrentStep} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
