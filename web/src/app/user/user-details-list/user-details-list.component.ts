import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import {select} from '@ngrx/store/src/store';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/internal/operators/tap';
import {AppState} from '../../reducers';
import {UserDetails} from '../model/user-details';
import {UserDetailsDataSource} from '../service/user-details.datasource';
import {PageQuery} from '../state/user-details.actions';
import {selectUserDetailsLoading} from '../state/user-details.selectors';

@Component({
  selector: 'app-user-details-list',
  templateUrl: './user-details-list.component.html',
  styleUrls: ['./user-details-list.component.scss']
})
export class UserDetailsListComponent implements OnInit, AfterViewInit {

  @Input()
  users : UserDetails[];
  dataSource: UserDetailsDataSource;

  displayedColumns = ["seqNo", "description", "duration"];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  loading$ : Observable<boolean>;


  constructor(private route: ActivatedRoute, private store: Store<AppState>) {

  }

  ngOnInit() {

    this.loading$ = this.store.pipe(select(selectUserDetailsLoading));

    this.dataSource = new UserDetailsDataSource(this.store);

    const initialPage: PageQuery = {
      page: 0, size: 20, sort: "", sortDirection: ""

    };

    this.dataSource.userDetailsLoad( initialPage);

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
      page: 0, size: 0, sort: "", sortDirection: ""

    };

    this.dataSource.userDetailsLoad(newPage);

  }


}
