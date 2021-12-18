import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './redux/actions/todo/action';
import Home from './pages/Home/Home';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addTodo());
  }, []);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
