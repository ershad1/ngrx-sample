import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {select, Store} from '@ngrx/store';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

// import {AppState} from '../../reducers/app.reducer';
import {User} from '../model/user';
import {PageQuery, UserRequested} from '../state/user.actions';
import {State} from '../state/user.reducer';
import {selectUserPage} from '../state/user.selectors';


export class UserDatasource implements DataSource<User> {

  private userDetailsSubject = new BehaviorSubject<User[]>([]);

  constructor(private store: Store<State>) {

  }

  userDetailsLoad(page: PageQuery) {
    this.store
      .pipe(
        select(selectUserPage(page)),
        tap(users => {
          if (users.length > 0) {
            this.userDetailsSubject.next(users);
          } else {
            this.store.dispatch(new UserRequested(page));
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

