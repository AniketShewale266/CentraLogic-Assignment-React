import React from 'react';

function Emoji({ emoji, title, clickHandler }) {
    // console.log(clickHandler);
  return (
    <div className='myEmoji'>
      <span title={title} onClick={clickHandler}>{emoji}</span>
    </div>
  );
}

export default Emoji;
