import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = { user: 'app' };
  constructor(private trans: TranslateService) { }
  ngOnInit() {
    this.trans.use("en-us");
  }
  changeLanguage(lang: string) {
    this.trans.use(lang);
    // this.trans.instant("HELLO"); // 在ts取得翻譯值，參數帶入key
  }
}
