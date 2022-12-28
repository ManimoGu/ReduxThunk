import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { GetList } from './Redux/Reducer';

function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
   dispatch(GetList())
  },[])

  const Tasks = useSelector(state => state.Tasks.list)

  console.log(Tasks)


  return (
    <div className="App">
     {
      Tasks.map(item =>(
        <>
        <p>{item.titre}</p>
        </>
      ))
     }
    </div>
  );
}

export default App;
