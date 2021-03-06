import { Component, OnInit, NgZone } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { _ } from '@biesbjerg/ngx-translate-extract/dist/utils/utils';
import { MatSnackBar } from '@angular/material';
export function TRANSLATE(str: string) {
  return str;
}
@Component({
  selector: 'app-input-example',
  templateUrl: './input-example.component.html',
  styleUrls: ['./input-example.component.css']
})
export class InputExampleComponent implements OnInit {
  textAreaInput = '';
  name = 'Phil Duong';
  age = 21;
  id = 123;
  availableAgentsCount = 0;
  messageMapping: any = {
    '=0': 'msg.none',
    '=1': 'msg.one',
    'other': 'msg.other'
  };

  testMap: any = {
    '=0': 'test.none',
    '=1': 'test.one',
    'other': 'test.plural'
  };

  // lalala = TRANSLATE('test.test');

  constructor(private translationService: TranslateService, public snackbar: MatSnackBar, private zone: NgZone) {
    this.translationService.setDefaultLang('fr');
    this.translationService.use('en');
    this.getValue();

    document['onResumeTest'] = (data) => {
      this.wrapZone(data);
    };
  }

  ngOnInit() {
    setInterval(() => {
      if (this.availableAgentsCount < 15) {
        this.availableAgentsCount++;
      }
    }, 1000);
  }

  resizeText() {
    const input = window.document.getElementById('input');
    const textarea = window.document.querySelector('textarea');
    const messages = window.document.getElementById('messages');

    textarea.style.height = '1px';
    textarea.style.height = textarea.scrollHeight + 'px';

    if (textarea.offsetHeight > 28) {
      input.style.height = textarea.offsetHeight + 65 + 'px';
      messages.style.paddingBottom = input.style.height;
    }
  }

  clearInput() {
    this.textAreaInput = '';
    const input = window.document.getElementById('input');
    const textarea = window.document.querySelector('textarea');
    const messages = window.document.getElementById('messages');
    textarea.style.height = '22px';
    messages.style.paddingBottom = '100px';
    input.style.height = '100px';
  }

  useLang(lang: string) {
    this.translationService.use(lang);
  }

  getValue() {
    this.translationService.stream('name.title', { name: 'Pattate', age: 123 }).subscribe((translated: string) => {
      console.log(translated);
    });
  }

  wrapZone(data) {
    this.zone.run(() => {
      this.snackbar.open(data, 'OPEN', {
        duration: 3000
      }).onAction().subscribe(() => console.log('Snackbar is opened!'));
    });
  }
}
