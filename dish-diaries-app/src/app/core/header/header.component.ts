import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private userService: UserService, private router: Router) { }

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  get isNotHomePage(): boolean {
    return this.router.url !== '/home';
  }

  get isNotLoginPage(): boolean {
    return this.router.url !== '/login';
  }

  get isNotRegisterPage(): boolean {
    return this.router.url !== '/register';
  }

  logout() {
    this.userService.logout().subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
