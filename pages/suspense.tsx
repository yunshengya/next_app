/**
   2.2 Suspense 和 Streaming
  上面提到了，服务端只能在获取所有数据后渲染 HTML，React 只能在下载了所有组件代码后才能进行水合。
  为了解决这个问题，就有了 Suspense 组件，它允许你推迟渲染某些内容，直到满足某些条件（例如数据加载完毕）
 */
import { Suspense } from 'react'

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

async function Component1() {
  await sleep(2000)
  return <h1>Hello Component1</h1>
}

async function Component2() {
  await sleep(3000)
  return <h1>Hello Component2</h1>
}

async function Component3() {
  await sleep(4000)
  return <h1>Hello Component3</h1>
}

export default function MySuspense() {
  return (
    <section style={{ padding: '20px' }}>
      <Suspense fallback={<p>Loading Component1</p>}>
        <Component1 />
      </Suspense>
      <Suspense fallback={<p>Loading Component2</p>}>
        <Component2 />
      </Suspense>
      <Suspense fallback={<p>Loading Component3</p>}>
        <Component3 />
      </Suspense>
    </section>
  )
}
