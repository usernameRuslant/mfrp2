import { useQuery, keepPreviousData } from '@tanstack/react-query';
import SearchForm from '../SearchForm/SearchForm';
import { fetchArticlesPagi } from '../../services/serv';
import { useState } from 'react';
import ArticleList from '../ArticList/ArticList';
import ReactPaginate from 'react-paginate';
import css from './PagiTest.module.css';

const PagiTest = () => {
  const [topic, setTopic] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['articles', topic, currentPage],
    queryFn: () => fetchArticlesPagi(topic, currentPage),
    enabled: topic !== '',
    placeholderData: keepPreviousData,
  });

  const handleSubmit = (newTopic: string) => {
    setTopic(newTopic);
    setCurrentPage(1);

    // setPage(1);

    // setQuery(topic);
  };
  //////////////////
  // const changePage = ({ selected }: { selected: number }) =>
  //   setCurrentPage(selected + 1);
  //////////////////

  const totalPages = data?.nbPages ?? 0;

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      {isLoading && <p>Loading data..</p>}
      {isError && <p>There was an error !!</p>}
      {data && data.hits.length > 0 && <ArticleList items={data.hits} />}
      {isSuccess && totalPages > 1 && (
        <ReactPaginate
          pageCount={totalPages}
          pageRangeDisplayed={5} //сколько элементов в цетре от левого и правого разделителя
          marginPagesDisplayed={1} //зазаор
          // onPageChange={changePage}
          onPageChange={({ selected }) => setCurrentPage(selected + 1)}
          forcePage={currentPage - 1}
          containerClassName={css.pagination}
          activeClassName={css.active}
          nextLabel="→"
          previousLabel="←"
        />
      )}
    </>
  );
};
export default PagiTest;
