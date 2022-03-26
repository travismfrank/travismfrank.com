---
publish_date: March 24, 2022
update_date: March 24, 2022
title: "Building This Site"
author: Travis Frank
---
**Total Project Time:** 70 Hours\
**Project Duration:** February 17, 2022 - March 17, 2022

Every day for a month, I logged off Slack at 5, cooked dinner and spent time with Leonoor, then sat back down at my desk to hack away at this site from 8-11.  In [Purpose, 2022](https://www.travismfrank.com/writing/2022-03-19_purpose-2022), I ruminated on my *motivations* for rebuilding, and today I will share my *experience* rebuilding.

## Backend dev tries frontend dev
My tool choices were motivated primarily by development speed and transparency.  I'm eager to move on to developing products in my free time, meaning speed was a reasonable concern for me.  I want to rely on very few tools to keep this site up, to keep bloat and lock-in low.  Simple, transparent tools were a must.

### React
This site is a pile of static assets, so I delayed digging into hosting and began with the frontend immediately.  The first tool I considered was my UI library.  React is the only JS UI library I have non-trivial experience with, so it was the obvious choice, but I did briefly consider dropping the UI library altogether.  Building with vanilla JS and HTML was appealing (dependencies suck, rely on nothing, minimalism!), but I knew my intended design would result in a hacked-together UI framework of sorts regardless.  In the end, I chose React.

### Vite
To develop the frontend, I needed a bundler and dev server to unlock quick iteration.  When last I started up a side-project (building an early prototype of a music streaming service), I used [Rollup](https://www.rollupjs.org/guide/en/) in place of [Webpack](https://webpack.js.org/), and set up a custom dev server.  That was an acceptable solution, but my jerry-rigged dev server wasn't up to the task of hot reloading, which was a major pain.  This time, I wanted to use a tool that took care of the dev server for me.

In the web dev community, I was hearing rumblings about unbelievably fast build tools like [Snowpack](https://www.snowpack.dev/) and [Vite](https://vitejs.dev/).  By leveraging web-native ESM imports, these tools build extremely quickly, support tree shaking, and only rebuild files you've changed to get to near-instant hot reloading.  Score!  I tried the pair and settled on Vite.

## My eye for design is "okay"
I threw together some sketches in [Miro](https://miro.com/) to get the ball rolling.  The home and about pages came fairly easily, but by the time I was looking at "Design Musicals page" on my TODO list, I was tired of designing and itching to code.  Five hours in, I dashed off `git init` and set up Vite with some React boilerplate.

Two major challenges came up while building the frontend: CSS and design.

### CSS
Before building this site, CSS was my least-favorite web technology (hot take, I know), but this project warmed me to it.  The [Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) and the [Almanac](https://css-tricks.com/almanac/) from css-tricks.com were excellent resources.  As I flexed the layout and sprinkled in small animations, I began to appreciate the power of CSS.  It's a declarative style system that works across *every* device with a browser, and for the most part, it handles things well- that's close to a miracle!

Regardless, CSS wasn't without its usual foibles.  Without a pre-processer, you're bound to repeat your class selectors more times than is reasonable, and my code is no different.  In fact, by the time I was styling my audio player, I gave up on vanilla CSS and installed sass just so I could reason about my hierarchy of styling.  CSS is also delightfully frustrating to couple with your code.  I added accompanying `.css` files for each React component on the site, but if a component reuses a `className` from another component and the CSS for that selector is in the other component's associated `.css` file, the styling is implicit and hard to reason about.

CSS is still a long way from my list of "technologies I'm excited to work with", but I'm losing my rancor.  It has internal consistency, and now that I've built a mental model of the engine behind the language, I'm comfortable moving to neutraily.

### Design
I designed and built the site mobile-first.  Not only do I believe it's more likely this site will be viewed on mobile (texting someone a link seems like a typical story), I think mobile provides greater constraints on design.  Scaling up to desktop is easier than scaling down to mobile.

I learned quickly when I started coding that my designs had to change as they were implemented.  This was a learning moment- translating sketch to usable website taught me what to avoid next time I approach the drawing desk.

Unfortunately, I'm not a great visual designer.  I could develop the skill (this project is a start), but it doesn't particularly spark my interest.  Thankfully, Leonoor was more than happy to provide opinions on request, and she contributed greatly.  At one point, after designing and implementing the [Musicals](https://www.travismfrank.com/music/musicals) page with icons, she suggested I switch to photos.  We had a good laugh debating our opinions, but from the beginning I knew she was right.  The photos are far more visually interesting, and the icons were overkill given their presence in the navigation menu.

## Personal sites have backends?
This site does have a backend- at the very least it's hosted somewhere, and besides that it's got a contact form.  There's even content, in the form of these posts!

### Cloudflare
This site is hosted on [Cloudflare Pages](https://pages.cloudflare.com/).  My experience hosting static sites on AWS was mostly frustration and excessive complexity given the requirements of the product, so I was primed for an alternative.  Reasons I chose Cloudflare Pages:
- price point (free)
- commitment to renewable energy
- documentation and developer experience

Pages was a joy to develop with, and I highly recommend it to others.  Setup is dead simple, and the documentation is robust.

### Writing
Initially I wanted to store these posts in Cloudflare's distributed [KV store](https://www.cloudflare.com/products/workers-kv/), to the point of building a few serverless functions and propping the whole thing up.  I went to bed, delighted with my new ability to upload posts without redeploying the site, but when I woke up and poked the site again, I saw my mistake: the writing pages were slow now.  Like, loading-spinner-slow.  And since this site gets minimal traffic and I don't post *that* often, it makes for a better user experience to bundle the posts in source code via Vite's support of [glob imports](https://vitejs.dev/guide/features.html#glob-import) and accept the redeployment on each post publish.

*sigh*.  Lesson learned.

**Aside:** serving the posts, images, and audio with a CDN (like [Cloudflare Images](https://www.cloudflare.com/products/cloudflare-images/)) is far more scalable and user-friendly than bundling assets with Vite, but I'm cheap and since my price for this site is currently $0, I'm going to keep bundling them until I find a compelling reason to switch.

### Contact forms, SMTP, and you
The [Contact](https://www.travismfrank.com/contact) page was one of the final pieces I built.  It took all of a single search to learn there was no way to send email without an SMTP server, and while Cloudflare Workers are great, I can't make an SMTP server out of one.

Enter: [SendGrid](https://sendgrid.com/).

I'm sure SendGrid is nothing new to many developers, but I'd never heard of the service.  With my email volume (near-zero), I can get away with SendGrid's free plan to send emails to myself via a Cloudflare Worker.  I cannot send them on behalf of the user, but by including their email address in the email, I can reach out with a response.  SendGrid's documentation was reasonably straightforward.

Verdict: B+, seems like a fine SaaS (reliability feels like the real deciding factor with this service, which I do not have enough data to evaluate)

## Double barline
I could keep tweaking this site forever, but I have to call it quits at some point and start building the things I *really* want to build.  For now, I'm happy with my little corner of the internet.  It's time to get to work.
