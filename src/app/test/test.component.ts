import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"]
})
export class TestComponent implements OnInit {
  @Input("user") public user;
  @Output() public test = new EventEmitter();
  @Output() public test2 = new EventEmitter();
  eventText = '';

  constructor() {}

  ngOnInit() { }
  
  sayBonjour(name) { 
    this.test.emit("Bonjour " + name)
  }

  sayBonjour2(name) { 
    this.test2.emit("Hey " + name)
  }


}
