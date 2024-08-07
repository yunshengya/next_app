const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

import Example from './Example'
export default async function Component1() {
  // await sleep(2000)
  return <div>
    <h1>Hello Component1</h1>
    <Example />
  </div>
}
