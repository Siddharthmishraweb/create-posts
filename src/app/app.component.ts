// // import { Component, OnInit } from '@angular/core';
// // import { SocialAuthService, SocialUser, GoogleLoginProvider } from '@abacritt/angularx-social-login';
// // import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
// // import { CommonService } from './common.service';

// // @Component({
// //   selector: 'app-root',
// //   templateUrl: './app.component.html',
// //   styleUrls: ['./app.component.scss']
// // })
// // export class AppComponent implements OnInit {
// //   user: SocialUser | null = null;
// //   loggedIn: boolean = false;
// //   sanitizedPhotoUrl: SafeUrl | null = null;

// //   constructor(private authService: SocialAuthService, private sanitizer: DomSanitizer, private commonService: CommonService) { }

// //   ngOnInit(): void {
// //     this.authService.authState.subscribe((user) => {
// //       this.user = user;
// //       console.log("User is: ", user);
// //       this.loggedIn = (user != null);
// //       if (user?.photoUrl) {
// //         this.sanitizedPhotoUrl = this.sanitizer.bypassSecurityTrustUrl(user.photoUrl);
// //       }
// //       if (this.user) {
// //         this.onLoginSuccess(this.user);
// //       }
      
// //     });
// //   }



// //   private onLoginSuccess(user: SocialUser): void {
// //     const loginPayload = {
// //       idToken: user.idToken,
// //       id: user.id,
// //       name: user.name,
// //       email: user.email,
// //       photoUrl: user.photoUrl,
// //       firstName: user.firstName,
// //       lastName: user.lastName,
// //       provider: user.provider
// //     };

// //     this.commonService.loginWithGoogle(loginPayload)
// //       .subscribe(response => {
// //         localStorage.setItem('access_token', response.access_token);
// //       });
// //   }

// //   onLoginButtonClick(): void {
// //     this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
// //   }

// //   signInWithGoogle(): void {
// //     this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
// //   }

// //   signOut(): void {
// //     this.authService.signOut();
// //     localStorage.removeItem('user');
// //     this.user = null;
// //     this.loggedIn = false;
// //   }
// // }














// // import { Component, OnInit } from '@angular/core';
// // import { SocialAuthService, SocialUser, GoogleLoginProvider } from '@abacritt/angularx-social-login';
// // import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
// // import { CommonService } from './common.service';

// // @Component({
// //   selector: 'app-root',
// //   templateUrl: './app.component.html',
// //   styleUrls: ['./app.component.scss']
// // })
// // export class AppComponent implements OnInit {
// //   user: SocialUser | null = null;
// //   loggedIn: boolean = false;
// //   sanitizedPhotoUrl: SafeUrl | null = null;
// //   postContent: string = '';
// //   postImages: string = '';
// //   declare bootstrap: any;

// //   constructor(private authService: SocialAuthService, private sanitizer: DomSanitizer, private commonService: CommonService) { }

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
// //   }

// //   private onLoginSuccess(user: SocialUser): void {
// //     const loginPayload = {
// //       idToken: user.idToken,
// //       id: user.id,
// //       name: user.name,
// //       email: user.email,
// //       photoUrl: user.photoUrl,
// //       firstName: user.firstName,
// //       lastName: user.lastName,
// //       provider: user.provider
// //     };

// //     this.commonService.loginWithGoogle(loginPayload).subscribe(response => {
// //       localStorage.setItem('access_token', response.access_token);
// //     });
// //   }

// //   onLoginButtonClick(): void {
// //     this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
// //   }

// //   signInWithGoogle(): void {
// //     this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
// //   }

// //   signOut(): void {
// //     this.authService.signOut();
// //     localStorage.removeItem('access_token');
// //     this.user = null;
// //     this.loggedIn = false;
// //   }

// //   createPost(): void {
// //     if (this.user) {
// //       const createPostPayload = {
// //         content: this.postContent,
// //         images: this.postImages.split(',').map(img => img.trim()),
// //         user: this.user.email,
// //       };

// //       this.commonService.createPost(createPostPayload).subscribe(response => {
// //         console.log('Post created successfully:', response);
// //         this.postContent = '';
// //         this.postImages = '';
// //         // Close the modal (use Bootstrap's modal API)
// //         const modal = document.getElementById('createPostModal');
// //         if (modal) {
// //           const bsModal = this.bootstrap.Modal.getInstance(modal);
// //           bsModal.hide();
// //         }
// //       });
// //     }
// //   }
// // }



// import { Component, OnInit } from '@angular/core';
// import { SocialAuthService, SocialUser, GoogleLoginProvider } from '@abacritt/angularx-social-login';
// import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
// import { CommonService } from './common.service';

// declare const bootstrap: any; // Declare bootstrap to access Bootstrap modal API

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent implements OnInit {
//   user: SocialUser | null = null;
//   loggedIn: boolean = false;
//   sanitizedPhotoUrl: SafeUrl | null = null;
//   postContent: string = '';
//   postImages: string = '';

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

//   signInWithGoogle(): void {
//     this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
//   }

//   signOut(): void {
//     this.authService.signOut();
//     localStorage.removeItem('access_token');
//     this.user = null;
//     this.loggedIn = false;
//   }

//   createPost(): void {
//     if (this.user) {
//       const createPostPayload = {
//         content: this.postContent,
//         images: this.postImages.split(',').map(img => img.trim()),
//         user: this.user.email,
//       };

//       this.commonService.createPost(createPostPayload).subscribe(response => {
//         console.log('Post created successfully:', response);
//         this.postContent = '';
//         this.postImages = '';
//         // Close the modal using Bootstrap modal API
//         const modalElement = document.getElementById('createPostModal');
//         if (modalElement) {
//           const modal = new bootstrap.Modal(modalElement);
//           modal.hide();
//         }
//       });
//     }
//   }
// }


import { Component, OnInit } from '@angular/core';
import { SocialAuthService, SocialUser, GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { CommonService } from './common.service';


declare const bootstrap: any; // Declare bootstrap to access Bootstrap modal API

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user: SocialUser | null = null;
  loggedIn: boolean = false;
  sanitizedPhotoUrl: SafeUrl | null = null;
  postContent: string = '';
  postImages: string = '';

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

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
    localStorage.removeItem('access_token');
    this.user = null;
    this.loggedIn = false;
  }

  createPost(): void {
    if (this.user) {
      const createPostPayload = {
        content: this.postContent,
        images: this.postImages.split(',').map(img => img.trim()),
        user: this.user.email,
      };

      this.commonService.createPost(createPostPayload).subscribe(response => {
        console.log('Post created successfully:', response);
        this.postContent = '';
        this.postImages = '';
        // Close the modal using Bootstrap modal API
        const modalElement = document.getElementById('createPostModal');
        if (modalElement) {
          const modal = new bootstrap.Modal(modalElement);
          modal.hide();
        }
      });
    }
  }
}
