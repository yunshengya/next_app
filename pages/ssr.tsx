// 服务端渲染
export async function getServerSideProps() {
  const data = [{ 'id': 1, 'name': 'ljj' }]
  return { props: { data } }
}
// getServerSideProps 传入的是什么，这里就接收什么名称的参数
const SSR = ({ data }: any) => {
  return <span id='test'>{JSON.stringify(data)}</span>
}
export default SSR;
