export async function onRequestGet({ env }) {
  const respData = {};

  const postKeys = await env.travismfrank.get('post_keys');
  for (const key of postKeys.split(',')) {
    respData[key] = await env.travismfrank.get(key);
  }

  return new Response(JSON.stringify(respData), {
    headers: {
      "Content-type": "application/json"
    }
  });
}
