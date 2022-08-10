import { ActionIcon, Burger } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { IconMoon } from '@tabler/icons'
import Link from 'next/link'
import { useState } from 'react'
import { FC } from 'react'

export const Header: FC = () => {
  const media = useMediaQuery('(min-width: 768px)', false)
  const [opened, setOpened] = useState(false)
  return (
    <header className="w-full max-w-screen-lg h-12 mx-auto flex justify-between items-center px-4 font-semibold">
      {!media && (
        <Burger opened={opened} onClick={() => setOpened((o) => !o)} />
      )}
      <h1 className="text-xl">null</h1>
      <nav className="flex gap-4">
        {media && (
          <ul className="flex space-x-4">
            <Link href="/">
              <a>About</a>
            </Link>
            <Link href="/">
              <a>Blog</a>
            </Link>
            <Link href="/">
              <a>Portfolio</a>
            </Link>
            <Link href="/">
              <a>Contact</a>
            </Link>
          </ul>
        )}
        <ActionIcon variant="outline">
          <IconMoon size={18} />
        </ActionIcon>
      </nav>
    </header>
  )
}
