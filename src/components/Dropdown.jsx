// Dropdown.jsx
import { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function Dropdown({ label, options = [] }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <li className="dropdown" ref={dropdownRef}>
      <button
        className="dropdown-btn"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="true"
        aria-expanded={open}
      >
        {label}
        <span className="dropdown-icon">
          <FaChevronDown />
        </span>
      </button>

      {open && (
        <ul className="dropdown-menu">
          {options.map((option, idx) => (
            <li key={idx}>
              <a href={option.href}>{option.label}</a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
