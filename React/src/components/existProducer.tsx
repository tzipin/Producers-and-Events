import { useState } from "react";
import { ProducerDetails } from "./producerDetails";

export const ExistProducer = () => {
    const [email, setEmail] = useState();
    const [submitted, setSubmitted] = useState(false);
    const conect = (event: any) => {
        event.preventDefault();
        const currentEmail = event.target.email.value;
        setEmail(currentEmail);
        setSubmitted(true);
    }
    return(
        <>
            <h3>ברוכה השבה</h3>
            <p>הכניסי כתובת מייל</p>
            <form onSubmit={conect}>
                <input name="email" type="text" /><br/>
                <button type="submit">התחברות</button>
            </form>
            {submitted && <ProducerDetails email={email} />}
        </>
    )
}