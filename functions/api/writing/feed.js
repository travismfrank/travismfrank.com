export async function onRequestGet(context) {
  const { env } = context;

  return new Response('Hello, world!');
}
