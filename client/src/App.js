import logo from './logo.svg';
import './App.css';
import { GetList } from './Redux/Reducers/TaskReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {

  const dispatch = useDispatch()

 useEffect(()=>{

  dispatch(GetList())

 },[])

 const Tasks = useSelector(state =>state.Tasks.list)
 

  return (
    <div className="App">

      {
        Tasks.map(item =>(
          <h3>{item.titre}</h3>
        ))
      }
     
    </div>
  );
}

export default App;
