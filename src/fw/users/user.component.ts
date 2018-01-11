import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fw-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(public username: string, public password: string) { }

  ngOnInit() {
  }

}