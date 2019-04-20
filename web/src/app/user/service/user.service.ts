import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  findAllUsers(page = 0, size = 20, sort = '', sortDirection = 'desc'): Observable<User[]> {
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
