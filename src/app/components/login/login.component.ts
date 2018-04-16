import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 response:string
  constructor() { }

  ngOnInit() {
  }

  validateUser(username,password){
    //console.log('value'+username,password);
    if(username=='vidya'&&password=='vidya')
    this.response='valid';
    
  }
}
