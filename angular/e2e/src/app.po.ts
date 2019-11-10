import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    //return element(by.css('app-root .content span')).getText() as Promise<string>;
    return element(by.css('app-root h2')).getText() as Promise<string>;
  }

  // new 
  navigateToGreeting() {
    return browser.get('/greeting') as Promise<any>;
  }

  getGreetingText() {
    return element(by.css('td')).getText() as Promise<string>;  
  }
  //

}
