import { Component } from '@angular/core';
import { SideBarComponent } from "../../components/side-bar/side-bar.component";
import { NotesPageComponent } from "../../pages/notes-page/notes-page.component";

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [SideBarComponent, NotesPageComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}
