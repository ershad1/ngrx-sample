import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {select, Store} from '@ngrx/store';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {AppState} from '../../reducers';
import {User} from '../model/user';
import {PageQuery, UserDetailsRequested} from '../state/user.actions';
import {selectUserDetailsPage} from '../state/user.selectors';


export class UserDatasource implements DataSource<User> {

  private userDetailsSubject = new BehaviorSubject<User[]>([]);

  constructor(private store: Store<AppState>) {

  }

  userDetailsLoad(page: PageQuery) {
    this.store
      .pipe(
        select(selectUserDetailsPage(page)),
        tap(userDetails => {
          if (userDetails.length > 0) {
            this.userDetailsSubject.next(userDetails);
          } else {
            this.store.dispatch(new UserDetailsRequested({page}));
          }
        }),
        catchError(() => of([]))
      )
      .subscribe();

  }

  connect(collectionViewer: CollectionViewer): Observable<User[]> {
    console.log('Connecting data source');
    return this.userDetailsSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.userDetailsSubject.complete();
  }

}

