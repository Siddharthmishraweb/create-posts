// // dashboard.component.ts

// import { Component, OnInit } from '@angular/core';
// import { CommonService } from '../common.service'; // Replace with your actual service path
// import { Observable } from 'rxjs';
// import { Post } from '../post'; // Define your Post interface or class

// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.scss']
// })
// export class DashboardComponent implements OnInit {
// posts$!: Observable<Post[]>;
// posts:any;

//   constructor(private postService: CommonService) { }

//   ngOnInit(): void {
//     this.posts$ = this.postService.getPosts();
//     this.posts$.subscribe(value=>{
//       this.posts=value;
//  console.log("hey this is a value",value);
//     })
//     console.log('heyyy',this.posts$);

//   }
// }




import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service'; // Replace with your actual service path
import { Observable } from 'rxjs';
import { Post } from '../post'; // Define your Post interface or class

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  posts$!: Observable<Post[]>;
  posts: any;

  newComment: string = ''; // Variable to hold new comment input

  constructor(private postService: CommonService) { }

  ngOnInit(): void {
    this.posts$ = this.postService.getPosts();
    this.posts$.subscribe(value => {
      this.posts = value;
    });
  }

  toggleComments(post: any) {
    post.showComments = !post.showComments; // Toggle comments visibility
  }

  addComment(post: any) {
    // Assuming you have a service method to add comments
    // You can modify this logic based on your actual implementation
    if (this.newComment.trim() !== '') {
      post.comments.push({
        user: 'USER_ID', // Replace with actual user ID
        comment: this.newComment,
        createdAt: new Date().toISOString()
      });
      this.newComment = ''; // Clear the input after adding comment
    }
  }
}

