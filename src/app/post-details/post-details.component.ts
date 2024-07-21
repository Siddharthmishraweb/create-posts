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
  sanitizer: any;

  constructor(
    private route: ActivatedRoute,
    private postService: CommonService
  ) {}

  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('id');
    if (postId) {
      this.postService.getPostById(postId).subscribe(post => {
        post.createdAt = new Date(post.createdAt).toLocaleString('en-IN', {
          timeZone: 'Asia/Kolkata'
        });
        
        this.post = post;
        post.postImages = post.images;
        this.sanitizePostImages(post);
      });
    }
  }

  getPostUserName(post: Post): string {
    return post?.user?.name || 'Anonymous';
  }

  getPostImages(post: Post): [string] {
    return post?.images || 'Anonymous';
  }

  sanitizePostImages(post: any) {
    post.images = this.sanitizer.bypassSecurityTrustUrl(this.post?.images);
    this.post = post;
  }


  getPostUserPic(post: Post): string {
    const postUser = post.user;
    const { profilePic } = postUser;
    return profilePic || 'assets/default-user-image.png';
  }

  formatLocalTime(dateStr: string): string {
    return new Date(dateStr).toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata'
    });
  }
}
