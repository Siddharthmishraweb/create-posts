// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login-modal',
//   templateUrl: './login-modal.component.html',
//   styleUrl: './login-modal.component.scss'
// })
// export class LoginModalComponent {

// }

// import { Component } from '@angular/core';
// import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
// import { GoogleLoginProvider } from '@abacritt/angularx-social-login';

// @Component({
//   selector: 'app-login-modal',
//   templateUrl: './login-modal.component.html',
//   styleUrls: ['./login-modal.component.scss']
// })
// export class LoginModalComponent {
//   user: SocialUser | null = null;
//   loggedIn: boolean = false;

//   constructor(private authService: SocialAuthService) {
//     this.authService.authState.subscribe((user) => {
//       this.user = user;
//       this.loggedIn = (user != null);
//       if (this.loggedIn) {
//         // Save the user globally, for example, in a service
//         localStorage.setItem('user', JSON.stringify(this.user));
//       }
//     });
//   }

//   signInWithGoogle(): void {
//     this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
//   }

//   signOut(): void {
//     this.authService.signOut();
//     localStorage.removeItem('user');
//   }
// }


// import { Component } from '@angular/core';
// import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
// import { GoogleLoginProvider } from '@abacritt/angularx-social-login';

// @Component({
//   selector: 'app-login-modal',
//   templateUrl: './login-modal.component.html',
//   styleUrls: ['./login-modal.component.scss']
// })
// export class LoginModalComponent {
//   user: SocialUser | null = null;
//   loggedIn: boolean = false;

//   constructor(private authService: SocialAuthService) {
//     this.authService.authState.subscribe((user) => {
//       this.user = user;
//       this.loggedIn = (user != null);
//       if (this.loggedIn) {
//         // Save the user globally, for example, in a service
//         localStorage.setItem('user', JSON.stringify(this.user));
//       }
//     });
//   }

//   signInWithGoogle(): void {
//     this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
//   }

//   signOut(): void {
//     this.authService.signOut();
//     localStorage.removeItem('user');
//   }
// }

import { Component } from '@angular/core';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent {
  user: SocialUser | null = null;
  loggedIn: boolean = false;

  constructor(private authService: SocialAuthService) {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      if (this.loggedIn) {
        // Save the user globally, for example, in a service
        localStorage.setItem('user', JSON.stringify(this.user));
      }
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
    localStorage.removeItem('user');
  }
}






// import { Component } from '@angular/core';
// import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
// import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// @Component({
//   selector: 'app-login-modal',
//   templateUrl: './login-modal.component.html',
//   styleUrls: ['./login-modal.component.scss']
// })
// export class LoginModalComponent {
//   user: SocialUser | null = null;
//   loggedIn: boolean = false;

//   constructor(private authService: SocialAuthService ,private modalService: NgbModal) {
//     this.authService.authState.subscribe((user) => {
//       this.user = user;
//       this.loggedIn = (user != null);
//       if (this.loggedIn) {
//         // Save the user globally, for example, in a service
//         localStorage.setItem('user', JSON.stringify(this.user));
//       }
//     });
//   }

//   signInWithGoogle(): void {
//     this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
//   }

//   signOut(): void {
//     this.authService.signOut();
//     localStorage.removeItem('user');
//   }
  
// }
