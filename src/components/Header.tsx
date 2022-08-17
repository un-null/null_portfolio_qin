import { ActionIcon, Burger, Drawer } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { IconMoon, IconX } from '@tabler/icons'
import Link from 'next/link'
import { useState } from 'react'
import { FC } from 'react'

export const Header: FC = () => {
  const media = useMediaQuery('(min-width: 768px)', false)
  const [opened, setOpened] = useState(false)
  return (
    <header className="w-full max-w-screen-lg h-12 mx-auto flex justify-between items-center px-4 font-bold">
      {/* Burger && Navigation */}

      {!media && (
        <Burger opened={opened} onClick={() => setOpened((o) => !o)} />
      )}
      {opened && (
        <nav>
          <Drawer
            opened={opened}
            onClose={() => setOpened(false)}
            size="100%"
            withCloseButton={false}
            classNames={{
              drawer: 'bg-[#E64980] text-white pl-8 pt-16 font-bold',
            }}
          >
            <div onClick={() => setOpened(false)}>
              <IconX
                size={24}
                stroke={4}
                className="text-white hover:bg-transparent cursor-pointer mb-8"
              />
            </div>

            <ul className="w-full h-full flex flex-col space-y-4 text-3xl font-semibold">
              <li>
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a>Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/portfolio">
                  <a>Portfolio</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </Drawer>
        </nav>
      )}

      {/* Logo */}

      <Link href="/">
        <a className="text-2xl">null</a>
      </Link>

      {/* Navigation */}
      <nav className="flex gap-4">
        {media && (
          <ul className="flex space-x-4 text-xl">
            <Link href="/about">
              <a>About</a>
            </Link>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
            <Link href="/portfolio">
              <a>Portfolio</a>
            </Link>
            <Link href="/contact">
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
