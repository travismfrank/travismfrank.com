import { useEffect, useState } from 'react';

import './Landing.css';
import landingImageUrl from '../../../src/assets/images/landing_headshot.jpg';
import landingImageUrl480 from '../../assets/images/landing_headshot-480.jpg';
import landingImageUrl720 from '../../assets/images/landing_headshot-720.jpg';
import landingImageUrl1080 from '../../assets/images/landing_headshot-1080.jpg';
import landingImageUrl3840 from '../../assets/images/landing_headshot-3840.jpg';
import generateSrcset from '../../utils/srcset.js';

function Landing() {
  const [contents, setContents] = useState('');
  const [index, setIndex] = useState(0);
  const [isBackspacing, setIsBackspacing] = useState(false);
  const [backspacingIndex, setBackspacingIndex] = useState(0);

  // Typing speed (ms)
  const speedForward = 45,
        speedWait = 500, // Wait between typing and backspacing
        speedBackspace = 25;

  // % = Stop backspacing here
  // * = Start backspacing here
  // # = Wait here
  const text = "Hi! I'm Travis.#||I write software,# %solve problems*%build" +
               " solutions*design systems,# and conduct orchestras.";

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
          await sleep(speedWait / 2);
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
           src={landingImageUrl}
           srcSet={generateSrcset({
             480: landingImageUrl480,
             720: landingImageUrl720,
             1080: landingImageUrl1080,
             3840: landingImageUrl3840
           })}
           sizes="100vw"
           alt="travis-headshot"
      />
    </div>
  )
}

export default Landing;
