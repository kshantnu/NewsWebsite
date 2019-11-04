export interface IConfig {
  q?: string;
  qInTitle?: string;
  sources?: string;
  domains?: string;
  excludeDomains?: string;
  from?: string;
  to?: string;
  language?: string;
  sortBy?: string;
  pageSize?: number;
  page?: number;
  apiKey?: string;
  country?: string;
  category?: string;
}

// export interface IConfigTopHeadlines {
//   country: string;
//   category: string;
//   sources: string;
//   q: string;
//   pageSize: number;
//   page: number;
//   apiKey: string;
// }

// export interface IConfigSources {
//   language: string;
//   category: string;
//   country: string;
//   apiKey: string;
// }

export interface IResponse {
  status: string;
  totalResults: number;
  articles: Array<IArticleResponse>;
  sources?: Array<IArticleResponse>;
}

// export interface ISourcesResponse {
//   status: string;
//   sources: Array<IArticleResponse>;
// }

// export interface ITopHeadlinesResponse {
//   status: string;
//   totalResults: number;
//   articles: Array<IArticleResponse>;
// }

export interface ISource {
  id: number;
  name: string;
}

export interface IArticleResponse {
  source: ISource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}
