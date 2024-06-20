// Jokes.tsx
import { useReducer } from 'react';
import './jokes.scss';
import { rateCount } from './JokesReducer';



const Jokes = ({ question, answer }) => {
  const [rateCountState, dispatch] = useReducer(rateCount, 0);

  const increaseRate = () => {
    dispatch({ type: 'addRate' });
  };

  const decreaseRate = () => {
    dispatch({ type: 'decreaseRate' });
  };

  // Determine star count based on rateCountState
  const renderStars = () => {
    let starCount = 0;
    if (rateCountState === 0) {
      starCount = 0;
    } else if (rateCountState >= 1 && rateCountState <= 5) {
      starCount = rateCountState;
    } else if (rateCountState > 5) {
      starCount = 6; // Display 6 stars if rateCountState is more than 5
    }

    const stars = [];
    for (let i = 0; i < 6; i++) {
      if (i < starCount) {
        stars.push(<i key={i} className="fas fa-star"></i>);
      } else {
        stars.push(<i key={i} className="far fa-star"></i>);
      }
    }
    return stars;
  };

  return (
    <div className="jokesContainer">
      <div className="rightColumn">
        <div className="rate">
          <i onClick={increaseRate} className="fas fa-arrow-up"></i>
          <p className="rateCount">{rateCountState}</p>
          <i onClick={decreaseRate} className="fas fa-arrow-down"></i>
        </div>
        <div className="jokeBox">
          <p className="jokeQuiz">{question}</p>
          <p className="jokeAnsw">{answer}</p>
        </div>
      </div>
      <div className="endColumn">
        {renderStars()}
      </div>
    </div>
  );
};

export default Jokes;
