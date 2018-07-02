import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { UsersService } from "../users.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {

  public user = [];
  public bonjour = "";
  public bonjour2 = "";
  
  @Input("parentData") public name;
  @Output() public childEvent = new EventEmitter();

  constructor(private _userService: UsersService) { }

  ngOnInit() {
    this._userService.getUsers().subscribe(data => (this.user = data));
  }

  fireEvent() { 
    this.childEvent.emit("true")
  }

}
