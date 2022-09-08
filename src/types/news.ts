export interface NewsArticlesElement {
  id: string;
  image: string;
  title: string;
  subTitle: string;
  createdAt: string;
  url: string;
  urlLabel: string;
  text: string;
}

export interface NewsArticlesData {
  newsArticles: NewsArticlesElement[];
}

export interface NewsArticleData {
  newsArticle: NewsArticlesElement;
}
