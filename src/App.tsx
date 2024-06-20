// App.tsx
import React, { useState } from 'react';
import './App.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Jokes from './components/Jokes';
import { charyJokes as initialJokes } from './data';

function App() {
  const [jokes, setJokes] = useState(initialJokes);
  const [newJokeQuestion, setNewJokeQuestion] = useState('');
  const [newJokeAnswer, setNewJokeAnswer] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newJoke = {
      question: newJokeQuestion,
      answer: newJokeAnswer,
    };
    setJokes([...jokes, newJoke]);
    setNewJokeQuestion('');
    setNewJokeAnswer('');
  };

  return (
    <div className="App">
      <h2>Chary's Jokes</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a joke question"
          value={newJokeQuestion}
          onChange={(e) => setNewJokeQuestion(e.target.value)}
        />
        <input
          type="text"
          placeholder="Add a joke answer"
          value={newJokeAnswer}
          onChange={(e) => setNewJokeAnswer(e.target.value)}
        />
        <button type="submit">Add Joke</button>
      </form>
      {jokes.map((joke, index) => (
        <Jokes key={index} question={joke.question} answer={joke.answer} />
      ))}
    </div>
  );
}

export default App;
