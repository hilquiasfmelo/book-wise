import Image from 'next/image'

import { LogoContainer, LogoSection, WelcomeSection } from './styles'
import { Heading, Text } from '@/components/Typography'
import { AuthButtons } from '@/components/AuthButtons'
import Head from 'next/head'

export default function Login() {
  return (
    <LogoContainer>
      <Head>
        <title>Login | BookWise</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg" />
      </Head>

      <LogoSection>
        <Image
          src="/images/logo.svg"
          width={232}
          height={58}
          unoptimized
          alt=""
        />
      </LogoSection>

      <WelcomeSection>
        <Heading size="lg" color="gray-100">
          Boas Vindas!
        </Heading>

        <Text color="gray-200">Faça seu login ou acesse como visitante.</Text>

        <AuthButtons />
      </WelcomeSection>
    </LogoContainer>
  )
}
