import puppeteer from 'puppeteer';

export default class AppPageObject {
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

    await page.goto('http://localhost:3000/');
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

  async typeTodo(text) {
    return this.page.type('.todo-input__input', text);
  }

  async clickSubmitButton() {
    return this.page.click('.todo-input__submit');
  }

  async getTodosTexts() {
    return this.page.$$eval('.todo-item__text', nodes =>
      nodes.map(n => n.innerHTML)
    );
  }

  async removeTodo() {
    await this.page.click('.todo-item__remove-button');
  }

  async checkTodo() {
    await this.page.click('.todo-item__checkbox');
  }

  async getTodoCheckedState() {
    return this.page.$eval('.todo-item__checkbox', n => n.checked);
  }
}
