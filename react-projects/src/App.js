import React from 'react';
import { useFetch } from './useFetch';

const url = 'https://jsonplaceholder.typicode.com/posts';

function App() {
  const { data, isLoading, error, refetch } = useFetch(url);

  const style = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  }

  return (
    <div style={style}>
      <div style={{ marginBottom: '10px' }}>
        <button
          onClick={() => refetch({ params: { _limit: 15 } })}
        >
          Перезапросить
        </button>
      </div>
      {isLoading && 'Загрузка...'}
      {error && 'Произошла ошибка'}
      {
        data &&
        !isLoading &&
        data.map(item => <div key={item.id}>{item.title}</div>)
      }
    </div>
  );
}

export default App;
