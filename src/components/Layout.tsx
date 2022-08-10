import Head from 'next/head'
import { FC, ReactNode } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

type Props = {
  label: string
  children: ReactNode
}

export const Layout: FC<Props> = ({ label, children }) => {
  return (
    <div className="w-screen min-h-screen mx-auto grid grid-rows-layout">
      <Head>
        <title>{label}</title>
      </Head>

      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
