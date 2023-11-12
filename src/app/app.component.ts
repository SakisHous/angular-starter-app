import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';
import { Person } from './interfaces/person';
import { PersonAltComponent } from './person-alt/person-alt.component';
import { EventBindComponent } from './event-bind/event-bind.component';
import { OutputDemoComponent } from './output-demo/output-demo.component';
import { PersonCardComponent } from './person-card/person-card.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { UserAppService } from './user-app.service';
import { CrudDemoComponent } from './crud-demo/crud-demo/crud-demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    PersonComponent, 
    PersonAltComponent, 
    EventBindComponent, 
    OutputDemoComponent,
    PersonCardComponent,
    TemplateDrivenFormsComponent,
    ReactiveFormComponent,
    CrudDemoComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  // title = 'angular-introduction';
  name: string = "sakis-angular";
  lastname: string = "Angular JS"; 
  
  person: Person = {
    givenName: "Alice",
    surName: "W.",
    age: 20,
    email: "test@aueb.gr",
    address: "Patision 255"
  }

  users: Person[] = new Array()
  
  sendUser: Person | undefined
  
  constructor(private userAppService: UserAppService = Inject(UserAppService)) {
  }

  ngOnInit(): void {
    this.userAppService.getAllUsers().subscribe((users) => {
      this.users = users
      console.log(this.users)
    })
  }

  onDeleteUser(i: number) {
    this.users.splice(i, 1)
  }

  onSendUser(user: Person) {
    this.sendUser = user
  }

  onNewPerson(person: Person) {
    this.users.push(person)
  }
}
