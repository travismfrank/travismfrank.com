import { useState } from 'react';

import './Contact.css';

import BannerShell from '../shells/BannerShell';
import generateSrcmap from '../../utils/srcmap';

// Import images
const contactImages = import.meta.globEager('./../../assets/images/contact/*');

function Contact() {
  const [sendStatus, setSendStatus] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const contactImageUrl = contactImages['./../../assets/images/contact/contact.jpg'].default;
  const contactSrcmap = generateSrcmap(
    contactImages,
    './../../assets/images/contact/',
    'contact',
    '.jpg'
  );

  function handleSubmit(event) {
    event.preventDefault();
    setSendStatus('pending');
    fetch(window.location.origin + '/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name,
        email,
        subject,
        message
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(res => {
        if (res.status === 200) {
          setSendStatus('success');
        } else {
          setSendStatus('error');
        }
      })
      .catch(res => {
        setSendStatus('error');
      });
  }

  return (
    <BannerShell
      bannerSrc={contactImageUrl}
      srcMap={contactSrcmap}
      titleText="Contact"
    >
      {sendStatus === '' && <form className="email-form" onSubmit={handleSubmit}>
        <label>
          Your Name
          <br />
          <input type="text" value={name} onChange={e => setName(e.target.value)} required />
        </label>
        <label>
          Your Email Address
          <br />
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </label>
        <label>
          Subject
          <br />
          <input type="text" value={subject} onChange={e => setSubject(e.target.value)} required />
        </label>
        <label>
          Your Message
          <br />
          <textarea id="email-message-input" value={message} onChange={e => setMessage(e.target.value)} required />
        </label>
        <input id="email-submit" type="submit" value="Submit" />
      </form>}
      {sendStatus === 'pending' && <p>
        Sending your message...
      </p>}
      {sendStatus === 'success' && <p>
        Thanks for the message! I'll get back to you soon.
      </p>}
      {sendStatus === 'error' && <p>
        Whoops! Something went wrong. Try refreshing the page- if the issue persists,
        let me know on <a href="https://twitter.com/TravisFrankMTG">Twitter</a>.
      </p>}
    </BannerShell>
  );
}

export default Contact;
