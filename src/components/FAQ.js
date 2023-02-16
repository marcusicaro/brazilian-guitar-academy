import React, { useState } from "react";

import faqData from "./FAQdata";

import "./faq.css";

export default function FAQ() {
  const [selected, setSelected] = useState(null);

  function handleToggle(i) {
    selected === i ? setSelected(null) : setSelected(i);
  }

  return (
    <div className='wrapper'>
      <div className='accordion'>
        {faqData.map((item, i) => (
          <div className='item'>
            <div className='title'>
              {item.question}
              <span onClick={() => handleToggle(i)} className={selected === i ? "pointer rotate" : "pointer"}>
                V
              </span>
            </div>
            <div
              className={selected === i ? "content show" : "content" }
              // style={{ display: selected === i ? "block" : "none" }}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
