import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/internal/operators/tap';
import {UserDetails} from '../model/user-details';

@Component({
  selector: 'app-user-details-list',
  templateUrl: './user-details-list.component.html',
  styleUrls: ['./user-details-list.component.scss']
})
export class UserDetailsListComponent implements OnInit, AfterViewInit {

  dataSource: userDetailssDataSource;

  displayedColumns = ["seqNo", "description", "duration"];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  loading$ : Observable<boolean>;


  constructor(private route: ActivatedRoute, private store: Store<AppState>) {

  }

  ngOnInit() {

    this.course = this.route.snapshot.data["course"];

    this.loading$ = this.store.pipe(select(selectLessonsLoading));

    this.dataSource = new userDetailssDataSource(this.store);

    const initialPage: PageQuery = {
      pageIndex: 0,
      pageSize: 3
    };

    this.dataSource.loadLessons(this.course.id, initialPage);

  }

  ngAfterViewInit() {

    this.paginator.page
      .pipe(
        tap(() => this.loadLessonsPage())
      )
      .subscribe();


  }

  loadLessonsPage() {

    const newPage: PageQuery = {
      pageIndex: this.paginator.pageIndex,
      pageSize: this.paginator.pageSize
    };

    this.dataSource.loadLessons(this.course.id, newPage);

  }


}
