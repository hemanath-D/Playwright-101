 class DragDropSlidersPage {
  constructor(page) {
    this.page = page;

    
    this.slider = page.locator("input[value='15']");

  
    this.rangeValue = page.locator("#rangeSuccess");
  }

  async moveSliderTo95() {
    await this.slider.fill("95");  
  }
}

module.exports = { DragDropSlidersPage };