export type PostData = {
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  id: string;
  authors: AuthorData[];
  comments: CommentData[];
};

export type AuthorData = {
  createdAt: string;
  name: string;
  avatar: string;
  updatedAt: string;
  id: string;
  postId: string;
};

export type CommentData = {
  createdAt: string;
  title: string;
  description: string;
  updatedAt: string;
  id: string;
  postId: string;
};
