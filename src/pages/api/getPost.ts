// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { microClient } from 'libs/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const getPost = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = await microClient.getList({
    endpoint: 'blog',
    queries: {
      limit: req.body.limit,
      offset: req.body.offset,
    },
  })

  res.status(200).json(data.contents)
}

export default getPost
