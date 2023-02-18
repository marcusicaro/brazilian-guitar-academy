import React from "react";
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
        <Accordion transition transitionTimeout={200}>
          <AccordionItem header='What is Lorem Ipsum?' initialEntered>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. asdas
            das d as das das as as das das das das ddasdasdas dsa das dasdasdsad
            as dasd as Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            asdas das d as das das as as das das das das ddasdasdas dsa das
            dasdasdsad as dasd as Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. asdas das d as das das as as das das das das
            ddasdasdas dsa das dasdasdsad as dasd as
          </AccordionItem>

          <AccordionItem header='Where does it come from?'>
            Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel
            erat quis sodales. Nam ex enim, eleifend venenatis lectus vitae.
          </AccordionItem>

          <AccordionItem header='Why do we use it?'>
            Suspendisse massa risus, pretium id interdum in, dictum sit amet
            ante. Fusce vulputate purus sed tempus feugiat.
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
