import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'

import { AuthButton, AuthButtonsContainer } from './styles'
import Image from 'next/image'

type AuthButtonsProps = {
  callbackUrl?: string
}

export const AuthButtons = ({ callbackUrl = '/' }: AuthButtonsProps) => {
  const router = useRouter()

  const handleSignIn = (provider?: string) => {
    if (!provider) {
      router.push('/')
      return
    }

    signIn(provider, {
      callbackUrl,
    })
  }
  return (
    <AuthButtonsContainer>
      <AuthButton onClick={() => handleSignIn('google')}>
        <Image
          width={32}
          height={32}
          src="/images/icons/google.svg"
          unoptimized
          alt="Google Logo"
        />
        Entrar com Google
      </AuthButton>

      <AuthButton onClick={() => handleSignIn('github')}>
        <Image
          width={32}
          height={32}
          src="/images/icons/github.svg"
          unoptimized
          alt="Github Logo"
        />
        Entrar com Github
      </AuthButton>

      <AuthButton onClick={() => handleSignIn()}>
        <Image
          width={32}
          height={32}
          src="/images/icons/rocket.svg"
          unoptimized
          alt="Rocket Icon"
        />
        Acessar como visitante
      </AuthButton>
    </AuthButtonsContainer>
  )
}
