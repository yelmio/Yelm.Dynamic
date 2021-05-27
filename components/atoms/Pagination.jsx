import React from "react";
import { useContext } from "react";
import AppContext from "../../context/appProvider"

const Pagination = ({ value, onChange, range }) => {
	const appData = useContext(AppContext)
  let pattern = null;

  switch (true) {
    case range < 7:
      pattern = [...new Array(range)].map((_, i) => i + 1);
      break;
    case value < 4:
      pattern = [1, 2, 3, 4, 5, "...", range - 2, range - 1, range];
      break;
    case value > range - 4:
      pattern = [1, "...", range - 4, range - 3, range - 2, range - 1, range];
      break;
    default:
      pattern = [1, "...", value - 1, value, value + 1, "...", range];
  }

  function changeNumber(n) {
    if (typeof n === "number" && n > 0 && n <= range) {
      onChange(n);
    }
  }
  return (
    <div className="items-pagination">
      <button disabled={value <= 1} onClick={() => changeNumber(value - 1)}>
        {"<<"}
      </button>
      {pattern.map((label, index) => (
        <button
          className={value === label ? "active" : ""}
					style={value === label ? { borderBottom: `3px solid #${appData.settings.theme}`, color: `#${appData.settings.theme}`} : {}}
          onClick={() => changeNumber(label)}
          // isActive={value === label}
					key={index}
        >
          {label}
        </button>
      ))}
      <button disabled={value >= range} onClick={() => changeNumber(value + 1)}>
        {">>"}
      </button>
    </div>
  );
};

export default Pagination;