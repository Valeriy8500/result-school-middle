import React from 'react';
import { useFetch } from './useFetch';
import { style } from '../../constans';

const url = 'https://jsonplaceholder.typicode.com/posts';

function AppForUseFetch() {
  const { data, isLoading, error, refetch } = useFetch(url);

  return (
    <div style={style}>
      <h2>Задание 1</h2>
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

export default AppForUseFetch;