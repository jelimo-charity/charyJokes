// import React from 'react';
import './App.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Jokes from './components/Jokes';
import { charyJokes } from './data';

function App() {
  // const handleSubmit = () =>{
  //     // e.preventDefault()
      
  // }
  return (
    <div className="App">
      <h2>Chary's Jokes</h2>
      {/* <form className="form" onSubmit={handleSubmit}>
        <input type="text" placeholder='Add a joke' />
        <button type='submit'>AddJoke</button>
      </form> */}
      {charyJokes.map((joke, index) => (
        <Jokes key={index} question={joke.question} answer={joke.answer} />
      ))}
    </div>
  );
}

export default App;
