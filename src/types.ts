export interface LeftMenuElement {
  isActive: boolean;
  name: string;
  url: string;
}

export interface LeftMenuElementsData {
  leftMenuElements: LeftMenuElement[];
}

export interface NewsArticlesElement {
  image: string;
  title: string;
  subTitle: string;
  createdAt: string;
  url: string;
  isActive: boolean;
}

export interface NewsArticlesData {
  newsArticles: NewsArticlesElement[];
}
