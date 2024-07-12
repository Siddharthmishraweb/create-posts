// post.ts

export interface Post {
    _id: string;
    images: string[];
    likes: number;
    user: {
      _id: string;
      image: string;
      name: string;
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
  