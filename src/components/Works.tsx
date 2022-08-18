import { Button } from '@mantine/core'
import { FC } from 'react'
import { Portfolio } from 'types'
import { Title } from './Title'
import { Work } from './Work'

const portfolio: Portfolio[] = [
  {
    id: 1,
    title: 'Null Portfolio',
    content:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit',
    created_at: '2021.10 - 2021.12 ',
  },
  {
    id: 2,
    title: 'Null Portfolio',
    content:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit',
    created_at: '2021.10 - 2021.12 ',
  },
  {
    id: 3,
    title: 'Null Portfolio',
    content:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit',
    created_at: '2021.10 - 2021.12 ',
  },
  {
    id: 4,
    title: 'Null Portfolio',
    content:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit',
    created_at: '2021.10 - 2021.12 ',
  },
  {
    id: 5,
    title: 'Null Portfolio',
    content:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit',
    created_at: '2021.10 - 2021.12 ',
  },
  {
    id: 6,
    title: 'Null Portfolio',
    content:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit',
    created_at: '2021.10 - 2021.12 ',
  },
]

export const Works: FC = () => {
  return (
    <section className="max-w-screen-lg h-auto mx-auto my-8 px-4">
      <Title title="Portfolio" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-6 my-4">
        {portfolio.map((work) => {
          return (
            <Work
              key={work.id}
              id={work.id}
              title={work.title}
              content={work.content}
              created_at={work.created_at}
            />
          )
        })}
      </div>

      <div className="w-full h-auto grid place-items-center">
        <Button color="dark" size="md" radius="xl" className="my-4">
          View All
        </Button>
      </div>
    </section>
  )
}
