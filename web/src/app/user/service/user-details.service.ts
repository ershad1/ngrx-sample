import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {UserDetails} from '../model/user-details';
import {PageQuery} from '../state/user-details.actions';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(private http: HttpClient) {

  }

  findAllUsersDetails(pageQuery): Observable<UserDetails[]> {
    return this.http.get('/userDetails', {
      params: new HttpParams()
        .set('page', pageQuery.page.toString())
        .set('size', pageQuery.size.toString())
        .set('sort', pageQuery.sort + ',' + pageQuery.sortDirection)
    }).pipe(
      map(res => res["payload"])
    );
  }
}
