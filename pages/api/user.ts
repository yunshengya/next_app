export default function handler(req: Request, res: any) {
  console.log('req', req);
  res.status(200).json({ name: 'John Doe' });
}