import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app'

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth, private route: ActivatedRoute) {
    this.user = afAuth.authState;
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.user = data['authState'];
    });
  };

  login() {
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  create() {
    //this.af.auth.createUser({ email: '', password: '' });
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
    this.user = null;
  }
}