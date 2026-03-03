const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { SimpleFormPage } = require('../pages/SimpleFormPage');
const { DragDropSlidersPage } = require('../pages/DragDropSlidersPage');
const { InputFormPage } = require('../pages/InputFormPage');
test('Test Scenario 1 - Simple Form Demo', async ({ page }) => {

  const homePage = new HomePage(page);
  const simpleFormPage = new SimpleFormPage(page);

  await homePage.navigate();
  await homePage.clickSimpleFormDemo();
  await page.waitForTimeout(7000)

  await expect(page).toHaveURL(/simple-form-demo/);

  const message = "Welcome to TestMu AI";

  await simpleFormPage.enterMessage(message);
  await page.waitForTimeout(2000)
  await simpleFormPage.clickGetCheckedValue();
  await page.waitForTimeout(2000)

  await expect(simpleFormPage.displayedMessage)
    .toHaveText(message);
});


test('Test Scenario 2 - Drag & Drop Sliders', async ({ page }) => {

  const homePage = new HomePage(page);
  const dragDropPage = new DragDropSlidersPage(page);

  await homePage.navigate();
  await homePage.clickDragDropSliders();
  await page.waitForTimeout(7000)
  await dragDropPage.moveSliderTo95();
  await page.waitForTimeout(2000)

  await expect(dragDropPage.rangeValue).toHaveText('95');
});





test('Test Scenario 3 - Input Form Submit', async ({ page }) => {

  const homePage = new HomePage(page);
  const inputFormPage = new InputFormPage(page);

  await homePage.navigate();
  await homePage.clickInputFormSubmit();
  await page.waitForTimeout(7000)


  await expect(page).toHaveURL(/input-form-demo/);

  
  await inputFormPage.clickSubmit();

  
  const validationMsg = await inputFormPage.getValidationMessage();
  expect(validationMsg).toContain("Please fill out this field.");

  const formData = {
    name: "John Doe",
    email: "john@test.com",
    password: "Test1234",
    company: "Test Company",
    website: "www.test.com",
    city: "New York",
    address1: "123 Street",
    address2: "Suite 10",
    state: "NY",
    zip: "10001"
  };

  await inputFormPage.fillForm(formData);
   await page.waitForTimeout(2000)

 
  await inputFormPage.selectCountry("United States");
   await page.waitForTimeout(3000)

  await inputFormPage.clickSubmit();
  await page.waitForTimeout(3000)

  
  await expect(inputFormPage.successMessage)
    .toHaveText("Thanks for contacting us, we will get back to you shortly.");
});