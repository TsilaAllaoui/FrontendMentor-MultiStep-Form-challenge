import "./App.scss";
import Step from "./models/Step";
import Step1 from "./components/Step1";
import { useState } from "react";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import UserInfos from "./models/UserInfos";
import { UserPlan } from "./models/PlanModel";
import { UserAddon } from "./models/AddonModel";
import End from "./components/End";

function App() {
  const steps: Step[] = [
    { desc: "YOUR INFO", active: true },
    { desc: "SELECT PLAN", active: false },
    { desc: "ADD-ONS", active: false },
    { desc: "SUMMARY", active: false },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const [userInfos, setUserInfos] = useState<UserInfos>({
    name: "unknown",
    email: "unknown",
    phone: "unknown",
  });
  console.log(userInfos); // To prevent error for deployment

  const [userPlan, setUserPlan] = useState<UserPlan>({
    name: "unknown",
    price: -1,
    type: "unknown",
  });
  const [userAddons, setUserAddons] = useState<UserAddon[]>([]);
  const [planType, setPlanType] = useState("mo");

  return (
    <div id="app">
      <Routes>
        <Route
          path="/"
          element={<Layout steps={steps} currentStep={currentStep} />}
        >
          <Route
            index
            element={
              <Step1
                setCurrentStep={setCurrentStep}
                setUserInfos={setUserInfos}
              />
            }
          />
          <Route
            path="plans"
            element={
              <Step2
                setCurrentStep={setCurrentStep}
                setUserPlan={setUserPlan}
                setPlanType={setPlanType}
              />
            }
          />
          <Route
            path="addons"
            element={
              <Step3
                setCurrentStep={setCurrentStep}
                setUserAddons={setUserAddons}
                planType={planType}
              />
            }
          />
          <Route
            path="finish"
            element={
              <Step4
                setCurrentStep={setCurrentStep}
                userPlan={userPlan}
                userAddons={userAddons}
              />
            }
          />
          <Route
            path="end"
            element={
              <End />
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
