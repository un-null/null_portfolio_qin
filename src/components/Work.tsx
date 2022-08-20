import { IconPhoto } from '@tabler/icons'
import { FC } from 'react'
import { Portfolio } from 'types'

export const Work: FC<Omit<Portfolio, 'id'>> = ({
  title,
  content,
  created_at,
}) => {
  return (
    <li className="h-96 w-full rounded-sm">
      <div className="grid h-[184px] w-full place-items-center bg-slate-100">
        <IconPhoto size={24} />
      </div>
      <div className="my-4 flex flex-col items-start justify-center space-y-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-base font-medium">{content}</p>
        <time className="text-xs font-bold text-gray-500">{created_at}</time>
      </div>
    </li>
  )
}
