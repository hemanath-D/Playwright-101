class HomePage {
  constructor(page) {
    this.page = page;
    this.simpleFormDemoLink = page.locator(
  'a[href="https://www.testmuai.com/selenium-playground/simple-form-demo/"]'
);

this.dragDropSlidersLink = page.locator(
      'a[href="https://www.testmuai.com/selenium-playground/drag-drop-range-sliders-demo/"]'
    );

this.inputFormSubmitLink = page.locator(
  'a[href="https://www.testmuai.com/selenium-playground/input-form-demo/"]'
);
  }

  async navigate() {
    await this.page.goto('https://www.testmuai.com/selenium-playground/');
  }

  async clickSimpleFormDemo() {
    await this.simpleFormDemoLink.click();
  }
 
  async clickDragDropSliders() {
    await this.dragDropSlidersLink.click();
  }

  async clickInputFormSubmit() {
  await this.inputFormSubmitLink.click();
}


}

module.exports = { HomePage };