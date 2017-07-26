import { AxTestPage } from './app.po';

describe('ax-test App', () => {
  let page: AxTestPage;

  beforeEach(() => {
    page = new AxTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
