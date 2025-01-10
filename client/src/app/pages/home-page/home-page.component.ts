import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent, RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
constructor(private router:Router){}

onSubmit(){
  this.router.navigate(['/register'])
}
}
