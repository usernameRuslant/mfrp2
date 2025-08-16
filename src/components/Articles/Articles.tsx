import { useQuery } from '@tanstack/react-query';
import SearchForm from '../SearchForm/SearchForm';
import { fetchArticles } from '../../services/serv';
import { useState } from 'react';
import ArticleList from '../ArticList/ArticList';

const Articles = () => {
  const [topic, setTopic] = useState('');

  const { data, isLoading, isError } = useQuery({
    queryKey: ['articles', topic],
    queryFn: () => fetchArticles(topic),
    enabled: topic !== '',
  });

  const handleSubmit = (newTopic: string) => {
    setTopic(newTopic);

    // setPage(1);

    // setQuery(topic);
  };
  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      {isLoading && <p>Loading data..</p>}
      {isError && <p>There was an error !!</p>}
      {data && data.hits.length > 0 && <ArticleList items={data.hits} />}
    </>
  );
};

export default Articles;
