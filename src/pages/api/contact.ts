import { NextApiRequest, NextApiResponse } from 'next'

const contact = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body

  return res.status(200).json(data)
}

export default contact
