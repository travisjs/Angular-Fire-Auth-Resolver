import { Component, OnInit } from '@angular/core';
import { AngularFire, AngularFireAuth, FirebaseAuthState } from 'angularfire2';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: FirebaseAuthState = null;

  constructor(public af: AngularFire, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.user = data['authState'];
    });
  };

  login() {
    this.af.auth.login();
  }

  create() {
    //this.af.auth.createUser({ email: '', password: '' });
    this.af.auth.login();
  }

  logout() {
    this.af.auth.logout();
    this.user = null;
  }
}