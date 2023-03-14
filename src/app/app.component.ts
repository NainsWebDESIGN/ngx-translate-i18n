import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DEFAULT } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = { user: 'app' };
  constructor(private trans: TranslateService) {
    this.trans.use(DEFAULT.LANG);
  }
  changeLanguage(lang: string) {
    this.trans.use(lang);
    // this.trans.instant("HELLO"); // 在ts取得翻譯值，參數帶入key
  }
}
