// post.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post'; 

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private apiUrl = 'http://localhost:3000/posts';
  private loginUrl = 'http://localhost:3000/auth/google-login';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    console.log("afghh");
    return this.http.get<Post[]>(this.apiUrl);
  }

  loginWithGoogle(payload: any): Observable<{ token: { access_token: string }, user: any }>{
    return this.http.post<{ token: { access_token: string }, user: any }>(this.loginUrl, payload);
  }

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

  getPostById(id: string): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}/${id}`);
  }

  addComment(postId: string, comment: any): Observable<Post> {
    const url = `${this.apiUrl}/${postId}/comment`;
    return this.http.patch<Post>(url, comment);
  }
}
