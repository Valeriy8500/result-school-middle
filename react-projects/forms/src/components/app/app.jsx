import Signin from '../signin/signin';
import Signup from '../signup/signup';
import './app.css';

function App() {

  const onSubmit = (e, value) => {
    e.preventDefault();
    alert(`Данные для отправки на сервер: ${JSON.stringify(value)}`)
  };

  return (
    <div className='app'>
      <Signin onSubmit={onSubmit} />
      <Signup onSubmit={onSubmit} />
    </div>
  );
}

export default App;
