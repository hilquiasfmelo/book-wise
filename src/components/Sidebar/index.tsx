import Image from 'next/image'
import { signOut, useSession } from 'next-auth/react'
import { SignIn, SignOut } from 'phosphor-react'
import { useRouter } from 'next/router'

import { Navigation } from '../Navigation'
import { Text } from '../Typography'

import { LoginButton, SidebarContainer, UserDetails } from './styles'
import { Avatar } from '../Avatar'

export const Sidebar = () => {
  const router = useRouter()

  const { data: session } = useSession()

  const user = session?.user

  function handleOpenProfile() {
    router.push(`/profile/${user?.id}`)
  }

  return (
    <SidebarContainer>
      <div>
        <Image
          className="logo"
          width={128}
          height={24}
          unoptimized
          src="/images/logo.svg"
          alt=""
        />
        <Navigation />
      </div>

      <footer>
        {!user ? (
          <div>
            <LoginButton href="/login">
              Fazer login
              <SignIn size={24} />
            </LoginButton>
          </div>
        ) : (
          <UserDetails>
            <Avatar
              src={String(user?.avatar_url)}
              alt="Foto Perfil"
              size="sm"
              onClick={handleOpenProfile}
              css={{ cursor: 'pointer' }}
            />
            <Text size="sm">{user?.name}</Text>
            <SignOut color="#F75A68" size={24} onClick={() => signOut()} />
          </UserDetails>
        )}
      </footer>
    </SidebarContainer>
  )
}
