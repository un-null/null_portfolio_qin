import { FC } from 'react'
import { Buttons } from './Buttons'
import { Title } from './Title'
import { Work } from './Work'

export const Works: FC = () => {
  return (
    <section className="max-w-screen-lg h-auto mx-auto my-8 px-4">
      <Title title="Portfolio" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-6 my-4">
        <Work />
        <Work />
        <Work />
        <Work />
        <Work />
        <Work />
      </div>

      <Buttons label="View All" />
    </section>
  )
}
