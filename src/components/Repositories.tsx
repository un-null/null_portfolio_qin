import { Button } from '@mantine/core'
import Link from 'next/link'
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
    <section className="mx-auto h-auto w-full px-4 pb-6 sm:w-[768px] md:w-full">
      <Title title="GitHub" />

      <ul className="my-6 flex w-full flex-col items-center justify-center space-y-6">
        {repositries.map((repositry) => {
          return (
            <Repository
              key={repositry.id}
              name={repositry.name}
              description={repositry.description}
              star={repositry.star}
              fork={repositry.fork}
            />
          )
        })}
      </ul>

      <Link href="https://github.com/un-null" passHref>
        <Button
          component="a"
          radius="xl"
          className="block h-11 w-40 bg-[#25262B] hover:bg-[#0c0c13]"
          mx="auto"
        >
          View on GitHub
        </Button>
      </Link>
    </section>
  )
}
