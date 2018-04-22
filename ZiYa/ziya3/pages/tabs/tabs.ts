import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { MinePage } from '../mine/mine';
import { MessagePage } from '../message/message';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = MessagePage;
  tab5Root = MinePage;
  tab6Root = LoginPage;

  constructor() {

  }
}
