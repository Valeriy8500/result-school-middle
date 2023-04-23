import React from 'react';
import { useFetch } from './hooks/useFetch';
import { useLocalStorage } from './hooks/useLocalStorage';

const url = 'https://jsonplaceholder.typicode.com/posts';

// // Task 1
// function App() {
//   const { data, isLoading, error, refetch } = useFetch(url);

//   const style = {
//     display: 'flex',
//     alignItems: 'center',
//     flexDirection: 'column'
//   }

//   return (
//     <div style={style}>
//       <div style={{ marginBottom: '10px' }}>
//         <button
//           onClick={() => refetch({ params: { _limit: 15 } })}
//         >
//           Перезапросить
//         </button>
//       </div>
//       {isLoading && 'Загрузка...'}
//       {error && 'Произошла ошибка'}
//       {
//         data &&
//         !isLoading &&
//         data.map(item => <div key={item.id}>{item.title}</div>)
//       }
//     </div>
//   );
// }

// export default App;

// Task 2
function App() {
  const [token, { setItem, removeItem }] = useLocalStorage('token');

  const mainStyle = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  }

  return (
    <div style={mainStyle}>
      <p>Твой токен: {token}</p>
      <div style={mainStyle}>
        <button
          onClick={() => setItem('new-token')}
          style={{ marginBottom: '5px' }}>
          Задать токен
        </button>
        <button onClick={() => removeItem()}>
          Удалить токен
        </button>
      </div>
    </div>
  );
}

export default App;
