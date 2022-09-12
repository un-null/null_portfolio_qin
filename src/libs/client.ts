import { createClient } from 'microcms-js-sdk'
import Client from 'twitter-api-sdk'

export const microClient = createClient({
  serviceDomain: process.env.MICRO_SERVICE_DOMAIN,
  apiKey: process.env.MICRO_API_KEY,
})

export const twitterClient = new Client(process.env.TWITTER_BEARER_TOKEN)
