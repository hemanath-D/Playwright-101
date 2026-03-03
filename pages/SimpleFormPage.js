class SimpleFormPage {
  constructor(page) {
    this.page = page;

    
    this.messageInput = page.locator(
      "//input[@placeholder='Please enter your Message']"
    );

    this.getCheckedValueButton = page.locator('#showInput');

    this.displayedMessage = page.locator(
      "//label[normalize-space()='Your Message:']/following-sibling::p"
    );
  }

  async enterMessage(message) {
    await this.messageInput.fill(message);
  }

  async clickGetCheckedValue() {
    await this.getCheckedValueButton.click();
  }
}

module.exports = { SimpleFormPage };