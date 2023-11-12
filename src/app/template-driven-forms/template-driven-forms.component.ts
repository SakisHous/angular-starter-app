import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Person } from '../interfaces/person';

@Component({
  selector: 'app-template-driven-forms',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent {
  @Output() person = new EventEmitter<Person>()
  
  onSubmit(form: any) {
    // console.log(form.value)
    this.person.emit(form.value as Person)
    form.reset()
  }
}
