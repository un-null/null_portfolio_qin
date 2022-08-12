import { FC } from 'react'
import { Tweet } from './Tweet'

export const Tweets: FC = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center space-y-2">
      <Tweet />
      <Tweet />
      <Tweet />
    </div>
  )
}
