import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
  }

  getPageTitle() {
    return element(by.css('ion-title')).getText();
  }
}
