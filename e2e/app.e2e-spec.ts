import { RxjsTestsPage } from './app.po';

describe('rxjs-tests App', () => {
  let page: RxjsTestsPage;

  beforeEach(() => {
    page = new RxjsTestsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
