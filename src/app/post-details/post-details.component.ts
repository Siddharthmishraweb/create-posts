// // import { Component, OnInit } from '@angular/core';
// // import { ActivatedRoute } from '@angular/router';
// // import { CommonService } from '../common.service';
// // import { Post } from '../post';

// // @Component({
// //   selector: 'app-post-details',
// //   templateUrl: './post-details.component.html',
// //   styleUrls: ['./post-details.component.scss']
// // })
// // export class PostDetailsComponent implements OnInit {
// //   post: Post | undefined;

// //   constructor(
// //     private route: ActivatedRoute,
// //     private postService: CommonService
// //   ) {}

// //   ngOnInit(): void {
// //     const postId = this.route.snapshot.paramMap.get('id');
// //     if (postId) {
// //       this.postService.getPostById(postId).subscribe(post => {
// //         this.post = post;
// //       });
// //     }
// //   }
// // }

// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { CommonService } from '../common.service';
// import { Post } from '../post';

// @Component({
//   selector: 'app-post-details',
//   templateUrl: './post-details.component.html',
//   styleUrls: ['./post-details.component.scss']
// })
// export class PostDetailsComponent implements OnInit {
//   post: Post | undefined;

//   constructor(
//     private route: ActivatedRoute,
//     private postService: CommonService
//   ) {}

//   ngOnInit(): void {
//     const postId = this.route.snapshot.paramMap.get('id');
//     if (postId) {
//       this.postService.getPostById(postId).subscribe(post => {
//         // Format date to Indian local time
//         post.createdAt = new Date(post.createdAt).toLocaleString('en-IN', {
//           timeZone: 'Asia/Kolkata'
//         });
//         post.user.image;
//         const postUser = post.user;
//         // const { profilePic } = postUser;
//         const postUserImage = Object.values(postUser)[3];
//         console.log("postUser:: ", Object.values(postUser)[3]);
//         console.log("post.user.image:: ")
//         post.userImage = postUserImage;
//         this.post = post;
//       });
//     }
//   }
// }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../common.service';
import { Post } from '../post';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  post: Post | undefined;

  constructor(
    private route: ActivatedRoute,
    private postService: CommonService
  ) {}

  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('id');
    if (postId) {
      this.postService.getPostById(postId).subscribe(post => {
        // Format date to Indian local time
        post.createdAt = new Date(post.createdAt).toLocaleString('en-IN', {
          timeZone: 'Asia/Kolkata'
        });
        console.log("post::: ", post);
        this.post = post;
      });
    }
  }

  getPostUserName(post: Post): string {
    return post?.user?.name || 'Anonymous';
  }

  getPostUserPic(post: Post): string {
    const postUser = post.user;
    const { profilePic } = postUser;
    const postUserImage = Object.values(postUser)[3];
    console.log("postUser:: ", Object.values(postUser)[3]);
    return profilePic || 'assets/default-user-image.png';
  }

  formatLocalTime(dateStr: string): string {
    return new Date(dateStr).toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata'
    });
  }
}





// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { CommonService } from '../common.service';
// import { Post } from '../post';

// @Component({
//   selector: 'app-post-details',
//   templateUrl: './post-details.component.html',
//   styleUrls: ['./post-details.component.scss']
// })
// export class PostDetailsComponent implements OnInit {
//   post: Post | undefined;

//   constructor(
//     private route: ActivatedRoute,
//     private postService: CommonService
//   ) {}

//   ngOnInit(): void {
//     const postId = this.route.snapshot.paramMap.get('id');
//     if (postId) {
//       this.postService.getPostById(postId).subscribe(post => {
//         if (post) {
//           post.createdAt = new Date(post.createdAt).toLocaleString('en-IN', {
//             timeZone: 'Asia/Kolkata'
//           });
//           this.post = post;
//         }
//       });
//     }
//   }

//   getPostUserName(post: Post | undefined): string {
//     return post?.user?.name || 'Anonymous';
//   }


//   getPostUserPic(post: Post): string {
//     const postUser = post.user;
//     // const { profilePic } = postUser;
//     const postUserImage = Object.values(postUser)[3];
//     console.log("postUser:: ", Object.values(postUser)[3]);
//     return postUserImage || 'assets/default-user-image.png';
//   }
//   formatLocalTime(dateStr: string | undefined): string {
//     if (!dateStr) return '';
//     return new Date(dateStr).toLocaleString('en-IN', {
//       timeZone: 'Asia/Kolkata'
//     });
//   }
// }
