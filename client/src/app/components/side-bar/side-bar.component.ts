import { Component } from '@angular/core';
import { AddButtonComponent } from '../add-button/add-button.component';
import { UserService } from '../../services/user.service';
import { LogoutButtonComponent } from '../logout-button/logout-button.component';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [AddButtonComponent, LogoutButtonComponent],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
})
export class SideBarComponent {
  constructor(public userService: UserService) {}
}
