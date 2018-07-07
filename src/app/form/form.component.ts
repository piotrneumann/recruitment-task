import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {UserData} from '../interfaces/user-data';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  private users: UserData[];
  user: UserData;

  constructor(private data: UserService) {
  }

  ngOnInit() {
    this.data.getUsers().subscribe(
      data => {
        this.users = data;
        this.user = this.users[this.getRandom()];
      }
    );
  }

  private getRandom(): number {
    const random = Math.floor((Math.random() * this.users.length));
    return random;
  }
}
