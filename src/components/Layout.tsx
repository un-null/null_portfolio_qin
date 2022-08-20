import Head from 'next/head'
import { FC, ReactNode } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

type Props = {
  label: string
  description: string
  children: ReactNode
}

export const Layout: FC<Props> = ({ label, children, description }) => {
  return (
    <div className="mx-auto grid min-h-screen w-screen grid-rows-layout">
      <Head>
        <title>{label}</title>
        <meta name="description" content={description} />
      </Head>

      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
