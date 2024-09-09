import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ params, request, locals }) => {
  try {
    const { email } = await request.json();

    if (!email) {
      return new Response('Missing email in request body', { status: 400 });
    }

    const db = locals.runtime.env.DB;

    const statement = db
      .prepare('INSERT OR IGNORE INTO email (email) VALUES (?)')
      .bind(email);

    await statement.run();

    return new Response('OK', { status: 200 });
  } catch {
    return new Response('Internal Server Error', { status: 500 });
  }
};
