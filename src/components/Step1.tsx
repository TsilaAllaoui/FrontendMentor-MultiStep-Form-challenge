import Step from "../models/Step";
import "../styles/Step1.scss";
import StepsIndicator from "./StepsIndicator";
import bg from "../assets/images/bg-sidebar-desktop.svg";

const Step1 = () => {

    const steps: Step[] = [
        { desc: "YOUR INFO", active: true },
        { desc: "SELECT PLAN", active: false },
        { desc: "ADD-ONS", active: false },
        { desc: "SUMMARY", active: false },
    ];

    return <div id="step-1">
        <div id="indicator">
            <StepsIndicator steps={steps} bg={bg} />
        </div>
        <div id="inputs">
            <h1>Personal info</h1>
            <h3>PLease provide your name, email, address, adn phone number.</h3>
            <div className="input">
                <label>Name</label>
                <input type="text" placeholder="e.g.Stephen King" />
            </div>
            <div className="input">
                <label>Email Address</label>
                <input type="text" placeholder="e.g.stephenking@lorean.com" />
            </div>
            <div className="input">
                <label>Email Address</label>
                <input type="text" placeholder="e.g.+1234567890" />
            </div>
            <button>Next Step</button>
        </div>
    </div>
}

export default Step1;