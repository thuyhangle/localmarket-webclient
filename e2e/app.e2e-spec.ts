import { LocMakClientPage } from './app.po';

describe('loc-mak-client App', () => {
  let page: LocMakClientPage;

  beforeEach(() => {
    page = new LocMakClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
