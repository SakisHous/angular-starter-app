import { Component, ElementRef, EventEmitter, Inject, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from 'src/app/interfaces/person';
import { UserAppService } from 'src/app/user-app.service';

@Component({
  selector: 'app-crud-user-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './crud-user-search.component.html',
  styleUrls: ['./crud-user-search.component.css']
})

export class CrudUserSearchComponent {
  foundUser: Person | undefined
  userIsFound = true     // first time true in order to not showing the div
  @ViewChild('userId') userIdInput!: ElementRef<HTMLInputElement> 
  @Output() userFound = new EventEmitter<Person | undefined>()

  constructor(private userAppService: UserAppService = Inject(UserAppService)) {
  }

  onSearch() {
    const id = parseInt(this.userIdInput.nativeElement.value)
    this.userAppService.getUserById(id).subscribe({
      next: (user) => {
        this.foundUser = user
        this.userIsFound = true
        this.userFound.emit(this.foundUser)
      },
      error: (error) => {
        this.foundUser = undefined
        this.userIsFound = false
        console.log(error)
        this.userFound.emit(this.foundUser)
      },
      complete: () => {
        console.log('Operation completed')
      }
    })
  }
}
