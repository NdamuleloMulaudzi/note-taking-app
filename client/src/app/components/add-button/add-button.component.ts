import { Component } from '@angular/core';

@Component({
  selector: 'app-add-button',
  standalone: true,
  imports: [],
  templateUrl: './add-button.component.html',
  styleUrl: './add-button.component.css',
})
export class AddButtonComponent {
  createNoteCard(color: string) {
    const notes = document.querySelector('.notes');

    const card = document.createElement('div');
    card.classList.add('note-card');
    card.setAttribute('contentEditable', 'true');
    card.style.backgroundColor = color;
    card.innerHTML = `<p>conetent<p>`;

    notes?.prepend(card);
  }
}
