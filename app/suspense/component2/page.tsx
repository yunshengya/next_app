const Address = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = (await res.json()).slice(0, 10)
  console.log(data)

  return <ul>
    {data.map(({ title, id }: any) => {
      return <li key={id}>{title}</li>
    })}
  </ul>
}
export default Address
