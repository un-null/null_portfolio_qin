import { Avatar } from '@mantine/core'
import dayjs from 'dayjs'
import Image from 'next/image'
import { FC } from 'react'
import { TweetProps } from 'types'

type Props = TweetProps

export const Tweet: FC<Props> = ({
  name,
  username,
  profile_image_url,
  text,
  created_at,
  urls,
}) => {
  return (
    <li className="h-64 w-full">
      <div className="flex h-full">
        <div className="w-1/6 pt-4">
          <Avatar src={profile_image_url} alt="avatar" radius="xl" size="md" />
        </div>
        <div className="flex h-full w-full flex-col pt-4">
          <div className="flex h-6 items-center gap-2 text-base font-bold">
            <h2>{name}</h2>
            <p className="block text-xs text-gray-500">
              @{username}・{dayjs(created_at).format('M月D日')}
            </p>
          </div>
          <div className="mt-1 flex h-full flex-col">
            <div
              className="h-auto whitespace-pre-wrap"
              dangerouslySetInnerHTML={{ __html: text! }}
            />
            <div className="relative h-full w-full">
              {urls
                ? urls.map((url, index) => (
                    <Image
                      key={index}
                      src={url!}
                      alt=""
                      layout="fill"
                      objectFit="contain"
                    />
                  ))
                : undefined}
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}
