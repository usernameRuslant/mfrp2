import axios from 'axios';
import type { Article } from '../types/articles';

interface ArticlesHttpResponse {
  hits: Article[];
}
interface ArticlesHttpResponsePerPage {
  hits: Article[];
  nbPages: number;
}

export const fetchPerson = async (id: number) => {
  const response = await axios.get(`https://swapi.info/api/people/${id}`);
  return response.data;
};

export const fetchArticles = async (topic: string) => {
  const response = await axios.get<ArticlesHttpResponse>(
    'https://hn.algolia.com/api/v1/search',
    {
      params: {
        query: topic,
      },
    }
  );
  return response.data;
};

export const fetchArticlesPagi = async (topic: string, page: number) => {
  const response = await axios.get<ArticlesHttpResponsePerPage>(
    'https://hn.algolia.com/api/v1/search',
    {
      params: {
        query: topic,
        hitsPerPage: 5,
        page,
      },
    }
  );
  return response.data;
};
