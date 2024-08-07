import React from 'react'
const About = ({ params }: any) => {
  return <>
    <h1>订单详情页面</h1>
    <span>{params.orderId}</span>
  </>
}
export default About
