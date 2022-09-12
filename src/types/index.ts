import { findUserById, usersIdTimeline } from 'twitter-api-sdk/dist/types'

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

export type TwiiterData = {
  user: findUserById['responses']['200']['content']['application/json']
  tweets: usersIdTimeline['responses']['200']['content']['application/json']
}

export type TweetProps = {
  text: string | undefined
  created_at: string | undefined
  name: string | undefined
  profile_image_url: string | undefined
  username: string | undefined
  // entities?: {
  // urls?: {
  //   title: string | undefined
  //   expanded_url: string
  //   images?: {
  //     url: string
  //   }[]
  // }[]
  // hastags?: {
  //   tag: string
  // }[]
  // }
}

export type GitHub = {
  id: number
  name: string
  description: string
  star: number
  fork: number
}
