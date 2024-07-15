import { Component, OnInit, ViewChild } from '@angular/core';
import { SocialAuthService, SocialUser, GoogleLoginProvider, FacebookLoginProvider } from '@abacritt/angularx-social-login';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { CommonService } from './common.service';
import { CreatePostComponent } from './create-post/create-post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user: SocialUser | null = null;
  loggedIn: boolean = false;
  sanitizedPhotoUrl: SafeUrl | null = null;

  @ViewChild('createPostComponent') createPostComponent!: CreatePostComponent;

  constructor(private authService: SocialAuthService, private sanitizer: DomSanitizer, private commonService: CommonService) { }
  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      if (user?.photoUrl) {
        this.sanitizedPhotoUrl = this.sanitizer.bypassSecurityTrustUrl(user.photoUrl);
      }
      if (this.user) {
        this.onLoginSuccess(this.user);
      }
    });

    // Retrieve user details from localStorage if available
    const storedUser = typeof localStorage !== 'undefined' ? localStorage.getItem('user') : null;
    
    if (storedUser) {
      const user = JSON.parse(storedUser);
      this.user = JSON.parse(storedUser);
      this.loggedIn = true;
      if (this.user?.photoUrl) {
        this.sanitizedPhotoUrl = this.sanitizer.bypassSecurityTrustUrl(user?.profilePic);
      }
    }
  }

  private onLoginSuccess(user: SocialUser): void {
    const loginPayload = {
      idToken: user.idToken,
      id: user.id,
      name: user.name,
      email: user.email,
      photoUrl: user.photoUrl,
      firstName: user.firstName,
      lastName: user.lastName,
      provider: user.provider
    };

    this.commonService.loginWithGoogle(loginPayload).subscribe(response => {
      console.log("response===== ", response);
      if (response?.token?.access_token) {
        localStorage.setItem('access_token', response.token.access_token);
      }
    
      if (response?.user) {
        localStorage.setItem('user', JSON.stringify(response.user));
      }
    });
  }

  onLoginButtonClick(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).catch(error => console.error(error));
  }

  onFacebookLoginClick(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).catch(error => console.error(error));
  }

  signOut(): void {
    this.authService.signOut();
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
    this.user = null;
    this.loggedIn = false;
  }

  onPostCreated(): void {
    // Handle the event when a post is created
    console.log('Post created successfully');
  }

  checkLoginState(event: any): void {
    console.log('Facebook login event:', event);
    // Handle login state if needed
  }

  getLoggedInUserDetails(): any {
    return JSON.parse(localStorage.getItem('user') || '{}');
  }
}
