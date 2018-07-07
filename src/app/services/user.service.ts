import {Injectable} from '@angular/core';
import {UserData} from '../interfaces/user-data';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userList: UserData[];
  private usersApiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) {
  }

  getUsers(): Observable<UserData[]> {
    return this.httpClient.get<UserData[]>(this.usersApiUrl);
  }
}
