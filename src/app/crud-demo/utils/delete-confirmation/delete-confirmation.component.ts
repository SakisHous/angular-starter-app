import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delete-confirmation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.css']
})
export class DeleteConfirmationComponent {
  @Input() header = 'Destructive Action!';
  @Input() title = 'Deleting user';
  @Input() body = 'Are you sure for deleting user?';

  @Output() confirmChoice = new EventEmitter<boolean>();

  onClick(choice: boolean) {
    this.confirmChoice.emit(choice);
  }
}
