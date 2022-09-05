import { Button } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { MicroCMSListResponse } from 'microcms-js-sdk'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { Portfolio } from 'types'
import { Title } from './Title'
import { Work } from './Work'

type Props = MicroCMSListResponse<Portfolio>

export const Works: FC<Props> = ({ contents }) => {
  const router = useRouter()
  const home = router.asPath === '/'

  const media = useMediaQuery('(min-width: 768px)', false)

  const numberToShowPortfoliio = home ? (media ? 6 : 3) : contents.length
  const filteredPortfolioData = contents.slice(0, numberToShowPortfoliio)

  return (
    <section className="mx-auto mt-10 h-auto max-w-screen-lg px-4 pb-6 sm:mt-20">
      <Title title="Portfolio" />
      <ul className="my-6 grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 md:grid-cols-3">
        {filteredPortfolioData.map((work) => {
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
