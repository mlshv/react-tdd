import PageObject from './PageObject'

export default class AppPageObject extends PageObject {
  url = 'http://localhost:3000/';
  selector = '.todo-app';

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
