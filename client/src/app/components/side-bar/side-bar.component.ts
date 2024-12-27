import { Component } from '@angular/core';
import { AddButtonComponent } from '../add-button/add-button.component';
import { UserService } from '../../services/user.service';
import { UserInterface } from '../../interfaces/user.interface';
import { DeleteButtonComponent } from "../delete-button/delete-button.component";

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [AddButtonComponent, DeleteButtonComponent],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
})
export class SideBarComponent {
  constructor(public userService: UserService) {}
  userData: UserInterface | null = null;
  first_name: string |undefined
  lastname:string | undefined

  ngOnInit(): void {
    this.getUser()
    
  }

  getUser(){
    this.userData = this.userService.getUser()
   

  }
}
