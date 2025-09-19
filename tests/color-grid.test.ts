import test, { expect } from "playwright/test";
// These tests assume your app runs on http://localhost:3000

test('Button 1 changes background color', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.click('#button-1');
  const appBg = await page.locator('.App').evaluate(el => getComputedStyle(el).backgroundColor);
  const temp = document.createElement('div');
  temp.style.backgroundColor = 'lightblue';
  document.body.appendChild(temp);
  const expectedColor = getComputedStyle(temp).backgroundColor;
  document.body.removeChild(temp);
  expect(appBg).toBe(expectedColor);
});

test('Button 2 changes background color', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.click('#button-2');
  const appBg = await page.locator('.App').evaluate(el => getComputedStyle(el).backgroundColor);
  const temp = document.createElement('div');
  temp.style.backgroundColor = 'lightcoral';
  document.body.appendChild(temp);
  const expectedColor = getComputedStyle(temp).backgroundColor;
  document.body.removeChild(temp);
  expect(appBg).toBe(expectedColor);
});

test('Button 3 changes background color', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.click('#button-3');
  const appBg = await page.locator('.App').evaluate(el => getComputedStyle(el).backgroundColor);
  const temp = document.createElement('div');
  temp.style.backgroundColor = 'lightgreen';
  document.body.appendChild(temp);
  const expectedColor = getComputedStyle(temp).backgroundColor;
  document.body.removeChild(temp);
  expect(appBg).toBe(expectedColor);
});

test('Button 4 changes background color', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.click('#button-4');
  const appBg = await page.locator('.App').evaluate(el => getComputedStyle(el).backgroundColor);
  const temp = document.createElement('div');
  temp.style.backgroundColor = 'plum';
  document.body.appendChild(temp);
  const expectedColor = getComputedStyle(temp).backgroundColor;
  document.body.removeChild(temp);
  expect(appBg).toBe(expectedColor);
});

test('Button 5 changes background color', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.click('#button-5');
  const appBg = await page.locator('.App').evaluate(el => getComputedStyle(el).backgroundColor);
  const temp = document.createElement('div');
  temp.style.backgroundColor = 'khaki';
  document.body.appendChild(temp);
  const expectedColor = getComputedStyle(temp).backgroundColor;
  document.body.removeChild(temp);
  expect(appBg).toBe(expectedColor);
});

// TODO #10: Button 6 needs to be tested!

test('Button 7 changes background color', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.click('#button-7');
  const appBg = await page.locator('.App').evaluate(el => getComputedStyle(el).backgroundColor);
  const temp = document.createElement('div');
  temp.style.backgroundColor = 'lightyellow';
  document.body.appendChild(temp);
  const expectedColor = getComputedStyle(temp).backgroundColor;
  document.body.removeChild(temp);
  expect(appBg).toBe(expectedColor);
});

test('Button 8 changes background color', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.click('#button-8');
  const appBg = await page.locator('.App').evaluate(el => getComputedStyle(el).backgroundColor);
  const temp = document.createElement('div');
  temp.style.backgroundColor = 'lightgray';
  document.body.appendChild(temp);
  const expectedColor = getComputedStyle(temp).backgroundColor;
  document.body.removeChild(temp);
  expect(appBg).toBe(expectedColor);
});

test('Button 9 changes background color', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.click('#button-9');
  const appBg = await page.locator('.App').evaluate(el => getComputedStyle(el).backgroundColor);
  const temp = document.createElement('div');
  temp.style.backgroundColor = 'lightsalmon';
  document.body.appendChild(temp);
  const expectedColor = getComputedStyle(temp).backgroundColor;
  document.body.removeChild(temp);
  expect(appBg).toBe(expectedColor);
});
