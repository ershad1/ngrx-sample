import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {UserDetails} from '../model/user-details';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  users$: Observable<UserDetails[]>;

  constructor() {
  }

  ngOnInit() {
  }

}
