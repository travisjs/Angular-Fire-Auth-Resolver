import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AngularFire, FirebaseAuthState } from 'angularfire2';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/first';

@Injectable()
export class AppResolver implements Resolve<FirebaseAuthState> {
    constructor(public af: AngularFire, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.af.auth.map((auth) => {
            if (auth) {
                console.log(auth);
                return auth;
            }
            console.log(`Auth was not found`);

            return null;
        }).
            first()
            .catch(error => {
                console.log(`Retrieval error: ${error}`);
                this.router.navigate(['/home']);
                return Observable.of(null);
            });
    }
}