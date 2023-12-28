import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import QuestionFour from './Components/QuestionFour';
import QuestionFive from './Components/QuestionFive';
function App() {
  const [isLogin,setLogin]=useState(true)

  
  return (
 
    <div className="App">
    <QuestionFour/>
    <QuestionFive/>
    </div>
  );
}

export default App;
