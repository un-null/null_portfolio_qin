import { twitterClient } from 'libs/client'
import { NextApiRequest, NextApiResponse } from 'next'

const getTwitterData = async (req: NextApiRequest, res: NextApiResponse) => {
  const tweetUser = await twitterClient.users.findUserById(
    process.env.TWITTER_ID,
    {
      'user.fields': ['profile_image_url'],
    }
  )

  const tweets = await twitterClient.tweets.usersIdTweets(
    process.env.TWITTER_ID,
    {
      max_results: 5,
      'tweet.fields': ['id', 'text', 'created_at', 'attachments'],
      'media.fields': ['url', 'alt_text', 'width', 'height', 'media_key'],
      expansions: ['attachments.media_keys'],
    }
  )

  const twitterData = {
    user: tweetUser,
    tweets: tweets,
  }

  return res.status(200).json(twitterData)
}

export default getTwitterData
