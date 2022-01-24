import React, { useState } from 'react';

export default function Meme() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  console.log('this is topText ', topText);
  console.log('this is bottomText ', bottomText);
  return (
    <main>
      <form className="form">
        <input
          type="text"
          placeholder="Top text"
          value={topText}
          onChange={(event) => {
            setTopText(event.currentTarget.value);
          }}
          className="form--input"
        />
        <input
          type="text"
          placeholder="Bottom text"
          value={bottomText}
          onChange={(event) => {
            setBottomText(event.currentTarget.value);
          }}
          className="form--input"
        />
        <button className="form--button">Generating Image</button>
      </form>
    </main>
  );
}
