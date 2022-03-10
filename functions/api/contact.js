export async function onRequestPost({ request, env }) {
  const body = await request.json();

  const emailFetch = await fetch('https://api.sendgrid.com/v3/mail/send', {
    body: JSON.stringify({
      'from': {
        'email': 'travis@travismfrank.com',
      },
      'personalizations': [
        {
          'to': [
            {
              'email': 'travis@travismfrank.com'
            }
          ]
        }
      ],
      'subject': 'Message from travismfrank.com: ' + body.subject,
      'content': [
        {
          'type': 'text/plain',
          'value': 'From: ' + body.name + 
            '\n\nSubject: ' + body.subject +
            '\n\nMessage: ' + body.message + 
            '\n\nRespond: ' + body.email
        }
      ]
    }),
    headers: {
      'Authorization': `Bearer ${env.SENDGRID_API_KEY}`,
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });

  if (emailFetch.status === 202) {
    return new Response('Successfully sent email');
  } else if (emailFetch.status >= 400) {
    return new Response(JSON.stringify({
      message: 'Problem sending email',
      error: await emailFetch.json()
    }), {
      headers: {
        'Content-Type': 'application/json'
      },
      status: 500
    })
  } else {
    return new Response(JSON.stringify({
      message: 'Unknown status code sending email',
      emailResponse: await emailFetch.json()
    }), {
      headers: {
        'Content-Type': 'application/json'
      },
      status: 500
    })
  }

  
}
