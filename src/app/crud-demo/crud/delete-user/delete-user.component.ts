import { Component, ElementRef, EventEmitter, Inject, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from 'src/app/interfaces/person';
import { UserAppService } from 'src/app/user-app.service';
import { HttpClient } from '@angular/common/http';
import { CrudUserSearchComponent } from '../../utils/crud-user-search/crud-user-search.component';
import { PersonCardComponent } from 'src/app/person-card/person-card.component';
import { DeleteConfirmationComponent } from '../../utils/delete-confirmation/delete-confirmation.component';

@Component({
  selector: 'app-delete-user',
  standalone: true,
  imports: [
    CommonModule,
    CrudUserSearchComponent,
    PersonCardComponent,
    DeleteConfirmationComponent
  ],
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent {
  @Output() userDeleted = new EventEmitter()

  foundUser: Person | undefined
  userIsFound = true     // first time true in order to not showing the div
  @ViewChild('userId') userIdInput!: ElementRef<HTMLInputElement> 

  constructor(
    private userAppService: UserAppService = Inject(UserAppService),
    private http: HttpClient = Inject(HttpClient)) {
  }

  onClick() {
    const id = parseInt(this.userIdInput.nativeElement.value)

    this.http.delete<Person>(`http://localhost:3000/users/${id}`).subscribe({
      next: (user) => {
        this.userIsFound = true
      },
      error: (error) => {
        this.foundUser = undefined;
        this.userIsFound = false;
        console.log(error);
      },
      complete: () => {
        console.log('Operation completed');
      }
    })
  }

  onUserFound(user: Person | undefined) {
    if (user) {
      this.foundUser = user;
    }
  }

  onConfirm(choice: boolean) {
    if (choice && this.foundUser) {
      const id = this.foundUser.id ?? -1;
      
      this.userAppService.deleteUser(id).subscribe({
        next: (user) => {
          this.foundUser = user;
          this.userIsFound = true;
          this.userDeleted.emit();
        },
        error: (error) => {
          this.foundUser = undefined;
          this.userIsFound = false;
          console.log(error);
        },
        complete: () => {
          'Deleted operation completed';
        }
      })
    } else {
      this.foundUser = undefined;
    }
  }
}
