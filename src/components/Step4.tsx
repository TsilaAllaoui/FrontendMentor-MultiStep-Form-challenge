import "../styles/Step4.scss";

const Step4 = () => {
  return (
    <div id="step-4">
      <div id="headers-container">
        <div id="header">Finishing up</div>
        <div id="header-desc">
          Double-check everything looks OK before confirming.
        </div>
      </div>
      <div id="summary">
        <div id="plan-summary">
          <div>
            <p>Arcade (Monthly)</p>
            <p>
              <u>Change</u>
            </p>
          </div>
          <div id="plan-total">$9/mo</div>
        </div>
        <div id="separator"></div>
        <div id="addon-summary">
          <div className="addon">
            <p>Online service</p>
            <p>+$1/mo</p>
          </div>
          <div className="addon">
            <p>Large storage</p>
            <p>+$2/mo</p>
          </div>
        </div>
      </div>
      <div id="total">
        <p>Total (per month)</p>
        <p>+$12/mo</p>
      </div>
      <div id="actions">
        <button id="go-back">Go Back</button>
        <button id="next-step">Confirm</button>
      </div>
    </div>
  );
};

export default Step4;
