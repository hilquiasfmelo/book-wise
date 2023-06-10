import { ReactNode } from 'react'
import Head from 'next/head'

import { Content, DefaultLayoutContainer } from './styles'
import { Sidebar } from '@/components/Sidebar'

type DefaultLayoutProps = {
  children: ReactNode
  title: string
}

export const DefaultLayout = ({ title, children }: DefaultLayoutProps) => {
  return (
    <DefaultLayoutContainer>
      <Head>
        <title>{`${title}  | BookWise`}</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg" />
      </Head>

      <Sidebar />

      <Content>{children}</Content>
    </DefaultLayoutContainer>
  )
}
