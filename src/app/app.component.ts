import { Component, OnInit, ViewChild, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SocialAuthService, SocialUser, GoogleLoginProvider, FacebookLoginProvider } from '@abacritt/angularx-social-login';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { CommonService } from './common.service';

// Declare the google object globally
declare const google: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  user: SocialUser | null = null;
  loggedIn: boolean = false;
  sanitizedPhotoUrl: SafeUrl | null = null;

  @ViewChild('googleSignInButton', { static: true }) googleSignInButton!: ElementRef;

  constructor(
    private authService: SocialAuthService,
    private commonService: CommonService,
    private sanitizer: DomSanitizer,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = user != null;
      if (user?.photoUrl) {
        this.sanitizedPhotoUrl = this.sanitizer.bypassSecurityTrustUrl(user.photoUrl);
      }
      if (this.user) {
        this.onLoginSuccess(this.user);
      }
    });

    if (isPlatformBrowser(this.platformId)) {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        const user = JSON.parse(storedUser);
        this.user = user;
        this.loggedIn = true;
        if (this.user?.photoUrl) {
          this.sanitizedPhotoUrl = this.sanitizer.bypassSecurityTrustUrl(this.user.photoUrl);
        }
      }
    }
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((user) => {
        console.log("user==>>>  ", user);
        this.user = user;
        this.loggedIn = true;
        if (this.user?.photoUrl) {
          this.sanitizedPhotoUrl = this.sanitizer.bypassSecurityTrustUrl(this.user.photoUrl);
        }
      })
      .catch(err => console.error('Google Sign-In Error:', err));
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.loadGoogleSignIn();
    }
  }

  private loadGoogleSignIn() {
    const googleScript = document.createElement('script');
    googleScript.src = 'https://accounts.google.com/gsi/client';
    googleScript.async = true;
    googleScript.defer = true;
    googleScript.onload = () => this.initializeGoogleSignIn();
    document.head.appendChild(googleScript);
  }

  private initializeGoogleSignIn() {
    if (this.googleSignInButton) {
      google.accounts.id.initialize({
        client_id: '1088154961211-oi9bnlc9hg2v0d6hc6qu2i4eielgcai4.apps.googleusercontent.com',
        callback: this.handleGoogleLogin.bind(this),
      });
      google.accounts.id.renderButton(this.googleSignInButton.nativeElement, {
        type: 'standard',
        theme: 'outline',
        size: 'large',
      });
    }
  }

  handleGoogleLogin(response: any): void {
    if (response.error) {
      console.error('Google Sign-In Error:', response.error);
    } else {
      const credential = response.credential;
      this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((user) => {
        this.user = user;
        this.loggedIn = true;
        if (this.user?.photoUrl) {
          this.sanitizedPhotoUrl = this.sanitizer.bypassSecurityTrustUrl(this.user.photoUrl);
        }
        console.log("user::  ", user);
        if (isPlatformBrowser(this.platformId)) {
          localStorage.setItem('user', JSON.stringify(this.user));
          localStorage.setItem('access_token', credential);
        }
      });
    }
  }

  // async onLoginSuccess(user: SocialUser): Promise<void> {
  //   console.log("user::: ", user);
  //   const newWalaUser = {email: user.email, name: user.firstName + user.lastName, profilePic: user.photoUrl};
  //   const newUser = await this.commonService.loginWithGoogle(newWalaUser);
  //   console.log("newUser:: ", newUser);
  //   localStorage.setItem('user', JSON.stringify(this.user));
  //   localStorage.setItem('access_token', user.idToken);
  // }

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

  signOut(): void {
    this.authService.signOut();
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('access_token');
      localStorage.removeItem('user');
    }
    this.user = null;
    this.loggedIn = false;
  }

  getLoggedInUserDetails(): any {
    if (isPlatformBrowser(this.platformId)) {
      return JSON.parse(localStorage.getItem('user') || '{}');
    }
    return null;
  }

  // Define these methods to avoid errors in template
  onFacebookLoginClick(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).catch(error => console.error(error));
  }

  onPostCreated(): void {
    // Handle post creation
  }
}
