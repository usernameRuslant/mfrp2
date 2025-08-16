import Articles from '../Articles/Articles';
import MyFormik from '../MyFormik/MyFormik';

import GetCharcter from '../GetCharcter/GetCharcter';
import PagiTest from '../PagiTest/PagiTest';
import './App.module.css';

// const fetchCharacter = async (id: string) => {
//   const response = await axios.get(`https://swapi.info/api/people/${id}`);
//   return response.data;
// };

function App() {
  // const [count, setCount] = useState(1);

  // const [currentPage, setCurrentPage] = useState(1);

  // const queryData = useQuery({
  //   queryKey: ['articles', topic, currentPage],
  //   queryFn: () => fetchArticles(topic, currentPage),
  //   enabled: topic !== '',
  //   placeholderData: keepPreviousData,
  // });

  // const { data, error, isLoading, isError } = useQuery({
  //   queryKey: ['character', characterId],
  //   queryFn: () => fetchCharacter(characterId),
  //   enabled: characterId !== '',
  // });
  // const handleSearch = (formData: FormData) => {
  //   const id = formData.get('id') as string;
  //   setCharacterId(id);
  // };

  return (
    <>
      <MyFormik />
      <hr />
      <PagiTest />
      <hr />
      <Articles />
      <hr />
      <GetCharcter />
    </>
  );
}

export default App;
