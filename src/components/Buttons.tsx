import { Button } from '@mantine/core'
import { FC } from 'react'

type Props = {
  label: string
}

export const Buttons: FC<Props> = ({ label }) => {
  return (
    <div className="w-full h-auto grid place-items-center">
      <Button color="dark" size="md" radius="xl" className="my-4">
        {label}
      </Button>
    </div>
  )
}
