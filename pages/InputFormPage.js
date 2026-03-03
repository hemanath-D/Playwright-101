 class InputFormPage {
  constructor(page) {
    this.page = page;

    this.submitButton = page.locator("button[type='submit']").nth(1);
    this.nameInput = page.locator("#name");
    this.emailInput = page.locator("#inputEmail4");
    this.passwordInput = page.locator("#inputPassword4");
    this.companyInput = page.locator("#company");
    this.websiteInput = page.locator("#websitename");
    this.cityInput = page.locator("#inputCity");
    
    this.address1Input = page.locator("#inputAddress1");
    this.address2Input = page.locator("#inputAddress2");
    this.stateInput = page.locator("#inputState");
    this.zipInput = page.locator("#inputZip");

    this.countryDropdown = page.locator("select[name='country']");

    this.successMessage = page.locator(".success-msg");

    this.validationMessage = page.locator("input[name='name']");
  }

  async clickSubmit() {
    await this.submitButton.click();
  }

  async fillForm(data) {
    await this.nameInput.fill(data.name);
    await this.emailInput.fill(data.email);
    await this.passwordInput.fill(data.password);
    await this.companyInput.fill(data.company);
    await this.websiteInput.fill(data.website);
    await this.cityInput.fill(data.city);
    await this.address1Input.fill(data.address1);
    await this.address2Input.fill(data.address2);
    await this.stateInput.fill(data.state);
    await this.zipInput.fill(data.zip);
  }

  async selectCountry(countryName) {
    await this.countryDropdown.selectOption({ label: countryName });
  }

  async getValidationMessage() {
    return await this.validationMessage.evaluate(
      el => el.validationMessage
    );
  }
}

module.exports = { InputFormPage };