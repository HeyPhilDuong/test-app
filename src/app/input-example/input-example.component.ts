import { Component, OnInit } from '@angular/core';
import { calcBindingFlags } from '../../../node_modules/@angular/core/src/view/util';

@Component({
  selector: 'app-input-example',
  templateUrl: './input-example.component.html',
  styleUrls: ['./input-example.component.css']
})
export class InputExampleComponent implements OnInit {

  textAreaInput: string = "";

  constructor() { }

  ngOnInit() {
  }
  
  resizeText() {
    const input = window.document.getElementById('input');
    const textarea = window.document.querySelector('textarea');
    const messages = window.document.getElementById('messages');

    textarea.style.height = '1px';
    textarea.style.height = (14 + textarea.scrollHeight) + "px";

    if (textarea.offsetHeight > 28){ 
      input.style.height = textarea.offsetHeight + 64 + 'px'
      messages.style.paddingBottom = input.style.height;
    }
    
    

    // messages.style.height = window.innerHeight - input.offsetHeight - 65 + 'px';
    // console.log('messages height ' + messages.style.height)
    
    // if (input.offsetHeight > 100) {
    //   messages.style.height = messages.offsetHeight - (input.offsetHeight - 100) + 'px';
    // }

    // if (textarea.scrollTop !== 0) {
    //   textarea.style.height = textarea.scrollHeight + 'px';
    // }

    // if (this.textAreaInput.length < 1) { 
    //   textarea.style.height = '30px';
    // }
  }

  // resizeMessages() { 
  //   const messages = window.document.getElementById('messages');
  //   const input = window.document.getElementById('input');
  //   if (input.offsetHeight > 100) {
  //     messages.style.height = messages.offsetHeight - (input.offsetHeight - 100) + 'px';
  //   }
  // }


}
