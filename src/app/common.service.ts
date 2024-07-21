// post.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Post } from './post'; 

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private apiUrl = 'https://blue-lemons-clap.loca.lt/posts';
  private loginUrl = 'https://blue-lemons-clap.loca.lt/auth/google-login';
  
  private getAccessToken(): string | null {
    return typeof localStorage !== 'undefined' ? localStorage.getItem('access_token') : null;
  }

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    console.log("afghh");
    return this.http.get<Post[]>(this.apiUrl);
  }

  // loginWithGoogle(payload: any): Observable<{ token: { access_token: string }, user: any }>{
  //   console.log("payload:: ",payload);
  //   return this.http.post<{ token: { access_token: string }, user: any }>(this.loginUrl, payload);
  // }

  loginWithGoogle(payload: any): Observable<{ token: { access_token: string }, user: any }> {
    console.log("Payload being sent to login API: ", payload);
    return this.http.post<{ token: { access_token: string }, user: any }>(this.loginUrl, payload)
      .pipe(
        catchError(this.handleError)
      );
  }
  private handleError(error: any) {
    console.error('An error occurred:', error); // for demo purposes only
    return throwError(error);
  }
  createPost(payload: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('access_token')}`
    });
    return this.http.post<any>(`${this.apiUrl}`, payload, { headers });
  }

  // likePost(postId: string): Observable<void> {
  //   return this.http.patch<void>(`${this.apiUrl}/${postId}/like`, {});
  // }

  // unlikePost(postId: string): Observable<void> {
  //   return this.http.patch<void>(`${this.apiUrl}/${postId}/unlike`, {});
  // }

  likePost(postId: string): Observable<void> {
    const token = this.getAccessToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.patch<void>(`${this.apiUrl}/${postId}/like`, {}, { headers });
  }

  unlikePost(postId: string): Observable<void> {
    const token = this.getAccessToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.patch<void>(`${this.apiUrl}/${postId}/unlike`, {}, { headers });
  }
  getPostById(id: string): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}/${id}`);
  }

  addComment(postId: string, comment: any): Observable<Post> {
    const token = this.getAccessToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const url = `${this.apiUrl}/${postId}/comment`;
    return this.http.patch<Post>(url, comment, { headers });
  }
}
