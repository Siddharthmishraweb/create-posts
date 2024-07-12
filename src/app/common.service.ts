



// post.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post'; // Define your Post interface or class

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private apiUrl = 'http://localhost:3000/posts'; // Replace with your API URL
  private loginUrl = 'http://localhost:3000/auth/google-login';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    console.log("afghh");
    return this.http.get<Post[]>(this.apiUrl);
  }

  loginWithGoogle(payload: any): Observable<{ access_token: string }> {
    return this.http.post<{ access_token: string }>(this.loginUrl, payload);
  }

  
  createPost(payload: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, payload);
  }
}
