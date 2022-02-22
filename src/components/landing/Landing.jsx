import { useEffect, useState } from 'react';
import './Landing.css';

function Landing() {
  const [contents, setContents] = useState('');
  const [index, setIndex] = useState(0);
  const [isBackspacing, setIsBackspacing] = useState(false);
  const [backspacingIndex, setBackspacingIndex] = useState(0);

  // Typing speed (ms)
  const speedForward = 100,
        speedWait = 975, // Wait between typing and backspacing
        speedBackspace = 25;

  // % = Stop backspacing here
  // * = Start backspacing here
  const text = "Hi! I'm Travis.||I write software, design systems, " +
               "and% build organizations*% create experiences* con" +
               "duct orchestras.";

  async function typewriter() {
    const sleep = delay => new Promise((resolve) => setTimeout(resolve, delay));

    if (!isBackspacing) {
      await sleep(speedForward);

      if (index < text.length) {
        if (text[index] == '|') {
          setContents(contents + '\n');
        } else if (text[index] == '*') {
          setIsBackspacing(true);
          await sleep(speedWait);
          setBackspacingIndex(index - 1);
        } else if (text[index] == '%') {
          // Do nothing, flag for backspacing
        } else {
          setContents(contents + text[index]);
        }
        setIndex(index + 1);
      }
    } else {
      await sleep(speedBackspace);

      if (text[backspacingIndex] === '%') {
        setIsBackspacing(false);
        setBackspacingIndex(index);
      } else {
        setContents(contents.slice(0, -1));
        setBackspacingIndex(backspacingIndex - 1);
      }
    }
  }

  useEffect(async () => {
    await typewriter();
  }, [index, backspacingIndex]);

  return (
    <div className="landing-container">
      <div id="typewriter">
        <h1 className="cursor">{contents}</h1>
      </div>
      <img id="landing-headshot"
             src="../../../src/assets/local/landing_headshot.jpg"
             alt="travis-headshot"
      />
    </div>
  )
}

export default Landing;
