import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
// import chevronDown from "./chevron-down.svg";
import styles from "./styles.module.css";
import { FaChevronRight } from "react-icons/fa";

/**
 * @type {React.ExoticComponent<import('@szhsin/react-accordion').AccordionItemProps>}
 */
export const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={
      <>
        {header}
        <span className={styles.chevron}>{<FaChevronRight />}</span>
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

export default function AccordionProvider({ children }) {
  return (
    <div className={styles.accordion}>
      <Accordion transition transitionTimeout={250}>
        {children}
        {/* <AccordionItem header="What is Lorem Ipsum?" initialEntered>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </AccordionItem> */}
      </Accordion>
    </div>
  );
}
