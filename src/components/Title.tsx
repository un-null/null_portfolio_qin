import { FC } from 'react'

type Props = {
  title: string
}

export const Title: FC<Props> = ({ title }) => {
  return (
    <h1 className="w-full border-b border-gray-200 pb-5 text-3xl font-bold">
      {title}
    </h1>
  )
}
