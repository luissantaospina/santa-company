import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";
import { User } from "./User";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl: string = environment.baseUrl

  constructor(private http: HttpClient) { }

  deleteUser(id: string): Observable<User> {
    return this.http.delete<User>(this.apiUrl + 'user/' + id)
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl + 'users')
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl + 'users', user)
  }

  updateUser(id: string, user: User): Observable<User> {
    return this.http.put<User>(this.apiUrl + 'user/' + id, user)
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(this.apiUrl + 'user/' + id)
  }
}
