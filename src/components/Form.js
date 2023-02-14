import React from "react";

import "./form.css";

export default function Form() {

    return (<div className="formContainer">
        <form>
            <fieldset className="formField">
                <legend>Contact Us</legend>
                <input className="formTalk" type="text" placeholder="Talk to us"/>
                <input className="formEmail" type="text" placeholder="Email"/>
                <textarea className="formText" placeholder="Write a message..."/>
            </fieldset>

        </form>

    </div>)
}