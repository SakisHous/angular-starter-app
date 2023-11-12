import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-bind',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-bind.component.html',
  styleUrls: ['./event-bind.component.css']
})
export class EventBindComponent {
  count = 0;
  userInput = '';

  increaseCounter() {
    this.count += 1
  }

  resetCounter() {
    this.count = 0;
  }

  onUserInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.userInput = target.value;
  }
}
