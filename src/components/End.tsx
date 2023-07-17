import "../styles/End.scss";
import thankYou from "../assets/images/icon-thank-you.svg"

const End = () => {
    return <div id="end">
        <img src={thankYou} alt="thank-you" />
        <p>Thank you!</p>
        <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever neeed support, please feel free to email us at support@loremgaming.com.</p>
    </div>
}

export default End;