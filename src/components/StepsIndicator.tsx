import "../styles/StepsIndicator.scss";
import Step from "../models/Step";
import { useState } from "react";

const StepsIndicator = ({ steps, bg }: { steps: Step[], bg: string }) => {

    const [currentStep, setCurrentStep] = useState(0);

    return <div id="steps-indicator" style={{ backgroundImage: `url(${bg})` }}>
        {
            steps.length > 0 && steps.map((step, index) => {
                return <div className="step" key={index}>
                    <div id="index"
                        style={{
                            backgroundColor: index == currentStep ? "rgb(190, 225, 253)" : "rgb(72, 62, 255)",
                            color: index == currentStep ? "rgb(72, 62, 255)" : "rgb(190, 225, 253)"
                        }}>
                        {index + 1}
                    </div>
                    <div id="step-infos">
                        <div id="step-index">STEP {index + 1}</div>
                        <div id="desc">{step.desc}</div>
                    </div>
                </div>
            })
        }
    </div >
}

export default StepsIndicator;