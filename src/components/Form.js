import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

import "./form.css";

export default function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fagbcfr",
        "template_sxgk76p",
        form.current,
        "xLf0Nv4ajbskzMIOg"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className='formContainer'>
      <motion.form
        ref={form}
        initial={{ opacity: 0.0 }}
        transition={{ ease: "easeOut", duration: 1.5 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <fieldset className='formField'>
          <motion.legend
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ type: "spring", duration: 1, bounce: 0.3 }}
            viewport={{ once: true }}
            variants={{ delayChildren: 50 }}
          >
            Contact <span className='green'>Us</span>
          </motion.legend>
          <div className='formFieldContainer'>
            <input
              id='name'
              className='formTalk'
              name='user_name'
              type='text'
              required
            />
            <label htmlFor='name'>Name:</label>
          </div>
          <div className='formFieldContainer'>
            <input
              id='email'
              className='formEmail'
              name='user_email'
              type='email'
              required
            />
            <label htmlFor='email'>E-mail:</label>
          </div>
          <div className='formFieldContainer message'>
            <textarea
              id='message'
              className='formText'
              placeholder='Write a message...'
              name='message'
              required
            />
          </div>
          <button className='submitButton' value='Submit'>
            Submit
          </button>
        </fieldset>
      </motion.form>
    </div>
  );
}
