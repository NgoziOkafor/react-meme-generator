import React, { useCallback, useEffect, useState } from 'react';

export default function Meme() {
  const [templates, setTemplates] = useState([]);

  const [randomImage, setRandomImage] = useState(
    'https://api.memegen.link/images/pigeon/engineer.png',
  );
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  console.log('this is topText ', topText);
  console.log('this is bottomText ', bottomText);
  console.log(templates);

  useEffect(() => {
    fetch('https://api.memegen.link/templates/ ')
      .then((res) => res.json())
      .then(
        (response) => {
          // Todo: map the response into a simplified version
          // const templateArray=response.map
          setTemplates(response);
        },
        (error) => {
          console.log('error message; ', error);
        },
      );
  }, []);
  /* console.log('templates ', templates);
  console.log('singleImage; ', templates[1]); */

  function getRandomImage() {
    const randomImages = [];
    templates.map((template) => randomImages.push(template.blank));
    const randomMemes = Math.floor(Math.random() * randomImages.length);
    return randomImages[randomMemes];
  }

  function randomImageHandler() {
    setRandomImage(getRandomImage());
  }

  useCallback(() => {
    randomImageHandler();
  }, []);

  console.log('radomImage; ', randomImage);
  return (
    <main>
      <form className="form--input">
        <input
          placeholder="Top text"
          value={topText}
          onChange={(event) => {
            setTopText(event.currentTarget.value);
          }}
          className="form--input"
        />
        <input
          placeholder="Bottom text"
          value={bottomText}
          onChange={(event) => {
            setBottomText(event.currentTarget.value);
          }}
          className="form--input"
        />
        <button className="form--button">Templates</button>
      </form>

      <div>
        <button onClick={randomImageHandler}>generate random meme</button>
      </div>
      <div>
        <h1>random memes</h1>

        <h2>{topText}</h2>
        <img src={randomImage} alt="generated random memes" />
        <h2>{bottomText}</h2>
      </div>
    </main>
  );
}
// https://api.memegen.link/images/ugandanknuck/~hspecial_characters~q/underscore__-dash--.png

// `https://api.memegen.link/images/${template.1d}/${topText}/${bottomText}.png `
