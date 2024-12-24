import { Component } from '@angular/core';
import { AddButtonComponent } from "../add-button/add-button.component";

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [AddButtonComponent],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

}
