import fm from 'front-matter';

export async function onRequestGet({ env, params }) {
  const storedDoc = await env.travismfrank.get(params.postid);
  const parsedDoc = fm(storedDoc);

  const respData = {
    content: parsedDoc.body,
    id: params.postid,
    publishDate: parsedDoc.attributes["publish_date"],
    title: parsedDoc.attributes["title"],
    updateDate: parsedDoc.attributes["update_date"],
  };

  return new Response(JSON.stringify(respData), {
    headers: {
      "Content-type": "application/json"
    }
  });
}
