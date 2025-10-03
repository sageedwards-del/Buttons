import { test, expect } from '@playwright/test';

// These tests assume your app runs on http://localhost:3000
// Tests for TODOs 1-9

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000');
});

// TODO #s 2, 3 & 4: Test that clicking buttons changes background color
test('All buttons change background color correctly', async ({ page }) => {
  const expectedColors = [
    { button: 1, color: 'rgb(173, 216, 230)' }, // lightblue
    { button: 2, color: 'rgb(240, 128, 128)' }, // lightcoral
    { button: 3, color: 'rgb(144, 238, 144)' }, // lightgreen
    { button: 4, color: 'rgb(221, 160, 221)' }, // plum
    { button: 5, color: 'rgb(240, 230, 140)' }, // khaki
    { button: 6, color: 'rgb(255, 182, 193)' }, // lightpink
    { button: 7, color: 'rgb(255, 255, 224)' }, // lightyellow
    { button: 8, color: 'rgb(211, 211, 211)' }, // lightgray
    { button: 9, color: 'rgb(255, 160, 122)' }, // lightsalmon
  ];

  for (const { button, color } of expectedColors) {
    const buttonLocator = page.locator(`#button-${button}`);
    await expect(buttonLocator).toBeVisible();
    await expect(buttonLocator).toBeEnabled();

    await buttonLocator.click();
    const bgColor = await page.locator('.color-grid').evaluate(el =>
      getComputedStyle(el).backgroundColor
    );
    expect(bgColor).toBe(color);
  }
});

// TODO #2: Test that state persists across multiple clicks
test('Multiple button clicks update background correctly', async ({ page }) => {
  // Click button 1, check color
  await page.click('#button-1');
  let bgColor = await page.locator('.color-grid').evaluate(el => 
    getComputedStyle(el).backgroundColor
  );
  expect(bgColor).toBe('rgb(173, 216, 230)'); // lightblue
  
  // Click button 5, check color changed
  await page.click('#button-5');
  bgColor = await page.locator('.color-grid').evaluate(el => 
    getComputedStyle(el).backgroundColor
  );
  expect(bgColor).toBe('rgb(240, 230, 140)'); // khaki
  
  // Click button 9, check color changed again
  await page.click('#button-9');
  bgColor = await page.locator('.color-grid').evaluate(el => 
    getComputedStyle(el).backgroundColor
  );
  expect(bgColor).toBe('rgb(255, 160, 122)');
});

// TODO #5: Test that button container is centered
test('Button container is centered vertically and horizontally', async ({ page }) => {
  const containerStyles = await page.locator('.button-container').evaluate(el => {
    const styles = getComputedStyle(el);
    const parent = el.parentElement;
    const parentStyles = parent ? getComputedStyle(parent) : null;
    
    return {
      display: styles.display,
      justifyContent: styles.justifyContent,
      alignItems: styles.alignItems,
      margin: styles.margin,
      alignSelf: styles.alignSelf,
      parentDisplay: parentStyles?.display,
      parentFlexDirection: parentStyles?.flexDirection,
      parentJustifyContent: parentStyles?.justifyContent,
      parentAlignItems: parentStyles?.alignItems
    };
  });
  
  // Check various centering approaches
  const isCentered = 
    // Grid/flex with justify/align center
    (containerStyles.display === 'grid' && 
     (containerStyles.justifyContent === 'center' || containerStyles.alignItems === 'center')) ||
    (containerStyles.display === 'flex' && 
     (containerStyles.justifyContent === 'center' || containerStyles.alignItems === 'center')) ||
    // Auto margins
    containerStyles.margin.includes('auto') ||
    // Flex child with align-self center or parent centering
    (containerStyles.parentDisplay === 'flex' && 
     (containerStyles.alignSelf === 'center' || 
      containerStyles.parentJustifyContent === 'center' || 
      containerStyles.parentAlignItems === 'center'));
  
  expect(isCentered).toBeTruthy();
});

// TODO #6: Test that buttons are square with consistent sizing
test('Buttons are square with consistent sizing', async ({ page }) => {
  const button1Styles = await page.locator('#button-1').evaluate(el => {
    const styles = getComputedStyle(el);
    return {
      width: styles.width,
      height: styles.height,
      aspectRatio: styles.aspectRatio
    };
  });
  
  // Check if button is square (width equals height or aspect ratio is 1)
  const isSquare = 
    button1Styles.width === button1Styles.height ||
    button1Styles.aspectRatio === '1' ||
    button1Styles.aspectRatio === '1 / 1';
  
  expect(isSquare).toBeTruthy();
  
  // Check that all buttons have the same dimensions
  for (let i = 2; i <= 9; i++) {
    const buttonStyles = await page.locator(`#button-${i}`).evaluate(el => {
      const styles = getComputedStyle(el);
      return {
        width: styles.width,
        height: styles.height
      };
    });
    
    expect(buttonStyles.width).toBe(button1Styles.width);
    expect(buttonStyles.height).toBe(button1Styles.height);
  }
});

// TODO #7: Test that buttons form a 3x3 grid
test('Buttons are arranged in a 3x3 grid', async ({ page }) => {
  const containerStyles = await page.locator('.button-container').evaluate(el => {
    const styles = getComputedStyle(el);
    return {
      display: styles.display,
      gridTemplateColumns: styles.gridTemplateColumns,
      gridTemplateRows: styles.gridTemplateRows
    };
  });
  
  // Should use CSS Grid with 3 columns and 3 rows
  const isGrid = containerStyles.display === 'grid';
  const hasThreeColumns = 
    containerStyles.gridTemplateColumns.includes('repeat(3') ||
    containerStyles.gridTemplateColumns.split(' ').length === 3;
  const hasThreeRows = 
    containerStyles.gridTemplateRows.includes('repeat(3') ||
    containerStyles.gridTemplateRows.split(' ').length === 3;
  
  expect(isGrid).toBeTruthy();
  expect(hasThreeColumns).toBeTruthy();
  expect(hasThreeRows).toBeTruthy();
});

// Test initial state (no background color set initially)
test('Initial state has no background color set', async ({ page }) => {
  const initialBgColor = await page.locator('.color-grid').evaluate(el => 
    getComputedStyle(el).backgroundColor
  );
  
  const isInitialState = 
    initialBgColor === 'rgba(0, 0, 0, 0)' || 
    initialBgColor === 'rgb(255, 255, 255)' ||
    initialBgColor === 'transparent';
  
  expect(isInitialState).toBeTruthy();
});
