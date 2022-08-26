import { Button } from '@mantine/core'
import Link from 'next/link'
import { FC } from 'react'
import { Portfolio } from 'types'
import { Title } from './Title'
import { Work } from './Work'

const portfolio: Portfolio[] = [
  {
    id: 1,
    title: 'Null Portfolio',
    body: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit',
    created_at: '2021.10 - 2021.12 ',
  },
  {
    id: 2,
    title: 'Null Portfolio',
    body: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit',
    created_at: '2021.10 - 2021.12 ',
  },
  {
    id: 3,
    title: 'Null Portfolio',
    body: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit',
    created_at: '2021.10 - 2021.12 ',
  },
  {
    id: 4,
    title: 'Null Portfolio',
    body: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit',
    created_at: '2021.10 - 2021.12 ',
  },
  {
    id: 5,
    title: 'Null Portfolio',
    body: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit',
    created_at: '2021.10 - 2021.12 ',
  },
  {
    id: 6,
    title: 'Null Portfolio',
    body: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit',
    created_at: '2021.10 - 2021.12 ',
  },
]

export const Works: FC = () => {
  return (
    <section className="mx-auto mt-10 h-auto max-w-screen-lg px-4 pb-6 sm:mt-20">
      <Title title="Portfolio" />
      <ul className="my-6 grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 md:grid-cols-3">
        {portfolio.map((work) => {
          return (
            <Work
              key={work.id}
              title={work.title}
              body={work.body}
              created_at={work.created_at}
            />
          )
        })}
      </ul>

      <Link href="/portfolio" passHref>
        <Button
          component="a"
          radius="xl"
          className="block h-11 w-28 bg-[#25262B]"
          mx="auto"
        >
          View All
        </Button>
      </Link>
    </section>
  )
}
