import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  onSubmitHandler(f): void {
    const loginObserver = {
      next: x => console.log('User logged in'),
      error: err => console.log(err)
    };
    this.auth.login(f.value).subscribe(loginObserver);
  }
}
