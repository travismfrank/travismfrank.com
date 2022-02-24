import { useEffect, useState } from 'react';

import './Landing.css';

function Landing() {
  const [contents, setContents] = useState('');
  const [index, setIndex] = useState(0);
  const [isBackspacing, setIsBackspacing] = useState(false);
  const [backspacingIndex, setBackspacingIndex] = useState(0);

  // Typing speed (ms)
  const speedForward = 80,
        speedWait = 950, // Wait between typing and backspacing
        speedBackspace = 25;

  // % = Stop backspacing here
  // * = Start backspacing here
  // # = Wait here
  const text = "Hi! I'm Travis.||I write% words*% music* software,#" +
               " design% interfaces* systems,# and% build organizat" +
               "ions*% create experiences* conduct orchestras.";

  async function typewriter() {
    const sleep = delay => new Promise((resolve) => setTimeout(resolve, delay));

    if (!isBackspacing) {
      // Add jitter to make it more human
      await sleep(speedForward * Math.random() * (1 + Math.random()));

      if (index < text.length) {
        if (text[index] == '|') {
          setContents(contents + '\n');
        } else if (text[index] == '*') {
          setIsBackspacing(true);
          await sleep(speedWait);
          setBackspacingIndex(index - 1);
        } else if (text[index] == '%') {
          // Do nothing, flag for backspacing
        } else if (text[index] == '#') {
          await sleep(speedWait);
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
