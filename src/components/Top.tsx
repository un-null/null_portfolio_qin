import { IconBrandFacebook, IconBrandTwitter, IconRss } from '@tabler/icons'

export const Top = () => {
  return (
    <section className="h-60 bg-[#E64980] mb-8">
      <div className="w-full h-full max-w-screen-lg mx-auto flex justify-between items-center px-4 text-white">
        <div className="font-bold">
          <h1 className="text-4xl">null</h1>
          <p className="text-xl">nullのportfolioのためのページです</p>
        </div>

        <div className="flex space-x-4">
          <IconBrandTwitter />
          <IconBrandFacebook />
          <IconRss />
        </div>
      </div>
    </section>
  )
}
