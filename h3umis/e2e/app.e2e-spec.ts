import { H3umisPage } from './app.po';

describe('h3umis App', function() {
  let page: H3umisPage;

  beforeEach(() => {
    page = new H3umisPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
