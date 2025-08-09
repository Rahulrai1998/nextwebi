// import React from "react";

// const Tab = ({
//   children,
//   tab,
//   handleChange,
//   handleKeyDown,
//   selected,
//   index,
// }) => {
//   return (
//     <button
//       key={tab.id}
//       ref={(el) => (tabRefs.current[index] = el)}
//       id={`tab-${tab.id}`}
//       role="tab"
//       aria-selected={selected === index}
//       aria-controls={`tabpanel-${index}`}
//       onClick={() => handleChange(index)}
//       onKeyDown={(e) => handleKeyDown(e, index)}
//       style={{ border: index === selected ? "red solid 1px" : null }}
//     >
//       {children}
//     </button>
//   );
// };

// export default Tab;
