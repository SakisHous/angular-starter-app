import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormComponent } from 'src/app/reactive-form/reactive-form.component';
import { Person } from 'src/app/interfaces/person';
import { UserAppService } from 'src/app/user-app.service';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormComponent],
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  @Output() userCreated = new EventEmitter()

  constructor(private userAppService: UserAppService = Inject(UserAppService)){

  }

  onUser(user: Person) {
    this.userAppService.addUser(user).subscribe(user => {
      console.log(user)
      this.userCreated.emit()
    })
  }
}
