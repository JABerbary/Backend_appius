import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  goBack() {
    // Implement go back functionality
  }

  save() {
    // Implement save functionality
  }
}