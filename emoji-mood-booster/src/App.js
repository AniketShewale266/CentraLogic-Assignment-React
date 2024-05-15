import React, { useState } from 'react';
import Emoji from './component/Emoji';
import Quote from './component/Quote';
import './App.css';

function App() {
  const [quote, setQuote] = useState('');

  const handleEmojiClick = (moodText) => {
    setQuote(moodText);

    // console.log(moodText);
  };

  const handleReset = () => {
    setQuote('');
  };


  return (
    <div className="container">
      <div className="header">
        <h1>✌Emoji Mood Booster✌</h1>
        <button className="button" onClick={handleReset}>Reset</button>
      </div>
      <hr />
      <h2>How are you feeling today?</h2>
      <div className="main">
        <Emoji emoji="😊" title = "Happy" clickHandler={() => handleEmojiClick("Today is going to be a great day!")} />
        <Emoji emoji="😞" title = "Sad" clickHandler={() => handleEmojiClick("It's okay to not be okay. You're not alone.")} />
        <Emoji emoji="😃" title = "Excited" clickHandler={() => handleEmojiClick("You're unstoppable! Go chase your dreams!")} />
        <Emoji emoji="😌" title = "Calm" clickHandler={() => handleEmojiClick("Find peace within yourself and let it guide your day.")} />
      </div>
      <Quote quote={quote} />
    </div>
  );
}

export default App;
