export interface NewsArticlesElement {
  id: string;
  image: string;
  title: string;
  subTitle: string;
  createdAt: string;
  url: string;
  isActive: boolean;
  text?: string;
}

export interface NewsArticlesData {
  newsArticles: NewsArticlesElement[];
}
