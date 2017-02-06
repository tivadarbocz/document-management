import { DocumentManagementPage } from './app.po';

describe('document-management App', function() {
  let page: DocumentManagementPage;

  beforeEach(() => {
    page = new DocumentManagementPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
