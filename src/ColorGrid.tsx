import React, { useState } from "react";
import "./ColorGrid.css";

function ColorGrid() {

  // Our nine buttons that we'll render!
  // You could also do Array.from({ length: 9 }, (_, i) => i + 1);
  const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // The colors for the buttons
  // Feel free to change these colors! You can use color names, hex codes, rgb(), hsl(), etc.
  const colors = [
    "lightblue",    // Button 1
    "lightcoral",   // Button 2
    "lightgreen",   // Button 3
    "plum",         // Button 4
    "khaki",        // Button 5
    "lightpink",    // Button 6
    "lightyellow",  // Button 7
    "lightgray",    // Button 8
    "lightsalmon",  // Button 9
  ];

  // TODO #2: Create a useState hook to track which button was last clicked. Slide 31 might help with this!
  // You can store the color for that button, or the button number (1-9)
  // const...

  return (
    // TODO #4 : Apply page background color using style={{ backgroundColor: pageColor }}
    <div className="color-grid">

      <div className="description-container">
        <h1>Welcome to your first React App!</h1>
        <p>When you click a button, the background color of the page should change. These buttons could also be arranged in a prettier way...</p>
      </div>

      <div className="button-container">
        {buttons.map((num) => (
          <button
            className="grid-button"
            key={num}
            id={"button-" + num}
            style={{ backgroundColor: colors[num - 1] }}
            // TODO #3 : Add an onClick handler that updates the last clicked button state
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ColorGrid;
