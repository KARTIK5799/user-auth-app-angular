import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginSignupComponent } from "./components/login-signup/login-signup.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginSignupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'user-auth-app';
}
