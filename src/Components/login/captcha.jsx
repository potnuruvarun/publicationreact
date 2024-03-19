import React from "react";
import { useState,useRef} from "react";
import ReCAPTCHA from "react-google-recaptcha";
// const SITE_KEY = process.env.REACT_APP_reCAPTCHA_SITE_KEY;
// const SECRET_KEY = process.env.REACT_APP_reCAPTCHA_SECRET_KEY;
const SITE_KEY ="6LdMwJwpAAAAAKk1ehUBiMkfETqefth2mLUKf0yY";

export default function Captcha() {
    const recaptcha = useRef(null);
    async function handleSubmit(event){
        debugger
        event.preventDefault();
        const token = recaptcha.current.getValue();
        console.log(token);
    }

    return (
        <>
        <form action="" onSubmit={handleSubmit}>
        {/* < ReCAPTCHA ref={recaptcha} sitekey={process.env.REACT_APP_SITE_KEY} /> */}
        <ReCAPTCHA sitekey={SITE_KEY} ref={recaptcha} />
        </form>
        </>
    )

}