// post.ts

export interface Post {
    _id: string;
    images: [string];
    postImages: [string],
    likes: number;
    user: {
      _id: string;
      profilePic: string;
      name: string;
      email: string;
      createdAt: Date;
    };
    content: string;
    comments: {
      user: string;
      comment: string;
      createdAt: string;
      _id: string;
    }[];
    createdAt: string;
    __v: number;
  }
  