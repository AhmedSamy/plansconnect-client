import { PlansconnectWebPage } from './app.po';

describe('plansconnect-web App', function() {
  let page: PlansconnectWebPage;

  beforeEach(() => {
    page = new PlansconnectWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
