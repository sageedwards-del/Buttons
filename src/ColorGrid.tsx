import React, { useState } from "react";
import "./ColorGrid.css";

function ColorGrid() {
  const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const colors = [
    "lightblue",
    "lightcoral",
    "lightgreen",
    "plum",
    "khaki",
    "lightpink",
    "lightyellow",
    "lightgray",
    "lightsalmon",
  ];

  const [lastClickedButton, setLastClickedButton] = useState<number | null>(null);

  const pageColor =
    lastClickedButton === null ? "transparent" : colors[lastClickedButton - 1];

  return (
    <div className="color-grid" style={{ backgroundColor: pageColor }}>
      <div className="description-container">
        <h1>Welcome to your first React App!</h1>
        <p>
          When you click a button, the background color of the page should change.
          These buttons could also be arranged in a prettier way...
        </p>
      </div>

      <div className="button-container">
        {buttons.map((num) => (
          <button
            className="grid-button"
            key={num}
            id={"button-" + num}
            style={{ backgroundColor: colors[num - 1] }}
            onClick={() => setLastClickedButton(num)}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ColorGrid;
