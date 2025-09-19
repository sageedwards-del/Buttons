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

- run `npx playwright install` to update playwright
- run `npm run playwright` to run tests

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

### Raw Html - raw-html/playground.html

1. Create a div, put a button in it, and give the button a color

### React Webapp

#### src/App.tsx

2. Create a `useState` hook to track which button is active
3. Add `onClick` for each button to set it as active
4. Apply `pageColor` as the background of `<div className="App">`

#### src/App.css

7. Center the button container both vertically and horizontally.
8. Style buttons to be square with consistent sizing.
9. Make the container a 3x3 grid.

### Playwright - tests/color-grid.test.ts

10. Write the test for button 6
