import { DineAppPage } from './app.po';

describe('dine-app App', () => {
  let page: DineAppPage;

  beforeEach(() => {
    page = new DineAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
