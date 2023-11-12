import { AfterViewInit, Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAppService } from 'src/app/user-app.service';
import { Person } from 'src/app/interfaces/person';
import { PersonCardComponent } from 'src/app/person-card/person-card.component';

@Component({
  selector: 'app-read-user',
  standalone: true,
  imports: [CommonModule, PersonCardComponent],
  templateUrl: './read-user.component.html',
  styleUrls: ['./read-user.component.css']
})
export class ReadUserComponent {
  foundUser: Person | undefined
  userIsFound = true     // first time true in order to not showing the div
  @ViewChild('userId') userIdInput!: ElementRef<HTMLInputElement> 
  
  constructor(private userAppService: UserAppService = Inject(UserAppService)) {
  }

  onClick() {
    const id = parseInt(this.userIdInput.nativeElement.value)
    this.userAppService.getUserById(id).subscribe({
      next: (user) => {
        this.foundUser = user
        this.userIsFound = true
      },
      error: (error) => {
        this.foundUser = undefined
        this.userIsFound = false
        console.log(error)
      },
      complete: () => {
        console.log('Operation completed')
      }
    })
  }
}
