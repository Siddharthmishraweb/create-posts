



// post.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post'; // Define your Post interface or class

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  // likePost(_id: any) {
  //   throw new Error('Method not implemented.');
  // }
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

  
  // createPost(payload: any): Observable<any> {
  //   return this.http.post<any>(this.apiUrl, payload);
  // }

  createPost(payload: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('access_token')}`
    });
    return this.http.post<any>(`${this.apiUrl}`, payload, { headers });
  }

  likePost(postId: string): Observable<void> {
    return this.http.patch<void>(`${this.apiUrl}/${postId}/like`, {});
  }

  unlikePost(postId: string): Observable<void> {
    return this.http.patch<void>(`${this.apiUrl}/${postId}/unlike`, {});
  }
}
