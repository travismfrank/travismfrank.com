export async function onRequest({ params }) {
  return new Response(`There's nothing at ${params.path}`, {
    status: 404
  });
}
