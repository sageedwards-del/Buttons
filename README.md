# Mock

Sample code for the mock gearup

## Installation

npm install
TODO

## Running the Server

Build with npm run build, then run wtih npm run start.
TODO

## Scripts

| Command              | Description                                 |
| -------------------- | ------------------------------------------- |
| `npm run clean`      | Cleanup.                                    |
| `npm run build`      | Build ts code into js.                      |
| `npm run start`      | Start server.                               |
| `npm run test`       | Run all unit tests using vitest.            |
| `npm run playwright` | Run all integration tests using playwright. |

## TODOs

### src/App.tsx

- [ ] Create a `useState` hook to track which button is active.
- [ ] Compute `pageColor` based on the active button.
- [ ] Apply `pageColor` as the background of `<div className="App">`.
- [ ] Refactor the button rendering logic:
  - [ ] Add `onClick` for each button to set it as active.
  - [ ] Ensure all buttons have consistent square dimensions (use `width` + `aspectRatio`).

### src/App.css

- [ ] Center the button container both vertically and horizontally.
- [ ] Make the container a 3x3 grid.
- [ ] Style buttons to be square with consistent sizing.

### src/filename.html

- [ ] Add a `<div>` container to the `<body>`.
- [ ] Inside the `<div>`, add a `<button>` element.
- [ ] (Optional) Style the `<div>` and `<button>` with basic CSS for layout and visibility.
