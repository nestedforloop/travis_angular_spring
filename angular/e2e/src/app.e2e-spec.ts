import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Spring Boot - Angular Application is running!');//'angular app is running!');
  });

  // new 
  it('should find "/greeting" and get the text from the back end (ASSUMING IT\'S RUNNING)', () => {
    page.navigateToGreeting();
    expect(page.getGreetingText()).toEqual('test: "Hello, world!"');
  });
  //

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
