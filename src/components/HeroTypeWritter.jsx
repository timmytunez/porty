import React, { useEffect, useState } from 'react';

const HeroTypeWritter = ({speed, words}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currenttext, setCurrentText] = useState(" ");
  const currentWord = words && words.length > 0 ? words[currentWordIndex] : '';

  useEffect(() => {

    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex <= currentWord.length) {  // Fix here: changed <= to <
        setCurrentText(currentWord.slice(0, charIndex));
        charIndex++;
      } else {
        // word typed out, clear and move to the next word
        clearInterval(typingInterval);

        setTimeout(() => {
          setCurrentWordIndex((prevIndex) =>
            prevIndex === words.length - 1 ? 0 : prevIndex + 1
          );
        }, 1000);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentWord, speed, words]);

  return (
    <span className='tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mt-7'>
      {currenttext}
    </span>
  );
};

export default HeroTypeWritter;
