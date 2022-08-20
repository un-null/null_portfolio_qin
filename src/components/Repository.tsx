import { Indicator, Progress } from '@mantine/core'
import { IconGitFork, IconStar } from '@tabler/icons'
import { FC } from 'react'
import { GitHub } from 'types'

export const Repository: FC<Omit<GitHub, 'id'>> = ({
  name,
  description,
  star,
  fork,
}) => {
  return (
    <li className="flex min-h-0 w-full flex-col justify-start space-y-2 py-2">
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-base font-medium">{description}</p>
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
      <Progress
        sections={[
          { value: 50, color: '#3178C6' },
          { value: 47.5, color: '#F1E05A' },
          { value: 2.5, color: '#EDEDED' },
        ]}
        size={7}
      />
      <div className="flex w-auto space-x-[6px] pl-2 text-xs font-bold">
        <Indicator
          position="middle-start"
          size={7}
          color={'#3178C6'}
          className="pl-2"
        >
          <p className="pr-4">
            TypeScript <span className="text-gray-500">{50}%</span>
          </p>
        </Indicator>
        <Indicator
          position="middle-start"
          size={7}
          color={'#F1E05A'}
          className="pl-2"
        >
          <p>
            JavaScript <span className="text-gray-500">{47.5}%</span>
          </p>
        </Indicator>
        <Indicator
          position="middle-start"
          size={7}
          color={'#EDEDED'}
          className="pl-2"
        >
          <p className="pl-4">
            Other <span className="text-gray-500">{2.5}%</span>
          </p>
        </Indicator>
      </div>
    </li>
  )
}
