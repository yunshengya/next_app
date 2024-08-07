// 静态网站生成
export default function SSG({ data }: any) {
  return (
    <ul>
      {data.map((item: any) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  )
}
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  return {
    props: {
      data,
    },
  }
}
