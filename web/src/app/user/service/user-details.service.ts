import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {UserDetails} from '../model/user-details';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(private http: HttpClient) {

  }

  findAllUsersDetails(page = 0, size = 20, sort = '', sortDirection = 'desc'): Observable<UserDetails[]> {
    return this.http.get('/userDetails', {
      params: new HttpParams()
        .set('page', page.toString())
        .set('size', size.toString())
        .set('sort', sort + ',' + sortDirection)
    }).pipe(
      map(res => res['content'])
    );
  }
}
