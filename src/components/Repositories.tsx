import { FC } from 'react'
import { Buttons } from './Buttons'
import { Repository } from './Repository'

export const Repositories: FC = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center space-y-4">
      <Repository />
      <Repository />
      <Repository />
      <Repository />
      <Repository />

      <Buttons label="View on GitHub" />
    </div>
  )
}
