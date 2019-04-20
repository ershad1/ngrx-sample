import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/internal/operators/tap';
// import {AppState} from '../../reducers/app.reducer';
import {User} from '../model/user';
import {UserDatasource} from '../service/user.datasource';
import {PageQuery} from '../state/user.actions';
import {State} from '../state/user.reducer';

// import {selectUserLoading} from '../state/user.selectors';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, AfterViewInit {

  @Input()
  users: User[];
  dataSource: UserDatasource;

  displayedColumns = ['userId', 'username', 'firstName', 'lastName', 'gender', 'status'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  isLoading$: Observable<boolean>;


  constructor(private route: ActivatedRoute, private store: Store<State>) {

  }

  ngOnInit() {

    // this.isLoading$ = this.store.pipe(select(selectUserLoading));

    this.dataSource = new UserDatasource(this.store);

    const initialPage: PageQuery = {
      page: 0, size: 20, sort: '', sortDirection: ''

    };

    console.log(JSON.stringify(this.dataSource.userDetailsLoad(initialPage)));

  }

  ngAfterViewInit() {

    this.paginator.page
      .pipe(
        tap(() => this.loadUsersDetailsPage$())
      )
      .subscribe();


  }

  loadUsersDetailsPage$() {

    const newPage: PageQuery = {
      page: this.paginator.pageIndex, size: this.paginator.pageSize, sort: this.sort.active, sortDirection: this.sort.direction

    };

    this.dataSource.userDetailsLoad(newPage);



  }


}
