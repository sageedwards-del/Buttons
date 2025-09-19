import React, { useState } from "react";
import "./App.css";

function App() {
  // TODO: Create a state to track which button is active

  const correctColor = "#A7F3D0";

  const errorColors = [
    "#FFD6A5", // Button 2
    "#FF0000", // Button 3
    "#7F00FF", // Button 4
    "#000000", // Button 5
    "#FFFF00", // Button 6
    "#FF69B4", // Button 7
    "#00FFFF", // Button 8
    "#FFFFFF", // Button 9
  ];

  const buttons = Array.from({ length: 9 }, (_, i) => i + 1);

  // TODO: Set the page background color based on active button
  // const pageColor = ...;

  return (
    // TODO: Apply page background color using style={{ backgroundColor: pageColor }}
    <div className="App">
      <div>
        {buttons.map((num) => {
          if (num === 1) {
            return (
              <button
                key={num}
                // TODO: Add onClick to set active button
                style={{
                  backgroundColor: correctColor,
                }}
              >
                {num}
              </button>
            );
          }

          if (num === 2) {
            // TODO: Fix
            return (
              <button key={num} style={{}}>
                {num}
              </button>
            );
          }

          if (num === 2) {
            return (
              <button
                key={num}
                // TODO:Fix
                style={{
                  backgroundColor: "red",
                }}
              >
                {num}
              </button>
            );
          }

          if (num === 4) {
            return (
              <button
                // TODO: Fix
                style={{
                  backgroundColor: "purple",
                  width: "60px",
                }}
              >
                {num}
              </button>
            );
          }

          if (num === 5) {
            return (
              <button
                key={num}
                // TODO: Fix
                style={{
                  backgroundColor: "black",
                  width: "80px",
                }}
              >
                {num}
              </button>
            );
          }

          if (num === 6) {
            return (
              <button
                key={num}
                className="nonExistentClass"
                // TODO: Fix
              >
                {num}
              </button>
            );
          }

          if (num === 7) {
            return (
              <button
                key={num}
                // TODO: Fix
                style={{
                  backgroundColor: "pink",
                  width: "80px",
                }}
              >
                {num}
              </button>
            );
          }

          if (num === 8) {
            return (
              <button
                key={num}
                // TODO: Fix
                style={{
                  backgroundColor: "cyan",
                  width: "80px",
                }}
              >
                {num}
              </button>
            );
          }

          if (num === 9) {
            return (
              <button
                key={num}
                // TODO: Fix
              >
                {num}
              </button>
            );
          }

          return null;
        })}
      </div>
    </div>
  );
}

export default App;
