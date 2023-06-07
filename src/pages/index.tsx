import { signOut, useSession } from 'next-auth/react'

export default function Home() {
  const { data } = useSession()

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>

      <button onClick={() => signOut()}>Deslogar</button>
    </div>
  )
}
