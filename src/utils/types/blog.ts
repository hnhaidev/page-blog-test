export type TBlogPost = {
  title: string;
  content: string;
  thumbnail: string;
  description?: string;
};

export type TBlog = TBlogPost & {
  id: string;
  createdAt: Date | string;
};
