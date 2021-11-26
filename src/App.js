import './Components/todo.css'
import Todo from './Components/Todo';
import Counter from './CounterComponent/Counter';
import Timer from './timer/Timer';

function App() {
  return (
    <div className='container'>
     <h1>Todo</h1>
     <Todo/>
     {/* <Counter initial={0}/>
     <Timer/> */}
    </div>
  );
}

export default App;
