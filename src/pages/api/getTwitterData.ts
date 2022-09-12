import { twitterClient } from 'libs/client'
import { NextApiRequest, NextApiResponse } from 'next'

const getTweet = async (req: NextApiRequest, res: NextApiResponse) => {
  const tweetUser = await twitterClient.users.findUserById(
    process.env.TWITTER_ID,
    {
      'user.fields': ['profile_image_url'],
    }
  )

  const tweets = await twitterClient.tweets.usersIdTweets(
    process.env.TWITTER_ID,
    {
      expansions: ['attachments.media_keys'],
      max_results: 5,
      'tweet.fields': ['id', 'text', 'created_at', 'entities'],
    }
  )

  const twitterData = {
    user: tweetUser,
    tweets: tweets,
  }

  return res.status(200).json(twitterData)
}

export default getTweet
