import fm from 'front-matter';

export async function onRequestGet({ env }) {
  const respData = {
    posts: []
  };

  // Grab all post keys
  const postKeys = await env.travismfrank.get('post_keys');

  for (const key of postKeys.split(',')) {
    // Get doc, parse front matter
    const storedDoc = await env.travismfrank.get(key);
    const parsedDoc = fm(storedDoc);

    respData.posts.push({
      publishDate: parsedDoc.attributes["publish_date"],
      updateDate: parsedDoc.attributes["update_date"],
      title: parsedDoc.attributes["title"],
      content: parsedDoc.body,
    });
  }

  // Sort posts in backwards-chronological order
  respData.posts.sort((firstEl, secondEl) => {
    const firstDate = Date.parse(firstEl.publishDate);
    const secondDate = Date.parse(secondEl.publishDate);

    if (firstDate > secondDate) {
      return -1;
    } else if (firstDate < secondDate) {
      return 1;
    }
    return 0
  });

  return new Response(JSON.stringify(respData), {
    headers: {
      "Content-type": "application/json"
    }
  });
}
