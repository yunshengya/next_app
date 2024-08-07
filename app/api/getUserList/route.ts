import { cookies } from 'next/headers'
 
export async function POST() {
  const cookieStore = cookies()
  const token = cookieStore.get('test')
  // console.log(token)
 
  return new Response('OK', {
    status: 200,
    headers: {
      'Set-Cookie': 'test=value; Max-Age=0; Path=/; HttpOnly; SameSite=Lax'
    }
  })
}
