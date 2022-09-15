import { findUserById, usersIdTweets } from 'twitter-api-sdk/dist/types'

export type Blog = {
  id: number
  title: string
  body: string
  created_at: string
}

export type Portfolio = {
  id: number
  title: string
  description: string
  created_at: string
  thumbnail: {
    url: string
  }
}

//mediaの型にurlが含まれてない問題
//sumirenさんか型拡張を調べる

export type TwitterData = {
  user: findUserById['responses']['200']['content']['application/json']
  tweets: usersIdTweets['responses']['200']['content']['application/json']
  media: usersIdTweets['responses']['200']['content']['application/json']['includes']
}

export type TweetProps = {
  text: string | undefined
  created_at: string | undefined
  name: string | undefined
  profile_image_url: string | undefined
  username: string | undefined
  urls?: (string | undefined)[] | undefined
  // media?: {
  //   height?: number | undefined
  //   media_key?: string | undefined
  //   type: string
  //   width?: number | undefined
  //   url: string
  // }[]
}

export type GitHub = {
  id: number
  name: string
  description: string
  star: number
  fork: number
}
