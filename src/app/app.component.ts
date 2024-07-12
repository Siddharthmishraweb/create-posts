// import { Component, OnInit, ViewChild } from '@angular/core';
// import { SocialAuthService, SocialUser, GoogleLoginProvider } from '@abacritt/angularx-social-login';
// import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
// import { CommonService } from './common.service';
// import { CreatePostComponent } from './create-post/create-post.component';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent implements OnInit {
//   user: SocialUser | null = null;
//   loggedIn: boolean = false;
//   sanitizedPhotoUrl: SafeUrl | null = null;

//   @ViewChild('createPostComponent') createPostComponent!: CreatePostComponent;

//   constructor(private authService: SocialAuthService, private sanitizer: DomSanitizer, private commonService: CommonService) { }

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
//   }

//   private onLoginSuccess(user: SocialUser): void {
//     const loginPayload = {
//       idToken: user.idToken,
//       id: user.id,
//       name: user.name,
//       email: user.email,
//       photoUrl: user.photoUrl,
//       firstName: user.firstName,
//       lastName: user.lastName,
//       provider: user.provider
//     };

//     this.commonService.loginWithGoogle(loginPayload).subscribe(response => {
//       localStorage.setItem('access_token', response.access_token);
//     });
//   }

//   onLoginButtonClick(): void {
//     this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
//   }

//   signOut(): void {
//     this.authService.signOut();
//     localStorage.removeItem('access_token');
//     this.user = null;
//     this.loggedIn = false;
//   }

//   onPostCreated(): void {
//     // Handle the event when a post is created
//     console.log('Post created successfully');
//   }
// }

import { Component, OnInit, ViewChild } from '@angular/core';
import { SocialAuthService, SocialUser, GoogleLoginProvider } from '@abacritt/angularx-social-login';
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
      localStorage.setItem('access_token', response.access_token);
    });
  }

  onLoginButtonClick(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
    localStorage.removeItem('access_token');
    this.user = null;
    this.loggedIn = false;
  }

  onPostCreated(): void {
    // Handle the event when a post is created
    console.log('Post created successfully');
  }
}
