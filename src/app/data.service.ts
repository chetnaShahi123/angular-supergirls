import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 

  constructor( private http: HttpClient) { }

  // getSimpleArray() {
  //   return  ['apple', 'mango', 'pineapple', 'banana'];
  // }

  getUsers() {
    return this.http.get<Object[]>('https://jsonplaceholder.typicode.com/users')
  }

  getUser(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId)
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

}
