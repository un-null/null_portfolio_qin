import {
  ActionIcon,
  Burger,
  Drawer,
  useMantineColorScheme,
} from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { IconMoon, IconSun, IconX } from '@tabler/icons'
import Link from 'next/link'
import { useState } from 'react'
import { FC } from 'react'

export const Header: FC = () => {
  const media = useMediaQuery('(min-width: 768px)', false)
  const [opened, setOpened] = useState(false)

  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const dark = colorScheme === 'dark'

  return (
    <header className="mx-auto flex h-16 w-full max-w-screen-lg items-center justify-between px-4 font-bold">
      {/* Burger && Navigation */}

      {!media && (
        <Burger
          opened={opened}
          onClick={() => setOpened((o) => !o)}
          size={24}
        />
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
                className="mb-8 cursor-pointer text-white hover:bg-transparent"
              />
            </div>

            <ul className="flex h-full w-full flex-col space-y-4 text-3xl font-semibold">
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

        <ActionIcon
          variant="outline"
          size={34}
          radius="md"
          color={dark ? 'yellow' : 'gray'}
          onClick={() => toggleColorScheme()}
        >
          {dark ? <IconSun size={18} /> : <IconMoon size={18} />}
        </ActionIcon>
      </nav>
    </header>
  )
}
