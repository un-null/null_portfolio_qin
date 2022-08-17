import { Button } from '@mantine/core'
import { FC } from 'react'
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

      <div className="w-full h-auto grid place-items-center">
        <Button color="dark" size="md" radius="xl" className="my-4">
          View All
        </Button>
      </div>
    </section>
  )
}
