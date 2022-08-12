import { Indicator, Progress } from '@mantine/core'
import { IconGitFork, IconStar } from '@tabler/icons'
import { FC } from 'react'

export const Repository: FC = () => {
  return (
    <div className="w-full h-36 flex flex-col justify-start space-y-2">
      <h1 className="text-2xl font-semibold">null/qin-portfolio</h1>
      <p className="font-xl">Qin Portfolio</p>
      <div className="flex justify-start text-gray-500">
        <div className="flex justify-center items-center space-x-1 mr-4">
          <IconStar size={18} stroke={2.5} />
          <p>117</p>
        </div>
        <div className="flex justify-center items-center space-x-1">
          <IconGitFork size={18} stroke={2.5} />
          <p>4</p>
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
      <div className="flex px-2 space-x-4 font-semibold text-sm">
        <Indicator
          position="middle-start"
          size={7}
          color={'#3178C6'}
          className="pl-2"
        >
          <p>
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
          <p>
            Other <span className="text-gray-500">{2.5}%</span>
          </p>
        </Indicator>
      </div>
    </div>
  )
}
