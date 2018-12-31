import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have Unit Converter text', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('Unit Converter');
  });
});
