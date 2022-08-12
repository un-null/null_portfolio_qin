import { IconPhoto } from '@tabler/icons'
import { FC } from 'react'

export const Work: FC = () => {
  return (
    <div className="w-80 h-96 rounded-sm">
      <div className="w-full h-44 grid place-items-center bg-slate-100">
        <IconPhoto size={24} />
      </div>
      <div className="flex flex-col justify-center items-start">
        <h1 className="text-2xl font-semibold my-4">Null Portfolio</h1>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit
        </p>
        <time className="my-2 text-sm font-semibold text-gray-500">
          2021.10 - 2021.12
        </time>
      </div>
    </div>
  )
}
