import { Indicator, Progress } from '@mantine/core'
import { IconGitFork, IconStar } from '@tabler/icons'
import { FC } from 'react'
import { Repo } from 'types'

export const Repository: FC<Repo> = ({
  name,
  description,
  star,
  fork,
  languages,
  index,
}) => {
  return (
    <li className="flex min-h-0 w-full flex-col justify-start space-y-2 py-2">
      <h2 className="text-lg font-bold">{`un-null/${name}`}</h2>
      <p className="text-base font-medium">
        {description ? description : 'nullのRepositoryです'}
      </p>
      <div className="mt-[2px] flex justify-start font-bold text-gray-500">
        <div className="mr-4 flex items-center justify-center space-x-1">
          <IconStar size={14} stroke={2.5} />
          <p className="text-xs">{star}</p>
        </div>
        <div className="flex items-center justify-center space-x-1">
          <IconGitFork size={14} stroke={2.5} />
          <p className="text-xs">{fork}</p>
        </div>
      </div>
      <Progress sections={languages![index]} size={7} />

      <div className="flex w-auto space-x-[6px] pl-2 text-xs font-bold">
        {languages![index].map((lang, i) => (
          <Indicator
            key={i}
            position="middle-start"
            size={7}
            color={lang.color}
            className="pl-2"
          >
            <p className="pr-4">
              {lang.name} <span className="text-gray-500">{lang.value}%</span>
            </p>
          </Indicator>
        ))}
      </div>
    </li>
  )
}
