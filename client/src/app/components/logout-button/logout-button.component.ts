import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-button',
  standalone: true,
  imports: [],
  templateUrl: './logout-button.component.html',
  styleUrl: './logout-button.component.css',
})
export class LogoutButtonComponent {
  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    const confirmLogout = window.confirm('You are signing out, Please confirm');
    if(confirmLogout){
      this.userService.removeUser();
    this.router.navigate(['/home']);
    }
    else{
      console.log("Logout cancelled")
    }
    
  }
}
