import { ReactElement } from 'react'

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

export type Twitter = {
  id: number
  username: string
  user_id: string
  created_at: string
  avatar: ReactElement
  // content: string
}

export type GitHub = {
  id: number
  name: string
  description: string
  star: number
  fork: number
}
