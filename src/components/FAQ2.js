import React from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.css";

/**
 * @type {React.ExoticComponent<import('@szhsin/react-accordion').AccordionItemProps>}
 */
const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={
      <>
        {header}
        <FontAwesomeIcon
          icon={faAngleDoubleDown}
          className={styles.chevron}
          src={""}
          alt='Chevron Down'
        />
      </>
    }
    className={styles.item}
    buttonProps={{
      className: ({ isEnter }) =>
        `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`,
    }}
    contentProps={{ className: styles.itemContent }}
    panelProps={{ className: styles.itemPanel }}
  />
);

export default function FAQ2() {
  return (
    <div className={styles.faqSection}>
      <div className={styles.app}>
        <Accordion transition transitionTimeout={200} allowMultiple>
          <motion.div
            initial={{ opacity: 0.0 }}
            transition={{ ease: "easeOut", duration: 1.5 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <AccordionItem
              header='What is Lorem Ipsum?'
              className={styles.faqTitle}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                asdas das d as das das as as das das das das ddasdasdas dsa das
                dasdasdsad as dasd as Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. asdas das d as das das as as das das das
                das ddasdasdas dsa das dasdasdsad as dasd as Lorem ipsum dolor
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. asdas das d as das
                das as as das das das das ddasdasdas dsa das dasdasdsad as dasd
                as
              </p>
            </AccordionItem>
          </motion.div>

          <motion.div
            initial={{ opacity: 0.0 }}
            transition={{ ease: "easeOut", duration: 1.5 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <AccordionItem
              header='What is Lorem Ipsum?'
              className={styles.faqTitle}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                asdas das d as das das as as das das das das ddasdasdas dsa das
                dasdasdsad as dasd as Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. asdas das d as das das as as das das das
                das ddasdasdas dsa das dasdasdsad as dasd as Lorem ipsum dolor
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. asdas das d as das
                das as as das das das das ddasdasdas dsa das dasdasdsad as dasd
                as
              </p>
            </AccordionItem>
          </motion.div>

          <motion.div
            initial={{ opacity: 0.0 }}
            transition={{ ease: "easeOut", duration: 1.5 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <AccordionItem
              header='What is Lorem Ipsum?'
              className={styles.faqTitle}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                asdas das d as das das as as das das das das ddasdasdas dsa das
                dasdasdsad as dasd as Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. asdas das d as das das as as das das das
                das ddasdasdas dsa das dasdasdsad as dasd as Lorem ipsum dolor
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. asdas das d as das
                das as as das das das das ddasdasdas dsa das dasdasdsad as dasd
                as
              </p>
            </AccordionItem>
          </motion.div>

          <motion.div
            initial={{ opacity: 0.0 }}
            transition={{ ease: "easeOut", duration: 1.5 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <AccordionItem
              header='What is Lorem Ipsum?'
              className={styles.faqTitle}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                asdas das d as das das as as das das das das ddasdasdas dsa das
                dasdasdsad as dasd as Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. asdas das d as das das as as das das das
                das ddasdasdas dsa das dasdasdsad as dasd as Lorem ipsum dolor
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. asdas das d as das
                das as as das das das das ddasdasdas dsa das dasdasdsad as dasd
                as
              </p>
            </AccordionItem>
          </motion.div>

          <motion.div
            initial={{ opacity: 0.0 }}
            transition={{ ease: "easeOut", duration: 1.5 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <AccordionItem
              header='What is Lorem Ipsum?'
              className={styles.faqTitle}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                asdas das d as das das as as das das das das ddasdasdas dsa das
                dasdasdsad as dasd as Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. asdas das d as das das as as das das das
                das ddasdasdas dsa das dasdasdsad as dasd as Lorem ipsum dolor
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. asdas das d as das
                das as as das das das das ddasdasdas dsa das dasdasdsad as dasd
                as
              </p>
            </AccordionItem>
          </motion.div>

          <motion.div
            initial={{ opacity: 0.0 }}
            transition={{ ease: "easeOut", duration: 1.5 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <AccordionItem
              header='What is Lorem Ipsum?'
              className={styles.faqTitle}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                asdas das d as das das as as das das das das ddasdasdas dsa das
                dasdasdsad as dasd as Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. asdas das d as das das as as das das das
                das ddasdasdas dsa das dasdasdsad as dasd as Lorem ipsum dolor
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. asdas das d as das
                das as as das das das das ddasdasdas dsa das dasdasdsad as dasd
                as
              </p>
            </AccordionItem>
          </motion.div>

          <motion.div
            initial={{ opacity: 0.0 }}
            transition={{ ease: "easeOut", duration: 1.5 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <AccordionItem
              header='What is Lorem Ipsum?'
              className={styles.faqTitle}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                asdas das d as das das as as das das das das ddasdasdas dsa das
                dasdasdsad as dasd as Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. asdas das d as das das as as das das das
                das ddasdasdas dsa das dasdasdsad as dasd as Lorem ipsum dolor
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. asdas das d as das
                das as as das das das das ddasdasdas dsa das dasdasdsad as dasd
                as
              </p>
            </AccordionItem>
          </motion.div>
          <motion.div
            initial={{ opacity: 0.0 }}
            transition={{ ease: "easeOut", duration: 1.5 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <AccordionItem
              header='What is Lorem Ipsum?'
              className={styles.faqTitle}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                asdas das d as das das as as das das das das ddasdasdas dsa das
                dasdasdsad as dasd as Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. asdas das d as das das as as das das das
                das ddasdasdas dsa das dasdasdsad as dasd as Lorem ipsum dolor
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. asdas das d as das
                das as as das das das das ddasdasdas dsa das dasdasdsad as dasd
                as
              </p>
            </AccordionItem>
          </motion.div>
          <motion.div
            initial={{ opacity: 0.0 }}
            transition={{ ease: "easeOut", duration: 1.5 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <AccordionItem
              header='What is Lorem Ipsum?'
              className={styles.faqTitle}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                asdas das d as das das as as das das das das ddasdasdas dsa das
                dasdasdsad as dasd as Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. asdas das d as das das as as das das das
                das ddasdasdas dsa das dasdasdsad as dasd as Lorem ipsum dolor
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. asdas das d as das
                das as as das das das das ddasdasdas dsa das dasdasdsad as dasd
                as
              </p>
            </AccordionItem>
          </motion.div>
        </Accordion>
      </div>
    </div>
  );
}
