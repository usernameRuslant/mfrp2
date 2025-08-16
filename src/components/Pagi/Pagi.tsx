// import { useQuery } from '@tanstack/react-query';
// import { useState } from 'react';
// import ReactPaginate from 'react-paginate';

// const Pagi = () => {
//   const [topic, setTopic] = useState('');

//   const [currentPage, setCurrentPage] = useState(1);

//   const { data, isLoading, isError, isSuccess } = useQuery({
//     queryKey: ['articles', topic, currentPage],
//     queryFn: () => fetchArticles(topic, currentPage),
//     enabled: topic !== '',
//     placeholderData: keepPreviousData,
//   });

//   const totalPages = data?.nbPages ?? 0;

//   const handleSearch = async (newTopic: string) => {
//     setTopic(newTopic);
//     setCurrentPage(1);
//   };

//   return (
//     <>
//       <SearchForm onSubmit={handleSearch} />
//       {isSuccess && totalPages > 1 && (
//         <ReactPaginate
//           pageCount={totalPages}
//           pageRangeDisplayed={5}
//           marginPagesDisplayed={1}
//           onPageChange={({ selected }) => setCurrentPage(selected + 1)}
//           forcePage={currentPage - 1}
//           containerClassName={css.pagination}
//           activeClassName={css.active}
//           nextLabel="→"
//           previousLabel="←"
//         />
//       )}
//       {isLoading && <p>Loading data, please wait...</p>}
//       {isError && <p>Whoops, something went wrong! Please try again!</p>}
//       {data && data.hits.length > 0 && <ArticleList items={data.hits} />}
//     </>
//   );
// };

// export default Pagi;
