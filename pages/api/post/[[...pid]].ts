export default function handler(req: any, res: any) {
  const { pid } = req.query
  console.log(pid, pid.length, 'pid');
  res.end(`Post: ${pid}`)
}