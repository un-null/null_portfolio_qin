import { Octokit } from '@octokit/core'
import { NextApiRequest, NextApiResponse } from 'next'
import { Repositories } from 'types'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const octkit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  })

  const { userName } = req.query

  const query = `
  query Repositories ($userName: String!) { 
    user(login: $userName) { 
      repositories(last: 5, privacy: PUBLIC, orderBy:{field: UPDATED_AT, direction: DESC }){
        edges{
          node {
            id
            name
            description
            forkCount
            stargazerCount
            
            languages(last: 3, orderBy: {field: SIZE, direction: DESC}) {
              totalSize
              edges {
                size
                node {
                  id
                  name
                  color
                }
              }
            }    
          }
        }
      }
    }
  }
  `

  const repositories = await octkit.graphql<Repositories>(query, { userName })

  return res.status(200).json(repositories)
}

export default handler
