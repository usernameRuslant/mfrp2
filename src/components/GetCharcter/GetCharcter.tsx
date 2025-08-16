import { useQuery } from '@tanstack/react-query';
import { fetchPerson } from '../../services/serv';
import { useState } from 'react';

const GetCharcter = () => {
  const [count, setCount] = useState(1);

  const { data, isError, isLoading } = useQuery({
    queryKey: ['character', count],
    // queryFn: fetchPerson
    queryFn: () => fetchPerson(count),
  });
  console.log(data);

  return (
    <div>
      GetCharcter
      <button onClick={() => setCount(count + 1)}>
        Fetch next character{count}
      </button>
      {isLoading && <p>Loading data...</p>}
      {isError && <p>There was an error!!!</p>}
      {data && <pre>{JSON.stringify(data, null, 2)} </pre>}
    </div>
  );
};

export default GetCharcter;
