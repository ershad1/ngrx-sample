import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {select, Store} from '@ngrx/store';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {AppState} from '../../reducers';
import {UserDetails} from '../model/user-details';
import {PageQuery, UserDetailsRequested} from '../state/user-details.actions';
import {selectUserDetailsPage} from '../state/user-details.selectors';


export class UserDetailsDataSource implements DataSource<UserDetails> {

  private userDetailsSubject = new BehaviorSubject<UserDetails[]>([]);

  constructor(private store: Store<AppState>) {

  }

  userDetailsLoad(page: PageQuery) {
    this.store
      .pipe(
        select(selectUserDetailsPage(page)),
        tap(lessons => {
          if (lessons.length > 0) {
            this.userDetailsSubject.next(lessons);
          } else {
            this.store.dispatch(new UserDetailsRequested({page}));
          }
        }),
        catchError(() => of([]))
      )
      .subscribe();

  }

  connect(collectionViewer: CollectionViewer): Observable<UserDetails[]> {
    console.log('Connecting data source');
    return this.userDetailsSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.userDetailsSubject.complete();
  }

}

