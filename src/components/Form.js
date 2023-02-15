import React from "react";
import { motion, useInView } from "framer-motion";

import "./form.css";

export default function Form() {
  return (
    <div className='formContainer'>
      <form>
        <fieldset className='formField'>
          <motion.legend
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ type: "spring", duration: 1, bounce: 0.3 }}
          >
            Contact <span className='green'>Us</span>
          </motion.legend>
          <div className='formFieldContainer'>
            <input id='name' className='formTalk' type='text' required />
            <label htmlFor='name'>Name:</label>
          </div>
          <div className='formFieldContainer'>
            <input id='email' className='formEmail' type='text' required />
            <label htmlFor='email'>E-mail:</label>
          </div>
          <div className='formFieldContainer message'>
            <textarea
              id='message'
              className='formText'
              placeholder='Write a message...'
              required
            />
          </div>
          <button className='submitButton'>Submit</button>
        </fieldset>
      </form>
    </div>
  );
}
