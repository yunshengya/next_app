export default function Blog({ post }: any) {
  return (
      <>
          <header>{post.title}</header>
          <main>{post.body}</main>
      </>
  )
}
export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()
  const paths = posts.map((post: any) => ({
      params: { id: String(post.id) },
  }))
  return { paths, fallback: 'blocking' }
}
function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}
export async function getStaticProps({ params }: any) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${getRandomInt(100)}`)
  const post = await res.json()
  return {
      props: { post },
      revalidate: 3,
  }
}
