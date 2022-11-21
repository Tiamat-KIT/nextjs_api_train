import type { NextApiRequest, NextApiResponse } from 'next';
type Person = {
  name: string;
};

export default async (req: NextApiRequest, res: NextApiResponse<Person>) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return res.status(200).json({ name: 'Taiki' });
};
