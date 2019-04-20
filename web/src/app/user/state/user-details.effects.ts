import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {of} from 'rxjs/internal/observable/of';
import {mergeMap} from 'rxjs/internal/operators/mergeMap';
import {catchError, map} from 'rxjs/operators';
import {AppState} from '../../reducers';
import {UserDetailsService} from '../service/user-details.service';
import {UserDetailsActionTypes, UserDetailsCancelled, UserDetailsLoaded, UserDetailsRequested} from './user-details.actions';

@Injectable()
export class UserDetailsEffects {

  @Effect()
  loadUsersDetailsPage$ = this.actions$
    .pipe(
      ofType<UserDetailsRequested>(UserDetailsActionTypes.UserDetailsRequested),
      mergeMap(({payload}) =>
        this.userDetailsService.findAllUsersDetails(payload.page.page, payload.page.size, payload.page.sort, payload.page.sortDirection)
          .pipe(
            catchError(err => {
              console.log('error loading a user details page ', err);
              this.store.dispatch(new UserDetailsCancelled());
              return of([]);
            })
          )
      ),
      map(userDetails => new UserDetailsLoaded({userDetails}))
    );

  constructor(private actions$: Actions, private userDetailsService: UserDetailsService,
              private store: Store<AppState>) {

  }
}
