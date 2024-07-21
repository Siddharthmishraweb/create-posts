import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";
import { Post } from "./post";

@Injectable({
  providedIn: "root",
})
export class CommonService {
  private baseUrl = "https://blue-lemons-clap.loca.lt";
    // private baseUrl = "http://localhost:3000";


  private getAccessToken(): string | null {
    return typeof localStorage !== "undefined"
      ? localStorage.getItem("access_token")
      : null;
  }

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}/posts`);
  }

  loginWithGoogle(
    payload: any
  ): Observable<{ token: { access_token: string }; user: any }> {
    console.log("Payload being sent to login API: ", payload);
    return this.http
      .post<{ token: { access_token: string }; user: any }>(
        `${this.baseUrl}/auth/google-fb-login`,
        payload
      )
      .pipe(catchError(this.handleError));
  }
  private handleError(error: any) {
    console.error("An error occurred:", error);
    return throwError(error);
  }
  createPost(payload: any): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    });
    return this.http.post<any>(`${this.baseUrl}/posts`, payload, { headers });
  }

  likePost(postId: string): Observable<void> {
    const token = this.getAccessToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.patch<void>(
      `${this.baseUrl}/posts/${postId}/like`,
      {},
      { headers }
    );
  }

  unlikePost(postId: string): Observable<void> {
    const token = this.getAccessToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.patch<void>(
      `${this.baseUrl}/posts/${postId}/unlike`,
      {},
      { headers }
    );
  }
  getPostById(id: string): Observable<Post> {
    return this.http.get<Post>(`${this.baseUrl}/posts/${id}`);
  }

  addComment(postId: string, comment: any): Observable<Post> {
    const token = this.getAccessToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    const url = `${this.baseUrl}/posts/${postId}/comment`;
    return this.http.patch<Post>(url, comment, { headers });
  }
}
