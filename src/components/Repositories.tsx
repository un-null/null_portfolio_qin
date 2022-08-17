import { FC } from 'react'
import { Buttons } from './Buttons'
import { Repository } from './Repository'
import { Title } from './Title'

export const Repositories: FC = () => {
  return (
    <section className="w-full sm:w-[768px] md:w-full h-auto mx-auto my-8 px-4 space-y-4">
      <Title title="GitHub" />

      <div className="w-full flex flex-col justify-center items-center space-y-4">
        <Repository />
        <Repository />
        <Repository />
        <Repository />
        <Repository />

        <Buttons label="View on GitHub" />
      </div>
    </section>
  )
}
