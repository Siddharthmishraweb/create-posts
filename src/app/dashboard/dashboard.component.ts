import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Observable } from 'rxjs';
import { Post } from '../post';
import { Router } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  posts$!: Observable<Post[]>;
  posts: any;
  newComment: string = '';

  constructor(
    private postService: CommonService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.posts$ = this.postService.getPosts();
    this.posts$.subscribe(value => {
      this.posts = value;
      this.sanitizePostImages();
    });
  }

  sanitizePostImages() {
    this.posts.forEach((post: any) => {
      post.user = post.user || {};
      post.userImages = this.sanitizer.bypassSecurityTrustUrl(post?.user?.profilePic);
      post.selectedImageIndex = 0;
      post.comments.forEach((comment: any) => {
        comment.user.image = this.sanitizeUrl(comment.user?.profilePic || 'assets/default-user-image.png');
      });
    });
  }

  sanitizeUrl(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  toggleComments(post: any) {
    post.showComments = !post.showComments;
  }

  addComment(post: any) {
    if (this.newComment.trim() !== '') {
      const newComment = {
        user: JSON.parse(localStorage.getItem("user") || ""),
        comment: this.newComment,
        createdAt: new Date().toISOString()
      };

      this.postService.addComment(post._id, newComment).subscribe((updatedPost: Post) => {
        post.comments = updatedPost.comments;
        this.newComment = '';
      });
    }
  }

  toggleLike(post: any) {
    const liked = post.liked;
    if (liked) {
      this.postService.unlikePost(post._id).subscribe(() => {
        post.likes--;
        post.liked = false;
      });
    } else {
      this.postService.likePost(post._id).subscribe(() => {
        post.likes++;
        post.liked = true;
      });
    }
  }

  goToPostDetails(postId: string) {
    this.router.navigate(['/post', postId]);
  }

  selectImage(post: any, index: number) {
    post.selectedImageIndex = index;
  }

  swapImage(post: any): void {
    const temp = post.mainImage;
    post.mainImage = post.sideImage;
    post.sideImage = temp;
  }
}
