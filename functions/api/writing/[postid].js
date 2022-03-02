import fm from 'front-matter';

export async function onRequestGet({ env, params }) {
  const storedDoc = await env.travismfrank.get(params.postid);
  const parsedDoc = fm(storedDoc);

  const respData = {
    publishDate: parsedDoc.attributes["publish_date"],
    updateDate: parsedDoc.attributes["update_date"],
    title: parsedDoc.attributes["title"],
    content: parsedDoc.body,
  };

  return new Response(JSON.stringify(respData), {
    headers: {
      "Content-type": "application/json"
    }
  });
}
