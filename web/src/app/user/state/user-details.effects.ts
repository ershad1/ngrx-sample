import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {of} from 'rxjs/internal/observable/of';
import {mergeMap} from 'rxjs/internal/operators/mergeMap';
import {catchError, map} from 'rxjs/operators';
import {AppState} from '../../reducers';
import {UserDetailsDataSource} from '../service/user-details.datasource';
import {UserDetailsActionTypes, UserDetailsCancelled, UserDetailsLoaded, UserDetailsRequested} from './user-details.actions';

@Injectable()
export class UserDetailsEffects {


  @Effect()
  loadLessonsPage$ = this.actions$
    .pipe(
      ofType<UserDetailsRequested>(UserDetailsActionTypes.UserDetailsRequested),
      mergeMap(({payload}) =>
        this.userDetailsDataSource.userDetailsLoad(payload.page)
          .pipe(
            catchError(err => {
              console.log('error loading a lessons page ', err);
              this.store.dispatch(new UserDetailsCancelled());
              return of([]);
            })
          )
      ),
      map(userDetails => new UserDetailsLoaded({userDetails}))
    );

  constructor(private actions$: Actions, private userDetailsDataSource: UserDetailsDataSource,
              private store: Store<AppState>) {

  }
}
