# Mock

Sample code for the mock gearup  
Created with create-react-app. See the [full create-react-app guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## How To

### raw-html webpage

- navigate to raw-html/playground.html
- right click on playground.html in the file explorer
- select "Open with Live Server"

### react app

- run `npm install` to install dependencies
- run `npm start` to start the application locally

### tests

## Scripts

| Command              | Description                            |
| -------------------- | -------------------------------------- |
| `npm install`        | Install dependencies                   |
| `npm run start`      | Start the webapp                       |
| `npm run test`       | Run react unit tests                   |
| `npm run playwright` | Run playwright tests                   |
| `npm run build`      | Creates optimized files for production |
| `npm run eject`      | Exposes configuration files.           |

For this gearup, you'll only need to use `npm install`, `npm run start`, and `npm run playwright`

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
