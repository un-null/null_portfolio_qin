import { Button } from '@mantine/core'
import { MicroCMSListResponse } from 'microcms-js-sdk'
import Link from 'next/link'
import { FC } from 'react'
import { Portfolio } from 'types'
import { Title } from './Title'
import { Work } from './Work'

type Props = MicroCMSListResponse<Portfolio>

export const Works: FC<Props> = (props) => {
  return (
    <section className="mx-auto mt-10 h-auto max-w-screen-lg px-4 pb-6 sm:mt-20">
      <Title title="Portfolio" />
      <ul className="my-6 grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 md:grid-cols-3">
        {props.contents.map((work) => {
          return (
            <Work
              key={work.id}
              title={work.title}
              description={work.description}
              created_at={work.created_at}
              thumbnail={work.thumbnail}
            />
          )
        })}
      </ul>

      <Link href="/portfolio" passHref>
        <Button
          component="a"
          radius="xl"
          className="block h-11 w-28 bg-[#25262B] hover:bg-[#0c0c13]"
          mx="auto"
        >
          View All
        </Button>
      </Link>
    </section>
  )
}
