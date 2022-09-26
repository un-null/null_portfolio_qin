import { Button } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { useFetchGithub } from 'libs/hooks/useFetchGithub'
import Link from 'next/link'
import { FC, useMemo } from 'react'
import { Repository } from './Repository'
import { Title } from './Title'

export const Repositories: FC = () => {
  const media = useMediaQuery('(min-width: 768px)', false)

  const { repos, error } = useFetchGithub()

  const numberToShowRepo = media ? 5 : 3

  const filteredReposData = useMemo(() => {
    return repos?.slice(0, numberToShowRepo)
  }, [repos, numberToShowRepo])

  const languageData = useMemo(() => {
    if (repos) {
      return filteredReposData?.map((repo) => {
        const totalSize = repo.node.languages.totalSize
        return repo.node.languages.edges.flatMap((lang) => {
          const size = Number(((lang.size / totalSize) * 100).toFixed(1))

          return {
            name: lang.node.name,
            color: lang.node.color,
            value: size,
          }
        })
      })
    }
  }, [filteredReposData, repos])

  if (error) throw new Error(error.message)

  if (!languageData) throw new Error('LanguageData does not exist')

  return (
    <section className="mx-auto h-auto w-full px-4 pb-6 sm:w-[768px] md:w-full">
      <Title title="GitHub" />

      <ul className="my-6 flex w-full flex-col items-center justify-center space-y-6 pb-6">
        {filteredReposData?.map((repo, index) => {
          return (
            <Repository
              key={repo.node.id}
              name={repo.node.name}
              description={repo.node.description}
              star={repo.node.stargazerCount}
              fork={repo.node.forkCount}
              languages={languageData}
              index={index}
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
