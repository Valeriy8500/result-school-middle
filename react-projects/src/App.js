import React from 'react';
import { useFetch } from './hooks/useFetch';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useHover } from './hooks/useHover';
import { useViewportSize } from './hooks/useViewportSize';
import { useWindowScroll } from './hooks/useWindowScroll';
import { useToggle } from './hooks/useToggle';

const url = 'https://jsonplaceholder.typicode.com/posts';

const style = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column'
}

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

// // Task 2
// function App() {
//   const [token, { setItem, removeItem }] = useLocalStorage('token');

//   const mainStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     flexDirection: 'column'
//   }

//   return (
//     <div style={mainStyle}>
//       <p>Твой токен: {token}</p>
//       <div style={mainStyle}>
//         <button
//           onClick={() => setItem('new-token')}
//           style={{ marginBottom: '5px' }}>
//           Задать токен
//         </button>
//         <button onClick={() => removeItem()}>
//           Удалить токен
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;

// // Task 3
// function App() {
//   const { hovered, ref } = useHover();

//   return (
//     <div ref={ref} style={style}>
//       {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
//     </div>
//   );
// }

// export default App;

// // Task 4
// function App() {
//   const { height, width } = useViewportSize();

//   return (
//     <div style={style}>
//       Width: {width}, height: {height}
//     </div>
//   );
// }

// export default App;

// // Task 5
// function App() {
//   const [scroll, scrollTo] = useWindowScroll();

//   return (
//     <div style={style}>
//       <p>Scroll position x: {scroll.x}, y: {scroll.y}</p>
//       <button onClick={() => scrollTo({ y: 0 })}>Scroll to top</button>
//     </div>
//   );
// }

// export default App;

// Task 6
function App() {
  const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal', 'black']);

  const btnStyle = {
    width: '150px',
    height: '30px'
  };

  return (
    <div style={style}>
      <button onClick={() => toggle()} style={btnStyle}>
        {typeof value === 'boolean' ? value.toString() : value}
      </button>
    </div>
  );
}

export default App;