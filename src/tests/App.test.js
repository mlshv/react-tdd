import AppPageObject from './App.page';

const page = new AppPageObject();

describe('TODO App', async () => {
  afterEach(() => {
    page.close();
  });

  it('should add a TODO', async () => {
    await page.open();
    await page.typeTodo('test');
    await page.clickSubmitButton();
    const texts = await page.getTodosTexts();
    expect(texts).toEqual(['test']);
  });

  it('should remove a TODO', async () => {
    await page.open();
    await page.typeTodo('test');
    await page.clickSubmitButton();
    await page.removeTodo();
    const texts = await page.getTodosTexts();
    expect(texts).toEqual([]);
  });

  it('should check a TODO', async () => {
    await page.open();
    await page.typeTodo('test');
    await page.clickSubmitButton();
    await page.checkTodo();
    const checkedState = await page.getTodoCheckedState();
    expect(checkedState).toEqual(true);
  });

  it('should save data between reloads', async () => {
    await page.open();
    await page.typeTodo('test');
    await page.clickSubmitButton();
    await page.checkTodo();

    await page.refresh();
    const texts = await page.getTodosTexts();
    expect(texts).toEqual(['test']);
    const checkedState = await page.getTodoCheckedState();
    expect(checkedState).toEqual(true);
  });
});
