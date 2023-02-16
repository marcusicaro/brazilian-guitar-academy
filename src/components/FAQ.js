import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

import faqData from "./FAQdata";

import "./faq.css";

export default function FAQ() {
  const [selected, setSelected] = useState(null);
  const [faqListStatus, setFaqListStatus] = useState(
    faqData.map((item, i) => ({
      index: i,
      visibility: false,
    }))
  );

  function handleToggle(i) {
    selected === i ? setSelected(null) : setSelected(i);
  }

  return (
    <div className='wrapper'>
      <div className='faqContainer'>
        <div className='faqTitleContainer'>
          <motion.h2
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ type: "spring", duration: 1, bounce: 0.3 }}
            className='faqTitle'
          >
            F
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: "spring", duration: 2 }}
            style={{ color: "#2ea44f" }}
          >
            A
          </motion.h2>
          <motion.h2
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ type: "spring", duration: 1, bounce: 0.3 }}
            className='faqTitle'
          >
            Q
          </motion.h2>
        </div>

        <div className='accordion'>
          {faqData.map((item, i) => (
            <div className='item'>
              <div className='title' onClick={() => handleToggle(i)}>
                {item.question}
                <span className={selected === i ? "pointer rotate" : "pointer"}>
                  <FontAwesomeIcon icon={faAngleDoubleDown} />
                </span>
              </div>
              <div
                className={selected === i ? "content show" : "content"}
                // style={{ display: selected === i ? "block" : "none" }}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
