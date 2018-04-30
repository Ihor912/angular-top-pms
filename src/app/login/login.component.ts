import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log('Login Component - on submit action: ', form.value.login);
    console.log(form.value.pass);

    this.userService.currentUserName = form.value.login;

    this.router.navigate(['/projects']);
  }

}
