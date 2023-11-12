import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAppService } from 'src/app/user-app.service';
import { Person } from 'src/app/interfaces/person';

@Component({
  selector: 'app-list-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent {

  users: Person[] = [];

  constructor(private userAppService : UserAppService = Inject(UserAppService)) {
  }

  ngOnInit() {
    this.userAppService.getAllUsers().subscribe((users) => {
      console.log(users)
      this.users = users
    })
  }
}
