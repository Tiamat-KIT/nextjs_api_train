import type { NextApiRequest, NextApiResponse } from 'next';
type Person = {
  name: string;
};
export default async (req: NextApiRequest, res: NextApiResponse<Person>) => {
  console.log(res.json.name);
  //const {name} = req.query
  res.status(200).json({ name: 'Taiki' });
};
