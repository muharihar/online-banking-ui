import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
})
export class ErrorComponent implements OnInit {

  err: string;

  constructor(private router: Router) {
    this.err = localStorage.getItem('err');
  }

  ngOnInit() {
  }

}
