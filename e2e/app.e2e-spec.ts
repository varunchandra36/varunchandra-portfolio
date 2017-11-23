import { NewCVPage } from './app.po';

describe('new-cv App', () => {
  let page: NewCVPage;

  beforeEach(() => {
    page = new NewCVPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
