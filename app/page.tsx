import Style from '@/assets/css/app/page.module.scss'
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
export default async function Page() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json();
  return (
    <>
      <p className={lusitana.className}>
        字体测试···
      </p>
      <p>
        字体测试···
      </p>
      <Image width={20} height={23} src="/logo.png" alt="" />
      <ul>
        {data.map((item: any) => (
          <li key={item.id} className={Style.item}>{item.title}</li>
        ))}
      </ul>
    </>
  )
}
