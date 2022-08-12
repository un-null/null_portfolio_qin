import { Avatar } from '@mantine/core'
import { IconBrandTwitter, IconUser } from '@tabler/icons'
import { FC } from 'react'

export const Tweet: FC = () => {
  return (
    <div className="w-full h-64 flex flex-col justify-start">
      <div className="w-full h-full flex">
        <div className="w-1/12 h-full p-4">
          <Avatar color="blue" radius="xl" size="md">
            <IconUser size={18} />
          </Avatar>
        </div>
        <div className="w-11/12 h-full p-4 mx-4">
          <div className="font-semibold text-xl flex items-center">
            <h2>null</h2>
            <span className="block ml-2 text-gray-500 text-sm">
              @{'un_null'}・{'5月25日'}
            </span>
          </div>
          <div className="h-full grid place-content-center shadow-sm">
            <IconBrandTwitter size={36} stroke={1} className="text-blue-500" />
          </div>
        </div>
      </div>
    </div>
  )
}
