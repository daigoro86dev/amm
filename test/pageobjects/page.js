/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
module.exports = class Page {
  /**
   * @description Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  open(path) {
    browser.url(`/intl/v/car-safety/${path}`);
  }
  /**
   * @description Handles the accept cookies modal screen
   */
  acceptCookies() {
    browser.$('.accept-cookies-button').click();
  }
  /**
   * @description Reloads the page
   */
  reload() {
    return browser.refresh();
  }
  /**
   * @description Asserts expected page title
   * @argument {String} title The expected page title
   */
  getExpectedTitle(title) {
    expect(browser).toHaveTitle(title);
  }
  /**
   * @description Asserts if page url contains
   * @argument {String} urlString The expected string to be contained in the url
   */
  getExpectedUrl(urlString) {
    expect(browser).toHaveUrl(urlString, { containing: true });
  }
  /**
   * @description Asserts if element is not present on the page
   * @argument {String} selector
   */
  shouldNotHaveElement(selector) {
    expect(selector).not.toExist();
  }
};
