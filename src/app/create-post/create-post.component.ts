import { Component, EventEmitter, Output } from '@angular/core';
import { CommonService } from '../common.service';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {
  postContent: string = '';
  postImages: string = '';
  isModalOpen: boolean = false;
  user: SocialUser | null = null;
  
  @Output() postCreated = new EventEmitter<void>();

  constructor(private commonService: CommonService, private authService: SocialAuthService) {
    this.authService.authState.subscribe((user) => {
      this.user = user;
    });
  }

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
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
        this.closeModal();
        this.postCreated.emit();
      });
    }
  }
}
