import { Avatar } from '@mantine/core'
import { IconBrandTwitter, IconUser } from '@tabler/icons'
import { FC } from 'react'
import { Twitter } from 'types'

export const Tweet: FC<Omit<Twitter, 'id'>> = ({
  username,
  user_id,
  created_at,
  avatar,
}) => {
  return (
    <li className="h-64 w-full">
      <div className="flex h-full w-full">
        <div className="h-full w-1/6 pt-4">
          <Avatar color="blue" radius="xl" size="md">
            {avatar}
          </Avatar>
        </div>
        <div className="h-auto w-full pt-4">
          <div className="flex items-center gap-2 text-base font-bold">
            <h2>{username}</h2>
            <span className="block text-xs text-gray-500">
              @{user_id}・{created_at}
            </span>
          </div>
          <div className="grid h-full place-content-center shadow-sm">
            <IconBrandTwitter size={36} stroke={1} className="text-blue-500" />
          </div>
        </div>
      </div>
    </li>
  )
}
