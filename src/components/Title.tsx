import { FC } from 'react'

type Props = {
  title: string
}

export const Title: FC<Props> = ({ title }) => {
  return (
    <h1 className="w-full border-b border-gray-300 pb-5 font-bold text-4xl">
      {title}
    </h1>
  )
}
