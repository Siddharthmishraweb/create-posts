import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service'; // Replace with your actual service path
import { Observable } from 'rxjs';
import { Post } from '../post'; // Define your Post interface or class
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  posts$!: Observable<Post[]>;
  posts: any;

  newComment: string = ''; // Variable to hold new comment input

  constructor(private postService: CommonService, private router: Router) { }

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

  // toggleLike(post: any) {
  //   const liked = post.liked; // Assume this flag indicates whether the post is liked by the user
  //   if (liked) {
  //     this.postService.unlikePost(post._id).subscribe(() => {
  //       post.likes--;
  //       post.liked = false;
  //     });
  //   } else {
  //     this.postService.likePost(post._id).subscribe(() => {
  //       post.likes++;
  //       post.liked = true;
  //     });
  //   }
  // }

  toggleLike(post: any) {
    const liked = post.liked;
    if (liked) {
      this.postService.unlikePost(post._id).subscribe(() => {
        post.likes--;
        post.liked = false;
        post.likeColor = 'black'; // Assuming 'likeColor' controls button color
      });
    } else {
      this.postService.likePost(post._id).subscribe(() => {
        post.likes++;
        post.liked = true;
        post.likeColor = 'rgb(8, 102, 255)'; // Change to liked color
      });
    }
  }

  goToPostDetails(postId: string) {
    this.router.navigate(['/post', postId]);
  }
}
