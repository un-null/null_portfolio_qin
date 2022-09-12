import { TypographyStylesProvider } from '@mantine/core'
import Link from 'next/link'
import { FC } from 'react'
import { Blog } from 'types'
import dayjs from 'dayjs'

export const Post: FC<Blog> = ({ id, title, body, created_at }) => {
  return (
    <li className="max-w-screen-md space-y-2">
      <Link href={`/blog/${id}`} passHref>
        <a className="cursor-pointer">
          <h1 className="text-2xl font-semibold">{title}</h1>
          <TypographyStylesProvider>
            <article
              dangerouslySetInnerHTML={{ __html: body }}
              className="my-2 text-base font-medium line-clamp-2"
            />
          </TypographyStylesProvider>
          <time className="text-xs font-bold text-gray-500">
            {dayjs(created_at).format('YYYY.MM.DD')}
          </time>
        </a>
      </Link>
    </li>
  )
}
