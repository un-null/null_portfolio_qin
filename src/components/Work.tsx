import dayjs from 'dayjs'
import Image from 'next/image'
import { FC } from 'react'
import { Portfolio } from 'types'

export const Work: FC<Omit<Portfolio, 'id'>> = ({
  title,
  description,
  created_at,
  thumbnail,
}) => {
  return (
    <li className="h-96 w-full rounded-sm">
      <div className="relative grid h-[184px] w-full place-items-center bg-slate-100">
        <Image src={thumbnail.url} alt={`${title} thumbnail`} layout="fill" />
      </div>
      <div className="my-4 flex flex-col items-start justify-center space-y-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="h-[100px] text-base font-medium">{description}</p>
        <time className="text-xs font-bold text-gray-500">
          {dayjs(created_at).format('YYYY.MM')}
        </time>
      </div>
    </li>
  )
}
