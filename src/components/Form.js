import React from "react";
import { motion, useInView } from "framer-motion";

import "./form.css";

export default function Form() {

    return (<div className="formContainer">
        <form>
            <fieldset className="formField">
                <motion.legend
                            initial={{ x: -100 }}
                            whileInView={{ x: 0 }}
                            transition={{ type: "spring", duration: 1, bounce: 0.3 }}
                >Contact <span className="green">Us</span></motion.legend>
                <input className="formTalk" type="text" placeholder="Talk to us"/>
                <input className="formEmail" type="text" placeholder="Email"/>
                <textarea className="formText" placeholder="Write a message..."/>
            </fieldset>

        </form>

    </div>)
}