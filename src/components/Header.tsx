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
    <header className="w-full max-w-screen-lg h-12 mx-auto flex justify-between items-center px-4 font-bold">
      {!media && (
        <Burger opened={opened} onClick={() => setOpened((o) => !o)} />
      )}
      <Link href="/">
        <a className="text-2xl">null</a>
      </Link>
      <nav className="flex gap-4">
        {media && (
          <ul className="flex space-x-4 text-xl">
            <Link href="/about">
              <a>About</a>
            </Link>
            <Link href="/blog">
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
