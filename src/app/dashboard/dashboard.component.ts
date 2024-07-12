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
      console.warn("post::: ", post);
      post.user = post.user || {};
      // post.user.image = this.sanitizeUrl(post.user.profilePic || 'assets/default-user-image.png');
      post.user.pimage = post.user.profilePic;
      post.userImages = this.sanitizer.bypassSecurityTrustUrl(post.user.profilePic);
      console.log("post.user.image:::   ", post.user.image)
      post.comments.forEach((comment: any) => {
        comment.user.image = this.sanitizeUrl(comment.user?.profilePic || 'assets/default-user-image.png');
      });
    });
  }

  sanitizeUrl(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  toggleComments(post: any) {
    post.showComments = !post.showComments; // Toggle comments visibility
  }

  addComment(post: any) {
    if (this.newComment.trim() !== '') {
      post.comments.push({
        user: 'USER_ID',
        comment: this.newComment,
        createdAt: new Date().toISOString()
      });
      this.newComment = '';
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

  // swapImage(post: any, image: string): void {
  //   const mainImageIndex = post.images.indexOf(post.mainImage);
  //   const newMainImageIndex = post.images.indexOf(image);

  //   post.mainImage = image;
  //   post.images[newMainImageIndex] = post.images[mainImageIndex];
  //   post.images[mainImageIndex] = image;
  // }
  swapImage(post: any): void {
    // Swap mainImage and sideImage
    const temp = post.mainImage;
    post.mainImage = post.sideImage;
    post.sideImage = temp;
  }
  
}
