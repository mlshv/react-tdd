import puppeteer from 'puppeteer';

export default class PageObject {
  async open() {
    const browser = await puppeteer.launch();

    const page = await browser.newPage();

    page.emulate({
      viewport: {
        width: 1400,
        height: 1000
      },
      userAgent: ''
    });

    await page.goto(this.url);
    await page.waitForSelector('.todo-app');

    this.browser = browser;
    this.page = page;
  }

  async close() {
    return this.browser.close();
  }

  async refresh() {
    return this.page.reload();
  }
}
