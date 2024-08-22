import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, OnInit,Input,inject } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [AsyncPipe,JsonPipe],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  @Input() id!:string;
  private userService = inject(UserService);
  private ruter=inject(Router)
  
  logout() {
    localStorage.removeItem('token');
    this.ruter.navigate(['/home']);
  }


}