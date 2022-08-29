import { useMediaQuery } from '@mantine/hooks'
import { IconBrandFacebook, IconBrandTwitter, IconRss } from '@tabler/icons'
import { FC } from 'react'

export const Top: FC = () => {
  const media = useMediaQuery('(min-width: 768px)', false)

  return (
    <section className="mb-8 h-60 bg-[#E64980]">
      <div
        className={
          media
            ? 'mx-auto flex h-full w-full max-w-screen-lg items-center justify-between px-4 text-white'
            : 'flex h-full w-full flex-col justify-center space-y-8 px-4 text-white'
        }
      >
        <div className="space-y-0.5 font-bold">
          <h1 className="text-3xl">null</h1>
          <p className="text-xl">nullのportfolioのためのページです</p>
        </div>

        <div className="flex space-x-2">
          <IconBrandTwitter />
          <IconBrandFacebook />
          <IconRss />
        </div>
      </div>
    </section>
  )
}
