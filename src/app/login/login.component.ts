import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;

  constructor(private router: Router) { }
  ngOnInit() {
    this.myForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });
  }

  onSubmit(f: NgForm) {
    let username = this.myForm.get('username').value;
    let password = this.myForm.get('password').value;

    if (username === 'admin' && password === 'admin') {
      this.router.navigate(['/home']);
    }
  }
}
