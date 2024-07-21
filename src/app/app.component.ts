// // // import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
// // // import { SocialAuthService, SocialUser, GoogleLoginProvider, FacebookLoginProvider } from '@abacritt/angularx-social-login';
// // // import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
// // // import { CommonService } from './common.service';
// // // import { CreatePostComponent } from './create-post/create-post.component';

// // // declare var google: any;

// // // @Component({
// // //   selector: 'app-root',
// // //   templateUrl: './app.component.html',
// // //   styleUrls: ['./app.component.scss']
// // // })
// // // export class AppComponent implements OnInit {
// // //   user: SocialUser | null = null;
// // //   loggedIn: boolean = false;
// // //   sanitizedPhotoUrl: SafeUrl | null = null;

// // //   @ViewChild('createPostComponent') createPostComponent!: CreatePostComponent;
// // //   @ViewChild('googleSignInButton', { static: true }) googleSignInButton!: ElementRef;

// // //   constructor(
// // //     private authService: SocialAuthService,
// // //     private sanitizer: DomSanitizer,
// // //     private commonService: CommonService,
// // //   ) { }

// // //   ngOnInit(): void {
// // //     this.authService.authState.subscribe((user) => {
// // //       this.user = user;
// // //       this.loggedIn = (user != null);
// // //       if (user?.photoUrl) {
// // //         this.sanitizedPhotoUrl = this.sanitizer.bypassSecurityTrustUrl(user.photoUrl);
// // //       }
// // //       if (this.user) {
// // //         this.onLoginSuccess(this.user);
// // //       }
// // //     });

// // //     // Render Google Sign-In button
// // //     google.accounts.id.initialize({
// // //       client_id: '1088154961211-oi9bnlc9hg2v0d6hc6qu2i4eielgcai4.apps.googleusercontent.com', // Replace with your actual client ID
// // //       callback: this.handleGoogleLogin.bind(this),
// // //       auto_prompt: true
// // //     });
// // //     google.accounts.id.renderButton(this.googleSignInButton.nativeElement, { theme: 'filled_blue' });
// // //   }

// // //   handleGoogleLogin(response: any): void {
// // //     if (response.error) {
// // //       console.error('Google Sign-In Error:', response.error);
// // //     } else {
// // //       // Handle successful Google Sign-In
// // //       console.log('Google Sign-In Response:', response);
// // //       const { id_token } = response;
// // //       // Call your backend service to verify the token and handle login
// // //       // Example:
// // //       // this.authService.loginWithGoogle(id_token).subscribe(...)
// // //     }
// // //   }

// // //   onLoginSuccess(user: SocialUser): void {
// // //     // Handle login success actions
// // //   }

// // //   onLoginButtonClick(): void {
// // //     // Manually handle Google Sign-In
// // //     google.accounts.id.prompt();
// // //   }

// // //   onFacebookLoginClick(): void {
// // //     this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).catch(error => console.error(error));
// // //   }

// // //   signOut(): void {
// // //     this.authService.signOut();
// // //     localStorage.removeItem('access_token');
// // //     localStorage.removeItem('user');
// // //     this.user = null;
// // //     this.loggedIn = false;
// // //   }

// // //   onPostCreated(): void {
// // //     // Handle the event when a post is created
// // //     console.log('Post created successfully');
// // //   }

// // //   checkLoginState(event: any): void {
// // //     console.log('Facebook login event:', event);
// // //     // Handle login state if needed
// // //   }

// // //   getLoggedInUserDetails(): any {
// // //     return JSON.parse(localStorage.getItem('user') || '{}');
// // //   }
// // // }

// // import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
// // import { SocialAuthService, SocialUser, FacebookLoginProvider } from '@abacritt/angularx-social-login';
// // import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
// // import { CommonService } from './common.service';
// // import { CreatePostComponent } from './create-post/create-post.component';

// // declare var google: any;

// // @Component({
// //   selector: 'app-root',
// //   templateUrl: './app.component.html',
// //   styleUrls: ['./app.component.scss']
// // })
// // export class AppComponent implements OnInit, AfterViewInit {
// //   user: SocialUser | null = null;
// //   loggedIn: boolean = false;
// //   sanitizedPhotoUrl: SafeUrl | null = null;

// //   @ViewChild('createPostComponent') createPostComponent!: CreatePostComponent;
// //   @ViewChild('googleSignInButton', { static: true }) googleSignInButton!: ElementRef;

// //   constructor(
// //     private authService: SocialAuthService,
// //     private sanitizer: DomSanitizer,
// //     private commonService: CommonService
// //   ) { }

// //   ngOnInit(): void {
// //     this.authService.authState.subscribe((user) => {
// //       this.user = user;
// //       this.loggedIn = (user != null);
// //       if (user?.photoUrl) {
// //         this.sanitizedPhotoUrl = this.sanitizer.bypassSecurityTrustUrl(user.photoUrl);
// //       }
// //       if (this.user) {
// //         this.onLoginSuccess(this.user);
// //       }
// //     });

// //     // Retrieve user details from localStorage if available
// //     const storedUser = typeof localStorage !== 'undefined' ? localStorage.getItem('user') : null;
// //     if (storedUser) {
// //       const user = JSON.parse(storedUser);
// //       this.user = JSON.parse(storedUser);
// //       this.loggedIn = true;
// //       if (this.user?.photoUrl) {
// //         this.sanitizedPhotoUrl = this.sanitizer.bypassSecurityTrustUrl(user?.profilePic);
// //       }
// //     }
// //   }

// //   ngAfterViewInit(): void {
// //     this.loadGoogleSignIn();
// //   }

// //   private loadGoogleSignIn() {
// //     const googleScript = document.createElement('script');
// //     googleScript.src = 'https://accounts.google.com/gsi/client';
// //     googleScript.async = true;
// //     googleScript.defer = true;
// //     googleScript.onload = () => this.initializeGoogleSignIn();
// //     document.head.appendChild(googleScript);
// //   }

// //   private initializeGoogleSignIn() {
// //     google.accounts.id.initialize({
// //       client_id: '1088154961211-oi9bnlc9hg2v0d6hc6qu2i4eielgcai4.apps.googleusercontent.com', // Replace with your actual client ID
// //       callback: this.handleGoogleLogin.bind(this),
// //       auto_prompt: true
// //     });
// //     google.accounts.id.renderButton(this.googleSignInButton.nativeElement, { theme: 'filled_blue' });
// //   }

// //   handleGoogleLogin(response: any): void {
// //     if (response.error) {
// //       console.error('Google Sign-In Error:', response.error);
// //     } else {
// //       // Handle successful Google Sign-In
// //       console.log('Google Sign-In Response:', response);
// //       const { id_token } = response;
// //       // Call your backend service to verify the token and handle login
// //       // Example:
// //       // this.authService.loginWithGoogle(id_token).subscribe(...)
// //     }
// //   }

// //   onLoginSuccess(user: SocialUser): void {
// //     // Handle login success actions
// //   }

// //   onLoginButtonClick(): void {
// //     // Manually handle Google Sign-In
// //     google.accounts.id.prompt();
// //   }

// //   onFacebookLoginClick(): void {
// //     this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).catch(error => console.error(error));
// //   }

// //   signOut(): void {
// //     this.authService.signOut();
// //     localStorage.removeItem('access_token');
// //     localStorage.removeItem('user');
// //     this.user = null;
// //     this.loggedIn = false;
// //   }

// //   onPostCreated(): void {
// //     // Handle the event when a post is created
// //     console.log('Post created successfully');
// //   }

// //   checkLoginState(event: any): void {
// //     console.log('Facebook login event:', event);
// //     // Handle login state if needed
// //   }

// //   getLoggedInUserDetails(): any {
// //     return JSON.parse(localStorage.getItem('user') || '{}');
// //   }
// // }
// import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
// import { SocialAuthService, SocialUser, FacebookLoginProvider } from '@abacritt/angularx-social-login';
// import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
// import { CommonService } from './common.service';
// import { CreatePostComponent } from './create-post/create-post.component';

// declare var google: any;

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent implements OnInit, AfterViewInit {
//   user: SocialUser | null = null;
//   loggedIn: boolean = false;
//   sanitizedPhotoUrl: SafeUrl | null = null;

//   @ViewChild('createPostComponent') createPostComponent!: CreatePostComponent;
//   @ViewChild('googleSignInButton', { static: true }) googleSignInButton!: ElementRef;

//   constructor(
//     private authService: SocialAuthService,
//     private sanitizer: DomSanitizer,
//     private commonService: CommonService
//   ) { }

//   ngOnInit(): void {
//     this.authService.authState.subscribe((user) => {
//       this.user = user;
//       this.loggedIn = (user != null);
//       if (user?.photoUrl) {
//         this.sanitizedPhotoUrl = this.sanitizer.bypassSecurityTrustUrl(user.photoUrl);
//       }
//       if (this.user) {
//         this.onLoginSuccess(this.user);
//       }
//     });

//     // Retrieve user details from localStorage if available
//     const storedUser = typeof localStorage !== 'undefined' ? localStorage.getItem('user') : null;
//     if (storedUser) {
//       const user = JSON.parse(storedUser);
//       this.user = JSON.parse(storedUser);
//       this.loggedIn = true;
//       if (this.user?.photoUrl) {
//         this.sanitizedPhotoUrl = this.sanitizer.bypassSecurityTrustUrl(user?.profilePic);
//       }
//     }
//   }

//   ngAfterViewInit(): void {
//     this.loadGoogleSignIn();
//   }

//   private loadGoogleSignIn() {
//     const googleScript = document.createElement('script');
//     googleScript.src = 'https://accounts.google.com/gsi/client';
//     googleScript.async = true;
//     googleScript.defer = true;
//     googleScript.onload = () => this.initializeGoogleSignIn();
//     document.head.appendChild(googleScript);
//   }

//   private initializeGoogleSignIn() {
//     if (this.googleSignInButton) {
//       google.accounts.id.initialize({
//         client_id: '1088154961211-oi9bnlc9hg2v0d6hc6qu2i4eielgcai4.apps.googleusercontent.com', // Replace with your actual client ID
//         callback: this.handleGoogleLogin.bind(this),
//         auto_prompt: false
//       });
//       google.accounts.id.renderButton(this.googleSignInButton.nativeElement, { theme: 'filled_blue' });
//     }
//   }

//   handleGoogleLogin(response: any): void {
//     if (response.error) {
//       console.error('Google Sign-In Error:', response.error);
//     } else {
//       // Handle successful Google Sign-In
//       console.log('Google Sign-In Response:', response);
//       const { id_token } = response;
//       // Call your backend service to verify the token and handle login
//       // Example:
//       // this.authService.loginWithGoogle(id_token).subscribe(...)
//     }
//   }

//   onLoginSuccess(user: SocialUser): void {
//     // Handle login success actions
//   }

//   onFacebookLoginClick(): void {
//     this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).catch(error => console.error(error));
//   }

//   signOut(): void {
//     this.authService.signOut();
//     localStorage.removeItem('access_token');
//     localStorage.removeItem('user');
//     this.user = null;
//     this.loggedIn = false;
//   }

//   onPostCreated(): void {
//     // Handle the event when a post is created
//     console.log('Post created successfully');
//   }

//   checkLoginState(event: any): void {
//     console.log('Facebook login event:', event);
//     // Handle login state if needed
//   }

//   getLoggedInUserDetails(): any {
//     return JSON.parse(localStorage.getItem('user') || '{}');
//   }
// }













// import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
// import { SocialAuthService, SocialUser, FacebookLoginProvider, GoogleLoginProvider } from '@abacritt/angularx-social-login';
// import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
// import { CommonService } from './common.service';
// import { CreatePostComponent } from './create-post/create-post.component';
// declare const google: any;


// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss'],
// })
// export class AppComponent implements OnInit, AfterViewInit {
//   user: SocialUser | null = null;
//   loggedIn: boolean = false;
//   sanitizedPhotoUrl: SafeUrl | null = null;

//   @ViewChild('createPostComponent') createPostComponent!: CreatePostComponent;
//   @ViewChild('googleSignInButton', { static: true }) googleSignInButton!: ElementRef;

//   constructor(
//     private authService: SocialAuthService,
//     private sanitizer: DomSanitizer,
//     private commonService: CommonService
//   ) {}

//   ngOnInit(): void {
//     this.authService.authState.subscribe((user) => {
//       this.user = user;
//       this.loggedIn = user != null;
//       if (user?.photoUrl) {
//         this.sanitizedPhotoUrl = this.sanitizer.bypassSecurityTrustUrl(user.photoUrl);
//       }
//       if (this.user) {
//         this.onLoginSuccess(this.user);
//       }
//     });

//     // Retrieve user details from localStorage if available
//     const storedUser = typeof localStorage !== 'undefined' ? localStorage.getItem('user') : null;
//     if (storedUser) {
//       const user = JSON.parse(storedUser);
//       this.user = user;
//       this.loggedIn = true;
//       if (this.user?.photoUrl) {
//         this.sanitizedPhotoUrl = this.sanitizer.bypassSecurityTrustUrl(this.user.photoUrl);
//       }
//     }
//   }

//   ngAfterViewInit(): void {
//     this.loadGoogleSignIn();
//   }

//   private loadGoogleSignIn() {
//     const googleScript = document.createElement('script');
//     googleScript.src = 'https://accounts.google.com/gsi/client';
//     googleScript.async = true;
//     googleScript.defer = true;
//     googleScript.onload = () => this.initializeGoogleSignIn();
//     document.head.appendChild(googleScript);
//   }

//   private initializeGoogleSignIn() {
//     if (this.googleSignInButton) {
//       google.accounts.id.initialize({
//         client_id: '1088154961211-oi9bnlc9hg2v0d6hc6qu2i4eielgcai4.apps.googleusercontent.com',
//         callback: this.handleGoogleLogin.bind(this),
//         auto_prompt: false,
//       });
//       google.accounts.id.renderButton(this.googleSignInButton.nativeElement, { theme: 'filled_blue' });
//     }
//   }

//   handleGoogleLogin(response: any): void {
//     if (response.error) {
//       console.error('Google Sign-In Error:', response.error);
//     } else {
//       const credential = response.credential;
//       this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((user) => {
//         this.user = user;
//         this.loggedIn = true;
//         if (this.user?.photoUrl) {
//           this.sanitizedPhotoUrl = this.sanitizer.bypassSecurityTrustUrl(this.user.photoUrl);
//         }

//         // Save user details in localStorage
//         localStorage.setItem('user', JSON.stringify(this.user));
//         localStorage.setItem('access_token', credential);

//         // You can send the credential to your backend for further verification
//         // Example: this.commonService.verifyGoogleToken(credential).subscribe(...);
//       });
//     }
//   }

//   onLoginSuccess(user: SocialUser): void {
//     // Handle login success actions
//   }

//   onFacebookLoginClick(): void {
//     this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).catch((error) => console.error(error));
//   }

//   signOut(): void {
//     this.authService.signOut();
//     localStorage.removeItem('access_token');
//     localStorage.removeItem('user');
//     this.user = null;
//     this.loggedIn = false;
//   }

//   onPostCreated(): void {
//     // Handle the event when a post is created
//     console.log('Post created successfully');
//   }

//   checkLoginState(event: any): void {
//     console.log('Facebook login event:', event);
//     // Handle login state if needed
//   }

//   getLoggedInUserDetails(): any {
//     return JSON.parse(localStorage.getItem('user') || '{}');
//   }
// }










// import { Component, OnInit, ViewChild, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
// import { isPlatformBrowser } from '@angular/common';
// import { SocialAuthService, SocialUser, GoogleLoginProvider } from '@abacritt/angularx-social-login';
// import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


// // Declare the google object globally
// declare const google: any;

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss'],
// })
// export class AppComponent implements OnInit {
//   user: SocialUser | null = null;
//   loggedIn: boolean = false;
//   sanitizedPhotoUrl: SafeUrl | null = null;

//   @ViewChild('googleSignInButton', { static: true }) googleSignInButton!: ElementRef;

//   constructor(
//     private authService: SocialAuthService,
//     private sanitizer: DomSanitizer,
//     @Inject(PLATFORM_ID) private platformId: Object
//   ) {}

//   ngOnInit(): void {
//     this.authService.authState.subscribe((user) => {
//       this.user = user;
//       this.loggedIn = user != null;
//       if (user?.photoUrl) {
//         this.sanitizedPhotoUrl = this.sanitizer.bypassSecurityTrustUrl(user.photoUrl);
//       }
//       if (this.user) {
//         this.onLoginSuccess(this.user);
//       }
//     });

//     if (isPlatformBrowser(this.platformId)) {
//       const storedUser = localStorage.getItem('user');
//       if (storedUser) {
//         const user = JSON.parse(storedUser);
//         this.user = user;
//         this.loggedIn = true;
//         if (this.user?.photoUrl) {
//           this.sanitizedPhotoUrl = this.sanitizer.bypassSecurityTrustUrl(this.user.photoUrl);
//         }
//       }
//     }
//   }


//   signInWithGoogle(): void {
//     this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
//       .then((user) => {
//         this.user = user;
//         this.loggedIn = true;
//         if (this.user?.photoUrl) {
//           this.sanitizedPhotoUrl = this.sanitizer.bypassSecurityTrustUrl(this.user.photoUrl);
//         }
//       })
//       .catch(err => console.error('Google Sign-In Error:', err));
//   }

//   ngAfterViewInit(): void {
//     if (isPlatformBrowser(this.platformId)) {
//       this.loadGoogleSignIn();
//     }
//   }

//   private loadGoogleSignIn() {
//     const googleScript = document.createElement('script');
//     googleScript.src = 'https://accounts.google.com/gsi/client';
//     googleScript.async = true;
//     googleScript.defer = true;
//     googleScript.onload = () => this.initializeGoogleSignIn();
//     document.head.appendChild(googleScript);
//   }

//   private initializeGoogleSignIn() {
//     if (this.googleSignInButton) {
//       google.accounts.id.initialize({
//         client_id: '1088154961211-oi9bnlc9hg2v0d6hc6qu2i4eielgcai4.apps.googleusercontent.com',
//         callback: this.handleGoogleLogin.bind(this),
//       });
//       google.accounts.id.renderButton(this.googleSignInButton.nativeElement, {
//         type: 'standard',
//         theme: 'outline',
//         size: 'large',
//       });
//     }
//   }

//   handleGoogleLogin(response: any): void {
//     if (response.error) {
//       console.error('Google Sign-In Error:', response.error);
//     } else {
//       const credential = response.credential;
//       this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((user) => {
//         this.user = user;
//         this.loggedIn = true;
//         if (this.user?.photoUrl) {
//           this.sanitizedPhotoUrl = this.sanitizer.bypassSecurityTrustUrl(this.user.photoUrl);
//         }

//         if (isPlatformBrowser(this.platformId)) {
//           localStorage.setItem('user', JSON.stringify(this.user));
//           localStorage.setItem('access_token', credential);
//         }

//         // You can send the credential to your backend for further verification
//         // Example: this.commonService.verifyGoogleToken(credential).subscribe(...);
//       });
//     }
//   }

//   onLoginSuccess(user: SocialUser): void {
//     // Handle login success actions
//   }

//   // signOut(): void {
//   //   this.authService.signOut();
//   //   if (isPlatformBrowser(this.platformId)) {
//   //     localStorage.removeItem('access_token');
//   //     localStorage.removeItem('user');
//   //   }
//   //   this.user = null;
//   //   this.loggedIn = false;
//   // }

//   // getLoggedInUserDetails(): any {
//   //   if (isPlatformBrowser(this.platformId)) {
//   //     return JSON.parse(localStorage.getItem('user') || '{}');
//   //   }
//   //   return null;
//   // }

//   signOut(): void {
//     this.authService.signOut();
//     this.user = null;
//     this.loggedIn = false;
//   }

//   getLoggedInUserDetails(): any {
//     return this.user;
//   }

//   // Define these methods to avoid errors in template
//   onFacebookLoginClick(): void {
//     // Handle Facebook login click
//   }

//   onPostCreated(): void {
//     // Handle post creation
//   }
// }


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
