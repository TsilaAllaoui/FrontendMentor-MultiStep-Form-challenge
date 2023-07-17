import { useRef } from "react";
import "../styles/Step1.scss";

const Step1 = () => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);

  let nameError = "";
  let emailError = "";
  let phoneError = "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value == "") {
      e.currentTarget.style.outline = "solid 1.5px rgb(212, 64, 80)";
      const divErrorElement = e.currentTarget.previousSibling as HTMLDivElement;
      const errorElement = divErrorElement.lastElementChild as HTMLDivElement;
      errorElement.textContent = "This field is required";
    }
  };
  return (
    <div id="step-1">
      <div id="headers-container">
        <div id="header">Personal info</div>
        <div id="header-desc">
          Please provide your name, email, address, adn phone number.
        </div>
      </div>
      <div className="input">
        <div id="label-line">
          <label>Name</label>
          <div>{nameError}</div>
        </div>
        <input
          type="text"
          placeholder="e.g.Stephen King"
          ref={nameRef}
          onChange={handleChange}
        />
      </div>
      <div className="input">
        <div id="label-line">
          <label>Email Address</label>
          <div>{emailError}</div>
        </div>
        <input
          type="text"
          placeholder="e.g.stephenking@lorem.com"
          ref={emailRef}
          onChange={handleChange}
        />
      </div>
      <div className="input">
        <div id="label-line">
          <label>Phone Number</label>
          <div>{phoneError}</div>
        </div>
        <input
          type="text"
          placeholder="e.g.+1234567890"
          ref={phoneRef}
          onChange={handleChange}
        />
      </div>
      <div id="button-container">
        <button>Next Step</button>
      </div>
    </div>
  );
};

export default Step1;
