import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ params, request, locals }) => {
  const { email } = await request.json();

  if (!email) {
    return new Response('Missing email', { status: 400 });
  }

  const db = locals.runtime.env.DB;

  console.log(db);

  return new Response('OK', { status: 200 });
};
