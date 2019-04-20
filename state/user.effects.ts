import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {of} from 'rxjs/internal/observable/of';
import {mergeMap} from 'rxjs/internal/operators/mergeMap';
import {catchError, map} from 'rxjs/operators';
import {AppState} from '../../reducers/app.reducer';
import {UserService} from '../service/user.service';
import {UserActionTypes, UserCancelled, UserLoaded, UserRequested} from './user.actions';

@Injectable()
export class UserEffects {

  @Effect()
  loadUserPage$ = this.actions$
    .pipe(
      ofType<UserRequested>(UserActionTypes.UserRequested),
      mergeMap(({payload}) =>
        this.userService.findAllUsers(payload.page.page, payload.page.size, payload.page.sort, payload.page.sortDirection)
          .pipe(
            catchError(err => {
              console.log('error isLoading a user details page ', err);
              this.store.dispatch(new UserCancelled());
              return of([]);
            })
          )
      ),
      map(userDetails => new UserLoaded({userDetails}))
    );

  constructor(private actions$: Actions, private userService: UserService,
              private store: Store<AppState>) {

  }
}
