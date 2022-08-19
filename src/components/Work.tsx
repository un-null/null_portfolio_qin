import { IconPhoto } from '@tabler/icons'
import { FC } from 'react'
import { Portfolio } from 'types'

export const Work: FC<Portfolio> = ({ id, title, content, created_at }) => {
  return (
    <li className="w-80 h-96 rounded-sm">
      <div className="w-full h-44 grid place-items-center bg-slate-100">
        <IconPhoto size={24} />
      </div>
      <div className="flex flex-col justify-center items-start">
        <h1 className="text-2xl font-semibold my-4">{title}</h1>
        <p>{content}</p>
        <time className="my-2 text-sm font-semibold text-gray-500">
          {created_at}
        </time>
      </div>
    </li>
  )
}
