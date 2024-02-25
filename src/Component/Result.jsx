import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Quiz.css';
import Main from "./Main";

const Result = (props) => {
  const [resultDetail, setresultDetail] = useState(true);
  const { score, totalQuestions, attemptedQuestions, correctAnswers, wrongAnswers } = props;

  return (
    <>
      {resultDetail ? (
        <div>
          <h2 className="result-container">Result</h2>
          <div className="result-box">
            <p className="Tagline">Your score is {score}</p>
            <div className="details-box">
              <p className="details-text">Total no. of questions</p>
              <p className="score"><b>{totalQuestions}</b></p>
              <p className="details-text">Number of attempted questions</p>
              <p className="score"><b>{attemptedQuestions}</b></p>
              <p className="details-text">Number of correct answers</p>
              <p className="score"><b>{correctAnswers}</b></p>
              <p className="details-text">Number of wrong answers</p>
              <p className="score"><b>{wrongAnswers}</b></p>
            </div>
            <div>
              <button className="functional-btn" onClick={() => setresultDetail(false)}>Play Again</button>
              <Link to="/">
                <button className="functional-btn">Back to home</button>
              </Link>
            </div>
          </div>
        </div>
      ) :
        (<div>
          <Main />
        </div>)
      }
    </>
  );
};

export default Result;
