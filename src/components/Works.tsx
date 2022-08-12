import { FC } from 'react'
import { Work } from './Work'

export const Works: FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-6 my-4">
      <Work />
      <Work />
      <Work />
      <Work />
      <Work />
      <Work />
    </div>
  )
}
