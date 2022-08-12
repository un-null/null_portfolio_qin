import { FC } from 'react'

type Props = {
  title: string
}

export const Title: FC<Props> = ({ title }) => {
  return (
    <h1 className="w-full border-b border-gray-300 py-4 font-semibold text-3xl">
      {title}
    </h1>
  )
}
