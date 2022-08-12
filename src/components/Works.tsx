import { FC } from 'react'
import { Buttons } from './Buttons'
import { Work } from './Work'

export const Works: FC = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-6 my-4">
        <Work />
        <Work />
        <Work />
        <Work />
        <Work />
        <Work />
      </div>

      <Buttons label="View All" />
    </div>
  )
}
