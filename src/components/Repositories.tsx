import { Button } from '@mantine/core'
import { FC } from 'react'
import { GitHub } from 'types'
import { Repository } from './Repository'
import { Title } from './Title'

const repositries: GitHub[] = [
  {
    id: 1,
    name: 'null/qin-portfolio',
    description: 'Qin Portfolio',
    star: 117,
    fork: 4,
  },
  {
    id: 2,
    name: 'null/qin-portfolio',
    description: 'Qin Portfolio',
    star: 117,
    fork: 4,
  },
  {
    id: 3,
    name: 'null/qin-portfolio',
    description: 'Qin Portfolio',
    star: 117,
    fork: 4,
  },
  {
    id: 4,
    name: 'null/qin-portfolio',
    description: 'Qin Portfolio',
    star: 117,
    fork: 4,
  },
  {
    id: 5,
    name: 'null/qin-portfolio',
    description: 'Qin Portfolio',
    star: 117,
    fork: 4,
  },
]

export const Repositories: FC = () => {
  return (
    <section className="w-full sm:w-[768px] md:w-full h-auto mx-auto px-4">
      <Title title="GitHub" />

      <ul className="w-full flex flex-col justify-center items-center space-y-4">
        {repositries.map((repositry) => {
          return (
            <Repository
              key={repositry.id}
              id={repositry.id}
              name={repositry.name}
              description={repositry.description}
              star={repositry.star}
              fork={repositry.fork}
            />
          )
        })}
      </ul>

      <Button
        color="dark"
        size="md"
        radius="xl"
        className="block"
        mt={40}
        mx="auto"
      >
        View on GitHub
      </Button>
    </section>
  )
}
