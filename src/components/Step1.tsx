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
        <StepsIndicator steps={steps} bg={bg} />
        <div id="inputs">
            <div id="inputs-container">
                <div>
                    <div id="header">Personal info</div>
                    <div id="header-desc">Please provide your name, email, address, adn phone number.</div>
                </div>
                <div className="input">
                    <label>Name</label>
                    <input type="text" placeholder="e.g.Stephen King" />
                </div>
                <div className="input">
                    <label>Email Address</label>
                    <input type="text" placeholder="e.g.stephenking@lorem.com" />
                </div>
                <div className="input">
                    <label>Phone Number</label>
                    <input type="text" placeholder="e.g.+1234567890" />
                </div>
            </div>
            <div id="button-container"><button>Next Step</button></div>
        </div>
    </div>
}

export default Step1;