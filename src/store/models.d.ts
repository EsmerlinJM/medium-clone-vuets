export interface User {
  email: string
  token: string
  username: string
  bio?: string
  image?: string
}

export interface UserSubmit {
    email: string
    password: string
}

export interface Profile {
  username: string
  bio?: string
  image?: string
  following: boolean
}

export interface ProfileResponse {
  profile: Profile
}

export interface UserResponse {
  user: User
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList?: string[] | null;
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: Author;
}

export interface Author {
  username: string;
  bio: string;
  image: string;
  following: boolean;
}

export interface ArticlesResponse {
  articles?: Article[] | null;
  articlesCount?: number;
}

export interface UserForUpdate {
  email?: string;
  username?: string;
  bio?: string;
  password?: string;
  image?: string;
}